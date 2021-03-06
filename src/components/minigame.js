import React, {useContext, useState, useEffect} from "react";
import SiteContext from '../context/SiteContext';
import KnightButton from './styled/knight-button';
import adventure from './minigame.data';

const MiniGame = props => {
  const context = useContext(SiteContext);
  // const scenes = 5;

  // TODO: combined these to a single useState
  const [walking, setWalking] = useState('is-walking');
  const [paused, setPaused] = useState('is-not-paused');

  // User interaction dialog
  const [dialog, setDialog] = useState({
    dialogClass: 'is-hidden',
    dialogAnswerClass: 'is-hidden',
    resolution: 0,
  });

  // Knight dialog and effect
  const [knightDialog, setKnightDialog] = useState({
    dialogClass: 'is-hidden',
    dialog: 'Hi!',
  });

  // Scene
  const [scene, proceedToNext] = useState(0);

  // Scene effect
  useEffect(() => {
    if (scene === 0) {
      return;
    }

    if (scene < context.scenes) {
      console.log('proceedToNext (useEffect) - should have incremented!', scene);
      setDialog({
        dialogClass: 'is-hidden',
        dialogAnswerClass: 'is-hidden',
        resolution: 0,
      });
      startAdventure();
    } else {
      console.log('Game is done!', scene);
    }
  }, [scene]);

  // Create some refs
  const sceneGroup = React.createRef();
  const sceneContainer = React.createRef();
  const startButton = React.createRef();
  const repeatButton = React.createRef();

  /** Get a random knight dialog from array  */
  function getRandomBalloonMessage() {
    return adventure.dialog[Math.floor(Math.random() * adventure.dialog.length)];
  }

  /** Shows the 'witty' dialog */
  function showBalloonDialog(message) {
    setKnightDialog({
      dialogClass: 'is-shown',
      dialog: message || 'Hi you!',
    });
  }

  /** Remove the -in listerer after it is completed and set new dialog */
  function endInAnimation() {
    // Remove the old listerer
    this.removeEventListener(
      'webkitAnimationEnd',
      endInAnimation
    );
    // Set walking to idle
    setWalking('is-idle');
    setPaused('is-paused');
    setDialog({
      dialogClass: 'is-shown',
      dialogAnswerClass: 'is-hidden',
      resolution: dialog.resolution,
    });
    setKnightDialog({
      dialogClass: 'is-hidden',
      dialog: knightDialog.dialog,
    });
  }

  /** Remove the -out listerer after it is completed */
  function endOutAnimation() {
    // Remove the old listerer
    this.removeEventListener(
      'webkitAnimationEnd',
      endOutAnimation
    );
  }

  /** End the adventure! */
  function endAventure() {
    setDialog({
      dialogClass: 'is-hidden',
      dialogAnswerClass: 'is-hidden',
      resolution: dialog.resolution,
    });
    setKnightDialog({
      dialogClass: 'is-shown',
      dialog: 'Well I live to see another day!',
    });
    repeatButton.current.style.display = 'block';
  }

  /** Start the adventure! */
  function startAdventure() {
    startButton.current.style.display = 'none';
    repeatButton.current.style.display = 'none';

    // Set state
    setWalking('is-walking');
    setPaused('is-not-paused');

    // Select the current scene
    console.log('--------------------');
    console.log('startAdventure', scene);
    let currentScene = sceneContainer.current.childNodes[scene];

    // Knight shows a small dialog
    showBalloonDialog( getRandomBalloonMessage() );

    // Add the -in animation
    currentScene.classList.add('current-scene-in');

    // Add listerer to see when -in animation is done
    currentScene.addEventListener(
      'webkitAnimationEnd',
      endInAnimation
    );
  }

  /** Progress after user interaction */
  function progressAdventure(answer) {
    setWalking('is-walking');
    setPaused('is-not-paused');
    setDialog({
      dialogClass: 'is-hidden',
      dialogAnswerClass: 'is-shown',
      resolution: answer,
    });

    // Select the current scene
    console.log('progressAdventure', scene);
    let currentScene = sceneContainer.current.childNodes[scene];
    let childNodes = sceneContainer.current.childNodes;

    for (var i = 0; i < childNodes.length; i++) {
      childNodes[i].classList.remove('current-scene-in', 'current-scene-out');
    }

    currentScene.classList.add('current-scene-out');

    // add new listerer for knight to complete
    currentScene.addEventListener(
      'webkitAnimationEnd',
      endOutAnimation
    );
  }

  return (
    <React.Fragment>
      <div className={
        context.open ?
          'knight-scene is-paused' :
          'knight-scene '}>

            {/* Start adventure button */}
            <KnightButton
              ref={startButton}
              className={`knight-start-dialog-button ${!dialog.dialogClass}`}
              onClick={() => proceedToNext(1)}>
              <span>Begin</span>
            </KnightButton>

            <KnightButton
              ref={repeatButton}
              className={`knight-start-dialog-button is-hidden`}
              onClick={() => proceedToNext(1) }>
              <span>Again!</span>
            </KnightButton>

            {/* Dialog */}
            <div className={`knight-dialog ${dialog.dialogClass}`}>
              <div
                className="knight-dialog-result"
                dangerouslySetInnerHTML={{ __html: adventure.sceneDialog[scene].question }}></div>
              <div className="knight-dialog-buttons">
                <KnightButton type="button" onClick={() => progressAdventure(0)}>
                  <span dangerouslySetInnerHTML={{ __html: adventure.sceneDialog[scene].answers[0] }}></span>
                </KnightButton>
                <KnightButton type="button" onClick={() => progressAdventure(1)}>
                  <span dangerouslySetInnerHTML={{ __html: adventure.sceneDialog[scene].answers[1] }}></span>
                </KnightButton>
              </div>
            </div>

            <div className={`knight-dialog-answer ${dialog.dialogAnswerClass}`}>
              <div dangerouslySetInnerHTML={{
                __html: adventure.sceneDialog[scene].resolutions[dialog.resolution]
              }}></div>
              <KnightButton type="button" onClick={() => {
                if (scene < (context.scenes - 1)) {
                  proceedToNext(scene + 1);
                } else {
                  endAventure();
                }
              }}>
                <span>Proceed</span>
              </KnightButton>
            </div>

            {/* Knight balloons */}
            <div className={`knight-dialog-balloon ${knightDialog.dialogClass}`}>
              <span dangerouslySetInnerHTML={{ __html: knightDialog.dialog }}></span>
            </div>

            {/* SVG */}
            <div className={`scene-group scene-${scene}`} ref={sceneGroup}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 242 242">
                <title>Brave Sir Knight ~ Mini adventure</title>

                {/* Moving elements */}
                <g className="cloud-group">
                  {adventure.clouds.map((i) =>
                    <g key={i} className="cloud-group-item">
                      <path id="cloud-color" className="cloud-color" d="M67,32.25c0-.08,0-.17,0-.25a15,15,0,0,0-26.56-9.55A11,11,0,0,0,24,32v0a12.49,12.49,0,0,0,.5,25h40A12.5,12.5,0,0,0,67,32.25Z" transform="translate(-11.25 -16.25)"/>
                      <path id="cloud-end" d="M64.5,57.75h-40a13.24,13.24,0,0,1-1.23-26.43,11.74,11.74,0,0,1,17-9.82A15.75,15.75,0,0,1,67.75,31.65a13.25,13.25,0,0,1-3.25,26.1ZM35,21.75A10.26,10.26,0,0,0,24.75,32v.72l-.72.05a11.74,11.74,0,0,0,.47,23.48h40A11.75,11.75,0,0,0,66.84,33l-.62-.12,0-.78A14.25,14.25,0,0,0,41,22.92l-.4.49-.55-.31A10.25,10.25,0,0,0,35,21.75Z" transform="translate(-11.25 -16.25)"/>
                      <g id="cloud-accent">
                        <rect id="i" x="20.55" y="52.75" width="9.9" height="1.5" transform="translate(-41.61 17.45) rotate(-45)"/>
                        <rect id="h" x="25.55" y="52.75" width="9.9" height="1.5" transform="translate(-40.15 20.99) rotate(-45)"/>
                        <rect id="g" x="30.55" y="52.75" width="9.9" height="1.5" transform="translate(-38.68 24.52) rotate(-45)"/>
                        <rect id="f" x="35.55" y="52.75" width="9.9" height="1.5" transform="translate(-37.22 28.06) rotate(-45)"/>
                        <rect id="e" x="40.55" y="52.75" width="9.9" height="1.5" transform="translate(-35.75 31.59) rotate(-45)"/>
                        <rect id="d" x="45.55" y="52.75" width="9.9" height="1.5" transform="translate(-34.29 35.13) rotate(-45)"/>
                        <rect id="c" x="50.55" y="52.75" width="9.9" height="1.5" transform="translate(-32.82 38.66) rotate(-45)"/>
                        <rect id="b" x="55.55" y="52.75" width="9.9" height="1.5" transform="translate(-31.36 42.2) rotate(-45)"/>
                        <rect id="a" x="60.55" y="52.75" width="9.9" height="1.5" transform="translate(-29.9 45.74) rotate(-45)"/>
                      </g>
                      <g id="cloud-shadow" className="cloud-shadow">
                        <path id="b-2" data-name="b" d="M68.5,55h-40A12.48,12.48,0,0,1,21,32.53,12.48,12.48,0,0,0,24.5,57h40A12.43,12.43,0,0,0,72,54.5,12.48,12.48,0,0,1,68.5,55Z" transform="translate(-11.25 -16.25)"/>
                        <path id="a-2" data-name="a" d="M28,30a11,11,0,0,1,4.18-8.62,11,11,0,0,0-8.12,9.46A12.46,12.46,0,0,1,28,30Z" transform="translate(-11.25 -16.25)"/>
                      </g>
                    </g>
                  )}
                </g>
                <g className={`tree-group ${(paused)}`}>
                  <g id="tree-group-a">
                    <g id="tree-2">
                      <path className="tree" d="M597.73,54.36c0,7.81,2.46,8.64,5.5,8.64s5.5-.83,5.5-8.64-2.46-19.64-5.5-19.64S597.73,46.55,597.73,54.36Z" transform="translate(-106.5 -19)"/>
                      <line className="tree-trunk" x1="496.73" y1="42" x2="496.73" y2="54"/>
                    </g>
                    <g id="tree-2-2" data-name="tree-2">
                      <path className="tree" d="M580.73,54.36c0,7.81,2.46,8.64,5.5,8.64s5.5-.83,5.5-8.64-2.46-19.64-5.5-19.64S580.73,46.55,580.73,54.36Z" transform="translate(-106.5 -19)"/>
                      <line className="tree-trunk" x1="479.73" y1="42" x2="479.73" y2="54"/>
                    </g>
                    <g id="tree-1">
                      <path className="tree" d="M569.5,47.19c0,10.81,3.41,12,7.61,12s7.61-1.15,7.61-12S581.32,20,577.11,20,569.5,36.38,569.5,47.19Z" transform="translate(-106.5 -19)"/>
                      <line className="tree-trunk" x1="470.61" y1="37.39" x2="470.61" y2="54"/>
                    </g>
                  </g>
                  <g id="tree-group-b">
                    <g id="tree-1-2" data-name="tree-1">
                      <path className="tree" d="M412.73,54.82c0,7.62-2.4,8.43-5.36,8.43S402,62.44,402,54.82s2.4-19.16,5.36-19.16S412.73,47.2,412.73,54.82Z" transform="translate(-106.5 -19)"/>
                      <line className="tree-trunk" x1="300.86" y1="42.3" x2="300.86" y2="54"/>
                    </g>
                    <g id="tree-1-3" data-name="tree-1">
                      <path className="tree" d="M398.73,47.19c0,10.81-3.41,12-7.61,12s-7.61-1.15-7.61-12S386.91,20,391.11,20,398.73,36.38,398.73,47.19Z" transform="translate(-106.5 -19)"/>
                      <line className="tree-trunk" x1="284.61" y1="37.39" x2="284.61" y2="54"/>
                    </g>
                  </g>
                  <g id="tree-group-c">
                    <g id="tree-2-3" data-name="tree-2">
                      <path className="tree" d="M350.73,54.36c0,7.81,2.46,8.64,5.5,8.64s5.5-.83,5.5-8.64-2.46-19.64-5.5-19.64S350.73,46.55,350.73,54.36Z" transform="translate(-106.5 -19)"/>
                      <line className="tree-trunk" x1="249.73" y1="42" x2="249.73" y2="54"/>
                    </g>
                    <g id="tree-2-4" data-name="tree-2">
                      <path className="tree" d="M333.73,54.36c0,7.81,2.46,8.64,5.5,8.64s5.5-.83,5.5-8.64-2.46-19.64-5.5-19.64S333.73,46.55,333.73,54.36Z" transform="translate(-106.5 -19)"/>
                      <line className="tree-trunk" x1="232.73" y1="42" x2="232.73" y2="54"/>
                    </g>
                    <g id="tree-1-4" data-name="tree-1">
                      <path className="tree" d="M322.5,47.19c0,10.81,3.41,12,7.61,12s7.61-1.15,7.61-12S334.32,20,330.11,20,322.5,36.38,322.5,47.19Z" transform="translate(-106.5 -19)"/>
                      <line className="tree-trunk" x1="223.61" y1="37.39" x2="223.61" y2="54"/>
                    </g>
                  </g>
                  <g id="tree-group-d">
                    <g id="tree-2-5" data-name="tree-2">
                      <path className="tree" d="M118.5,54.36C118.5,62.17,116,63,113,63s-5.5-.83-5.5-8.64S110,34.71,113,34.71,118.5,46.55,118.5,54.36Z" transform="translate(-106.5 -19)"/>
                      <line className="tree-trunk" x1="6.5" y1="42" x2="6.5" y2="54"/>
                    </g>
                    <g id="tree-1-5" data-name="tree-1">
                      <path className="tree" d="M142.73,47.19c0,10.81-3.41,12-7.61,12s-7.61-1.15-7.61-12S130.91,20,135.11,20,142.73,36.38,142.73,47.19Z" transform="translate(-106.5 -19)"/>
                      <line className="tree-trunk" x1="28.61" y1="37.39" x2="28.61" y2="54"/>
                    </g>
                  </g>
                </g>

                {/* Scenes */}
                <g className="scene-group" ref={sceneContainer}>
                  <g id="scene">{/* <!-- empty container --> */}</g>
                  <g id="scene-0">
                    <rect id="bg" className="fake-bg" width="650" height="150"/>
                    <g id="castle">
                      <g id="castle-top">
                        <polygon id="castle-top-background" className="castle-color" points="541.33 67.01 541.33 62.15 536.24 62.15 536.24 67.01 532.53 67.01 532.53 62.15 527.44 62.15 527.44 67.01 522.81 67.01 522.81 62.15 517.72 62.15 517.72 67.01 514.02 67.01 514.02 62.15 508.93 62.15 508.93 67.01 504.76 67.01 504.76 62.15 499.67 62.15 499.67 67.01 497.13 67.01 497.13 75.8 543.88 75.8 543.88 67.01 541.33 67.01"/>
                        <path id="shp" d="M544.38,76.3H495.63V65.51h2.55V60.65h7.09v4.86h2.17V60.65h7.09v4.86h1.7V60.65h7.09v4.86h2.63V60.65H533v4.86h1.7V60.65h7.09v4.86h2.55Zm-46.75-2h44.75V67.51h-2.55V62.65h-3.09v4.86H531V62.65h-3.09v4.86h-6.63V62.65h-3.09v4.86h-5.7V62.65h-3.09v4.86h-6.17V62.65h-3.09v4.86h-2.55Z" transform="translate(0.5 0.5)"/>
                      </g>
                      <g id="castle-shape">
                        <rect id="castle-color" className="castle-color" x="502.4" y="75.8" width="36.19" height="74.2"/>
                        <path id="shp-2" data-name="shp" d="M539.1,150.5H500.9V74.3H539.1Zm-36.19-2H537.1V76.3H502.9Z" transform="translate(0.5 0.5)"/>
                      </g>
                      <g id="window">
                        <g id="w">
                          <path id="window-bg" className="window-light-color" d="M516.53,87.62a3.47,3.47,0,0,1,6.94,0V93.4h-6.94Z" transform="translate(0.5 0.5)"/>
                          <path id="shp-3" data-name="shp" d="M524.22,94.15h-8.44V87.62a4.22,4.22,0,0,1,8.44,0Zm-6.94-1.5h5.44v-5a2.72,2.72,0,0,0-5.44,0Z" transform="translate(0.5 0.5)"/>
                        </g>
                        <rect id="shp-4" data-name="shp" x="519.71" y="84.71" width="1.5" height="9.19"/>
                      </g>
                      <g id="window-2" data-name="window">
                        <g id="w-2" data-name="w">
                          <path id="window-bg-2" data-name="window-bg" className="window-light-color" d="M516.53,105.72a3.47,3.47,0,0,1,6.94,0v5.78h-6.94Z" transform="translate(0.5 0.5)"/>
                          <path id="shp-5" data-name="shp" d="M524.22,112.25h-8.44v-6.53a4.22,4.22,0,0,1,8.44,0Zm-6.94-1.5h5.44v-5a2.72,2.72,0,0,0-5.44,0Z" transform="translate(0.5 0.5)"/>
                        </g>
                        <rect id="shp-6" data-name="shp" x="519.71" y="102.81" width="1.5" height="9.19"/>
                      </g>
                      <g id="bricks">
                        <rect id="shp-7" data-name="shp" x="504.5" y="83.75" width="11" height="0.5"/>
                        <rect id="shp-8" data-name="shp" x="504.5" y="81.75" width="11" height="0.5"/>
                        <rect id="shp-9" data-name="shp" x="506.75" y="82" width="0.5" height="2"/>
                        <rect id="shp-10" data-name="shp" x="509.75" y="82" width="0.5" height="2"/>
                        <rect id="shp-11" data-name="shp" x="512.75" y="82" width="0.5" height="2"/>
                      </g>
                      <g id="bricks-2" data-name="bricks">
                        <rect id="shp-12" data-name="shp" x="523.5" y="99.75" width="11" height="0.5"/>
                        <rect id="shp-13" data-name="shp" x="523.5" y="97.75" width="11" height="0.5"/>
                        <rect id="shp-14" data-name="shp" x="525.75" y="98" width="0.5" height="2"/>
                        <rect id="shp-15" data-name="shp" x="528.75" y="98" width="0.5" height="2"/>
                        <rect id="shp-16" data-name="shp" x="531.75" y="98" width="0.5" height="2"/>
                      </g>
                      <g id="bricks-3" data-name="bricks">
                        <rect id="shp-17" data-name="shp" x="507.5" y="119.75" width="11" height="0.5"/>
                        <rect id="shp-18" data-name="shp" x="507.5" y="117.75" width="11" height="0.5"/>
                        <rect id="shp-19" data-name="shp" x="509.75" y="118" width="0.5" height="2"/>
                        <rect id="shp-20" data-name="shp" x="512.75" y="118" width="0.5" height="2"/>
                        <rect id="shp-21" data-name="shp" x="515.75" y="118" width="0.5" height="2"/>
                      </g>
                      <g id="bricks-4" data-name="bricks">
                        <rect id="shp-22" data-name="shp" x="509.5" y="121.75" width="11" height="0.5"/>
                        <rect id="shp-23" data-name="shp" x="509.5" y="119.75" width="11" height="0.5"/>
                        <rect id="shp-24" data-name="shp" x="511.75" y="120" width="0.5" height="2"/>
                        <rect id="shp-25" data-name="shp" x="514.75" y="120" width="0.5" height="2"/>
                        <rect id="shp-26" data-name="shp" x="517.75" y="120" width="0.5" height="2"/>
                      </g>
                      <rect id="shadow" className="castle-top-shadow" x="502.5" y="76.5" width="36" height="4"/>
                      <rect id="flag-pole-2" x="501.5" y="44.5" width="2" height="18"/>
                      <rect id="flag-pole-1" x="537.5" y="44.5" width="2" height="18"/>
                      <g id="flag-2">
                        <polygon id="flag-b" className="flag-color" points="502.5 45.5 502.5 37.5 514.5 41.5 502.5 45.5"/>
                        <path d="M501,46.39V35.61L517.16,41Zm2-8v5.23L510.84,41Z" transform="translate(0.5 0.5)"/>
                      </g>
                      <g id="flag-1">
                        <polygon id="flag-a" className="flag-color" points="538.5 45.5 538.5 37.5 550.5 41.5 538.5 45.5"/>
                        <path d="M537,46.39V35.61L553.16,41Zm2-8v5.23L546.84,41Z" transform="translate(0.5 0.5)"/>
                      </g>
                    </g>
                  </g>
                  <g id="scene-1">
                    <rect id="bg" className="fake-bg" width="650" height="150"/>
                    <g id="dragon" className="dragon">
                      <path id="wing-back" className="dragon-wing-back dragon-color-shadow" d="M516.63,98.36s17.69,2.47,20.17-11.54l21.87-4.53a21.4,21.4,0,0,0-7.31,17.91s-8.72,3.77-10.65,10c0,0-6.52-8.43-10.68-2.57,0,0-8.06-7.95-13.36-7.37Z" transform="translate(0.5)"/>
                      <path id="wing-front" className="dragon-wing-front dragon-color" d="M520.37,97s17.83,15.07,34.51-.4l32.25,15.32a34.22,34.22,0,0,0-26.6,15.78s-14.75-3.61-23.2,2.43c0,0-.18-17-11.13-13.58,0,0-.26-12.76-7.57-17.14Z" transform="translate(0.5)"/>
                      <path id="f" className="dragon-color-shadow" d="M486.16,150H466.78l-4.28-10.69,5.35,5.35,7.49-1.07s-2.14-8.55,7.49-9.62" transform="translate(0.5)"/>
                      <path id="e" className="dragon-color" d="M503.13,80.49s8.55,10.69,0,17.11S467.85,127.54,486,150h36.36s12.83-54.54-13.9-71.64Z" transform="translate(0.5)"/>
                      <path id="d" className="dragon-color" d="M519.88,150H594a105.1,105.1,0,0,0-40.53-7.95c-23.46,0-31.87-4-31.87-4" transform="translate(0.5)"/>
                      <path id="belly" className="dragon-belly" d="M504,97.4s6.36-3.19,4.77,6.38-14.35,15.94-1.59,30.86l.2,15.37H484.82S464.09,126.09,504,97.4Z" transform="translate(0.5)"/>
                      <path id="c" className="dragon-color" d="M511.82,150H492.44l-4.28-10.69,5.35,5.35,7.49-1.07s-2.14-8.55,7.49-9.62" transform="translate(0.5)"/>
                      <path id="b" className="dragon-color" d="M516,104a15,15,0,0,0-2.14,12.83l-4.28,3.21,9.62-2.14s-3.21-4.28,0-8.55" transform="translate(0.5)"/>
                      <polygon id="a" className="dragon-head-shadow" points="505.43 83.31 506.94 86.98 513.95 82.38 509.3 78.56 504.44 81.46 505.43 83.31"/>
                      <g id="dragon-head" className="dragon-head">
                        <path className="dragon-color-shadow" d="M496.72,68.7s-8.9,0-10,4.31c0,0,5.35-3.21,9.62-1.07" transform="translate(0.5)"/>
                        <path className="dragon-color" d="M497.65,67.71a12.21,12.21,0,0,0-4,10.28c.79,6.32-5.53,7.11-5.53,7.11l.79,4s22.92-4.74,19.76-14.23S501.6,64.54,497.65,67.71Z" transform="translate(0.5)"/>
                        <path className="dragon-color" d="M499.93,78.36s4.28,0,5.35-2.14" transform="translate(0.5)"/>
                        <path className="dragon-color" d="M493.51,78.36a4.68,4.68,0,0,0,3.21,1.07" transform="translate(0.5)"/>
                        <path className="dragon-color" d="M504.93,68.7s8.9,0,10,4.31c0,0-5.35-3.21-9.62-1.07" transform="translate(0.5)"/>
                      </g>
                    </g>
                  </g>
                  <g id="scene-2">
                    <rect id="bg" className="fake-bg" width="650" height="150"/>
                    <g id="village">
                      <g id="house-b">
                        <rect className="village-thingie-1" x="440.26" y="75.8" width="28.1" height="74.2"/>
                        <polygon className="village-thingie-2" points="436 76 454.31 42 472.62 76 436 76"/>
                        <rect className="village-shad-1" x="440.34" y="77" width="27.95" height="4"/>
                        <rect className="village-thingie-1" x="468.08" y="128" width="36" height="22"/>
                        <polygon className="village-thingie-2" points="468.08 117 505.58 117 509.58 128 468.08 128 468.08 117"/>
                        <rect className="village-thingie-3" x="475.5" y="133" width="7" height="11"/>
                        <rect className="village-thingie-3" x="488.5" y="133" width="7" height="11"/>
                        <path className="village-thingie-3" d="M450.34,64.62a3.47,3.47,0,0,1,6.94,0V70.4h-6.94Z" transform="translate(0.5)"/>
                        <line className="village-thingie-4" x1="459.5" y1="90" x2="446.5" y2="103"/>
                        <line className="village-thingie-4" x1="462.5" y1="91" x2="454.5" y2="99"/>
                        <line className="village-thingie-4" x1="455.5" y1="121" x2="446.5" y2="130"/>
                        <line className="village-thingie-4" x1="452.5" y1="128" x2="445.5" y2="135"/>
                      </g>
                      <g id="house-1">
                        <rect className="village-thingie-5" x="526.08" y="128" width="41" height="22"/>
                        <polygon className="village-thingie-6" points="524.58 117 568.58 117 572.58 128 520.58 128 524.58 117"/>
                        <g>
                          <line className="village-thingie-4" x1="529.58" y1="128" x2="533.58" y2="117"/>
                          <line className="village-thingie-4" x1="539.58" y1="128" x2="543.58" y2="117"/>
                          <line className="village-thingie-4" x1="549.58" y1="128" x2="553.58" y2="117"/>
                          <line className="village-thingie-4" x1="559.58" y1="128" x2="563.58" y2="117"/>
                        </g>
                        <rect className="village-thingie-3" x="543.08" y="133" width="7" height="11"/>
                        <rect className="village-thingie-4" x="528.08" y="114" width="37" height="3"/>
                        <g>
                          <line className="village-thingie-4" x1="530.08" y1="128" x2="527.08" y2="131"/>
                          <line className="village-thingie-4" x1="534.08" y1="128" x2="531.08" y2="131"/>
                          <line className="village-thingie-4" x1="538.08" y1="128" x2="535.08" y2="131"/>
                          <line className="village-thingie-4" x1="542.08" y1="128" x2="539.08" y2="131"/>
                          <line className="village-thingie-4" x1="546.08" y1="128" x2="543.08" y2="131"/>
                          <line className="village-thingie-4" x1="550.08" y1="128" x2="547.08" y2="131"/>
                          <line className="village-thingie-4" x1="554.08" y1="128" x2="551.08" y2="131"/>
                          <line className="village-thingie-4" x1="558.08" y1="128" x2="555.08" y2="131"/>
                          <line className="village-thingie-4" x1="562.08" y1="128" x2="559.08" y2="131"/>
                          <line className="village-thingie-4" x1="566.08" y1="128" x2="563.08" y2="131"/>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g id="scene-3">
                    <rect id="bg" className="fake-bg" width="650" height="150"/>
                    <g className="goblin-group">
                      <g id="big-goblin">
                        <g>
                          <line id="leg-2" className="goblin-leg" x1="508.27" y1="146.12" x2="508.27" y2="150"/>
                          <line id="leg-1" className="goblin-leg" x1="510.86" y1="146.12" x2="510.86" y2="150"/>
                          </g>
                          <g id="b">
                          <rect className="goblin-armour" x="499.32" y="126.52" width="20.49" height="17.9" rx="3.75" ry="3.75"/>
                          <path d="M515.56,127.28a3,3,0,0,1,3,3v10.4a3,3,0,0,1-3,3h-13a3,3,0,0,1-3-3v-10.4a3,3,0,0,1,3-3h13m0-1.5h-13a4.51,4.51,0,0,0-4.5,4.5v10.4a4.51,4.51,0,0,0,4.5,4.5h13a4.51,4.51,0,0,0,4.5-4.5v-10.4a4.51,4.51,0,0,0-4.5-4.5Z" transform="translate(0.5)"/>
                          </g>
                          <g id="b-2" data-name="b">
                          <rect className="goblin-flesh" x="504.49" y="119.06" width="10.14" height="11.44" rx="3.75" ry="3.75"/>
                          <path d="M510.38,119.81a3,3,0,0,1,3,3v3.94a3,3,0,0,1-3,3h-2.64a3,3,0,0,1-3-3v-3.94a3,3,0,0,1,3-3h2.64m0-1.5h-2.64a4.51,4.51,0,0,0-4.5,4.5v3.94a4.51,4.51,0,0,0,4.5,4.5h2.64a4.51,4.51,0,0,0,4.5-4.5v-3.94a4.51,4.51,0,0,0-4.5-4.5Z" transform="translate(0.5)"/>
                          </g>
                          <g className="hand-2">
                              <rect className="goblin-flesh" x="503.25" y="135.25" width="5.5" height="5.5" rx="2.25" ry="2.25"/>
                              <path d="M506,136a1.5,1.5,0,0,1,1.5,1.5v1A1.5,1.5,0,0,1,506,140h-1a1.5,1.5,0,0,1-1.5-1.5v-1A1.5,1.5,0,0,1,505,136h1m0-1.5h-1a3,3,0,0,0-3,3v1a3,3,0,0,0,3,3h1a3,3,0,0,0,3-3v-1a3,3,0,0,0-3-3Z" transform="translate(0.5)"/>
                          </g>
                          <g className="hand-1">
                            <path id="hand-2" className="goblin-flesh" d="M511.1,132.8v7.8s3.9,0,3.9-2.6S511.1,136.7,511.1,132.8Z" transform="translate(0.5)"/>
                          </g>
                      </g>
                      <g id="small-goblin">
                          <g id="b-3" data-name="b">
                          <rect className="goblin-armour" x="481.68" y="131.7" width="10.14" height="12.73" rx="3.75" ry="3.75"/>
                          <path d="M487.57,132.45a3,3,0,0,1,3,3v5.23a3,3,0,0,1-3,3h-2.64a3,3,0,0,1-3-3v-5.23a3,3,0,0,1,3-3h2.64m0-1.5h-2.64a4.51,4.51,0,0,0-4.5,4.5v5.23a4.51,4.51,0,0,0,4.5,4.5h2.64a4.51,4.51,0,0,0,4.5-4.5v-5.23a4.51,4.51,0,0,0-4.5-4.5Z" transform="translate(0.5)"/>
                          </g>
                          <line id="leg-2-2" data-name="leg-2" className="goblin-leg" x1="485.13" y1="146.12" x2="485.13" y2="150"/>
                          <line id="leg-1-2" data-name="leg-1" className="goblin-leg" x1="487.72" y1="146.12" x2="487.72" y2="150"/>
                          <g id="b-4" data-name="b">
                          <rect className="goblin-flesh" x="483.57" y="127.94" width="6.8" height="7.72" rx="2.46" ry="2.46"/>
                          <path d="M487.41,128.69a1.71,1.71,0,0,1,1.71,1.71v2.81a1.71,1.71,0,0,1-1.71,1.71h-1.88a1.71,1.71,0,0,1-1.71-1.71V130.4a1.71,1.71,0,0,1,1.71-1.71h1.88m0-1.5h-1.88a3.22,3.22,0,0,0-3.21,3.21v2.81a3.22,3.22,0,0,0,3.21,3.21h1.88a3.22,3.22,0,0,0,3.21-3.21V130.4a3.22,3.22,0,0,0-3.21-3.21Z" transform="translate(0.5)"/>
                          </g>
                          <g id="b-5" data-name="b">
                          <path className="goblin-armour" d="M482.15,130.13v-2.21a4.59,4.59,0,1,1,9.17,0v2.21Z" transform="translate(0.5)"/>
                          <path d="M486.73,124.08a3.84,3.84,0,0,1,3.84,3.84v1.46H482.9v-1.46a3.84,3.84,0,0,1,3.84-3.84m0-1.5h0a5.35,5.35,0,0,0-5.34,5.34v3h10.67v-3a5.35,5.35,0,0,0-5.34-5.34Z" transform="translate(0.5)"/>
                          </g>
                          <line className="goblin-speer" x1="475.5" y1="113.5" x2="479.5" y2="149.5"/>
                          <g>
                          <circle className="goblin-shield" cx="492.5" cy="140.5" r="3.25"/>
                          <path d="M492,138a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,492,138m0-1.5a4,4,0,1,0,4,4,4,4,0,0,0-4-4Z" transform="translate(0.5)"/>
                          </g>
                          <g>
                          <circle className="goblin-flesh" cx="478" cy="136" r="1.75"/>
                          <path d="M477.5,135a1,1,0,1,1-1,1,1,1,0,0,1,1-1m0-1.5A2.5,2.5,0,1,0,480,136a2.5,2.5,0,0,0-2.5-2.5Z" transform="translate(0.5)"/>
                          </g>
                      </g>
                    </g>
                  </g>
                </g>

                <g className={`knight-group ${walking}`}>
                  <g id="knight">
                    <g id="body" className="body-group">
                      <g id="harnass">
                        <path className="armour-fill" d="M216.25,223.25a3.75,3.75,0,0,1-3.75-3.75v-3c0-1.53.8-1.75,3.75-1.75S220,215,220,216.5v3A3.75,3.75,0,0,1,216.25,223.25Z" transform="translate(-94 -93)"/>
                        <path d="M216.25,215.5c3,0,3,.25,3,1v3a3,3,0,0,1-6,0v-3c0-.75,0-1,3-1m0-1.5c-2.47,0-4.5,0-4.5,2.5v3a4.5,4.5,0,0,0,9,0v-3c0-2.48-2-2.5-4.5-2.5Z" transform="translate(-94 -93)"/>
                        <path className="armour-shadow" d="M216.25,214c-2.47,0-4.5,0-4.5,2.5v2c0-2.48,2-2.5,4.5-2.5s4.5,0,4.5,2.5v-2C220.75,214,218.72,214,216.25,214Z" transform="translate(-94 -93)"/>
                      </g>
                    </g>

                    <g id="helm" className="helm-group">
                      <g>
                        <path className="armour-fill" d="M211.5,212.25v-2.46a5,5,0,0,1,10.07,0v2.46Z" transform="translate(-94 -93)"/>
                        <path d="M216.54,205.5a4.29,4.29,0,0,1,4.29,4.29v1.71h-8.57v-1.71a4.29,4.29,0,0,1,4.29-4.29m0-1.5a5.8,5.8,0,0,0-5.79,5.79V213h11.57v-3.21a5.8,5.8,0,0,0-5.79-5.79Z" transform="translate(-94 -93)"/>
                      </g>
                      <line className="helm-visor" x1="123.75" y1="116" x2="123.75" y2="119"/>
                      <g id="feather" className="feather-group">
                        <path className="feather-color knight-house-color" d="M208.48,205.61c-4.79,0-6.36-2.87-6.82-4.15a7.22,7.22,0,0,1,2.26-.38c3.44,0,5.71,2.88,6.65,4.37A14.44,14.44,0,0,1,208.48,205.61Z" transform="translate(-94 -93)"/>
                        <path className="feather-border" d="M203.92,201.83a7,7,0,0,1,5.3,3l-.75,0c-3.55,0-5.11-1.68-5.78-2.9a6,6,0,0,1,1.23-.13m0-1.5a8.26,8.26,0,0,0-3.17.67s1,5.36,7.73,5.36a16.32,16.32,0,0,0,3.27-.36s-2.66-5.67-7.83-5.67Z" transform="translate(-94 -93)"/>
                      </g>
                    </g>

                    <g id="leg-group">
                      <line id="leg-2" className="leg-2 cls-6" x1="121.25" y1="132.5" x2="121.25" y2="135.5"/>
                      <line id="leg-1" className="leg-1 cls-6" x1="123.25" y1="132.5" x2="123.25" y2="135.5"/>
                    </g>

                    <g id="weapon-group">
                      <line id="sword" className="cls-6" x1="129.25" y1="124.5" x2="135.25" y2="113.5"/>
                      <g id="shield">
                      <path className="shield-color knight-house-color" d="M210.48,223.68c-1.27,0-3.36-3.33-3.72-5.11a2.75,2.75,0,0,1,2.16-3.23,2.79,2.79,0,0,1,.54-.05,2.75,2.75,0,0,1,2.69,2.21c.36,1.82-.39,5.94-1.58,6.18Z" transform="translate(-94 -93)"/>
                      <path className="shield-border" d="M209.46,216a2,2,0,0,1,2,1.61c.33,1.64-.36,4.75-1,5.27-.79-.24-2.61-2.85-2.93-4.5a2,2,0,0,1,1.57-2.35,2,2,0,0,1,.39,0m0-1.5a3.5,3.5,0,0,0-3.44,4.18c.36,1.81,2.6,5.72,4.45,5.72l.25,0c1.9-.38,2.54-5.16,2.17-7.06a3.5,3.5,0,0,0-3.43-2.82Z" transform="translate(-94 -93)"/>
                    </g>
                    </g>


                  </g>
                </g>

                {/* Static elements */}
                <g className="ground-group">
                  <line id="ground" className="ground" x1="0" y1="137" x2="240" y2="137"/>
                </g>
              </svg>
            </div>
          </div>
    </React.Fragment>
  )
}

export default MiniGame
