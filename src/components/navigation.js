import React, { useContext } from "react"
import { Link } from "gatsby"
import SiteContext from '../context/SiteContext'
import IconButton from './styled/icon-button.js';
import * as styledNavElm from './styled/navigation.js';

const Navigation = props => {
  const context = useContext(SiteContext);

  // Works!
  // useEffect(() => {
  //   console.log('context', context);
  // }, []);

  return (
    <React.Fragment>
      <styledNavElm.NavContainer className={context.open ? 'is-open' : ''}>
          {/* NavButtonContainer */}
          <styledNavElm.NavButtonContainer>
            <IconButton
              onClick={context.toggleOpen.bind(this)}
              className="close-button">☰</IconButton>
          </styledNavElm.NavButtonContainer>

          {/* NavDialog */}
          <styledNavElm.NavDialog className="is-grid">
            {/* Close button */}
            <IconButton
              onClick={context.toggleOpen.bind(this)}
              className="close-button">✕</IconButton>

            {/* Panels */}
            <div className="title-panel fp1">
              <div>
                <strong className="title-accent">me</strong>
                <h1>Mick Schouten</h1>
                <h4>creative front-end developer</h4>
              </div>
            </div>
            <div className="title-panel fp2">
              <nav>
                <strong className="title-accent">navigate</strong>
                <Link onClick={context.toggleOpen.bind(this)} to="/">home</Link>
                <Link onClick={context.toggleOpen.bind(this)} to="/about-me">about me</Link>
                <Link className="u-pointer-events--n u-text-decoration--lt" to="/work">work</Link>
                <Link className="u-pointer-events--n u-text-decoration--lt" to="/blog">blog</Link>
                <Link className="u-pointer-events--n u-text-decoration--lt" to="/contact">contact</Link>
              </nav>
            </div>
            <div className="title-panel fp3">
              <div>
                <strong className="title-accent">find me</strong>
                <a href="https://nl.linkedin.com/in/bravebox" target="_blank" rel="noopener noreferrer">Linkedin</a>
              </div>
            </div>
            <div className="title-panel fp4">
              <div>
                <strong className="title-accent">about me: TL;DR</strong>
                <p>
                  Hi folks. I am a 39 year old creative front-end dev from the Netherlands. I design and style UI/UX components, websites and applications.
                </p>
                <p><a href="https://drive.google.com/open?id=1QeZOIQIBTM8_3F-ZMmHsLz-LsGKG6OED" target="_blank" rel="noopener noreferrer" alt="Mick Schouten C.V.">Download C.V.</a></p>
                <p>This site is partly under construction.</p>
                <p><i><small>This website was made with <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby (React)</a></small></i></p>
              </div>
            </div>
          </styledNavElm.NavDialog>

          {/* NavOverlay */}
          <styledNavElm.NavOverlay></styledNavElm.NavOverlay>
        </styledNavElm.NavContainer>
    </React.Fragment>
  )
}

export default Navigation
