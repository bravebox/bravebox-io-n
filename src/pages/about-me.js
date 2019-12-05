import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"

//#region Styled Components
const PageTitle = styled.h1`
  margin: 0;
  font-family: 'Khula', sans-serif;
  font-size: 3rem;
`

const PageArticle = styled.div`
  margin-bottom: 2rem;
`

const PageLeader = styled.p`
  font-family: 'Khula', sans-serif;
  font-size: 1.750rem;
  line-height: 1.20;
  @media only screen  and (min-width : 768px) {
    font-size: 2rem;
  }
  i {
    font-family: 'Lora', sans-serif;
  }
`

const PageText = styled.p`
  font-size: 18px;
  line-height: 1.43;
  /* &:last-of-type {
    margin-bottom: 4rem;
  } */
`

const PageSubTitle = styled.h3`
  color: var(--primary);
`

const PageFocusBox = styled.div`
  margin-bottom: 1rem;
  /* background: #ececec; */
  margin-right: .250rem;
`

const PageFocusBoxItem = styled.div`
`

const PageFocusBoxTitle = styled.div`
  font-weight: 900;
  margin-bottom: .750rem;
`
//#endregion

const AboutMe = () => (
  <Layout>
    <SEO title="About me" />
    <main className="page-grid">

      <div className="page-grid-item is-heading">
        {/* <PageTitle>
          About me
        </PageTitle> */}
      </div>

      <div className="page-grid-item is-text">
        <PageArticle className="u-text-align--l">
          <PageLeader>
            Mick Schouten (39) <br/>
            <i>creative front-end developer.</i>
          </PageLeader>

          {/* <PageText>
            Well howdy folks! And thank you for reading this short bio. I have been making things for the web one way or another quite some time now. Fresh out of school (2000) I made my first commisions in Photoshop and Macromedia Flash (Macromedia... yeah... <span  aria-label="smiley" aria-labelledby="Smiley" role="img">😁</span>), and boy..., if I look back today... well you get the idea. As years progress you learn and get better, and that to me has always been the fun part.
          </PageText>

          <PageText>
            Most of my working carreer has been in and around Rotterdam, the Netherlands. A wonderfull city with a lot of professionals I had the privilage to work with or learn from at various startups, branding agencies or other digital companies. In 2010 I decided to start my own company <strong>Bravebox\io</strong> with a focus on creating UX/UI concepts for larger applications and creating the functional styled components and styleguides that are used as building blocks and guides for those applications.
          </PageText> */}

          <PageText>
              Coming soon.
          </PageText>

          <div>
            <PageSubTitle>My focus</PageSubTitle>
            <div className="page-focus-container">
              <PageFocusBox>
                <PageFocusBoxTitle>Design</PageFocusBoxTitle>
                <PageFocusBoxItem>Conceptual UX - UI designs</PageFocusBoxItem>
                <PageFocusBoxItem>Functional Styled Components</PageFocusBoxItem>
                <PageFocusBoxItem>Styleguides</PageFocusBoxItem>
              </PageFocusBox>
              <PageFocusBox>
                <PageFocusBoxTitle>Front-end development</PageFocusBoxTitle>
                <PageFocusBoxItem>HTML/CSS (Postcss/SCSS) and JS</PageFocusBoxItem>
                <PageFocusBoxItem>W3C web components with Polymer</PageFocusBoxItem>
                <PageFocusBoxItem>Vue</PageFocusBoxItem>
                <PageFocusBoxItem>React (Gatsby)</PageFocusBoxItem>
              </PageFocusBox>
            </div>
          </div>

          {/* <PageText>
            I use Visual Studio Code daily with iTerm as my integrated terminal. I also use Affinity Designer or Sketch as design tools (But also proviciant in all Adobe Creative Cloud products). Though not a full blown illustrator or motion grapher, I occacionally integrate these techniques in website.
          </PageText> */}

          <div>
            <PageSubTitle>Bravebox</PageSubTitle>
            <div className="page-focus-container2">
              <PageFocusBox>
                <PageFocusBoxTitle>Currently</PageFocusBoxTitle>
                <PageFocusBoxItem>2017 ~ Cobase (<a href="http://www.cobase.com" target="_blank" rel="noopener noreferrer">www</a>)</PageFocusBoxItem>
              </PageFocusBox>
              <PageFocusBox>
                <PageFocusBoxTitle>Past</PageFocusBoxTitle>
                <PageFocusBoxItem>2015 ~ ING WB (<a href="https://www.ingwb.com" target="_blank" rel="noopener noreferrer">www</a>)</PageFocusBoxItem>
                <PageFocusBoxItem>2015 ~ wijZE (<a href="https://www.wijze.nl" target="_blank" rel="noopener noreferrer">www</a>)</PageFocusBoxItem>
              </PageFocusBox>
              {/* <PageFocusBox>
                <PageFocusBoxTitle>Bravebox commisions</PageFocusBoxTitle>
                <PageFocusBoxItem>2018 ~ RAVB Studentenwerk (Custom login with Wordpress plugin / Vue) (<a href="https://studentenwerk.ravb.nl" target="_blank" rel="noopener noreferrer">www</a>)</PageFocusBoxItem>
                <PageFocusBoxItem>2017 ~ Spiked Cycles (UI Design & front-end) (<a href="https://www.spikedcycles.com/" target="_blank" rel="noopener noreferrer">www</a>)</PageFocusBoxItem>
                <PageFocusBoxItem>2017 ~ Thomas Cremers (UI Design & front-end) (<a href="https://www.thomascremers.com/" target="_blank" rel="noopener noreferrer">www</a>)</PageFocusBoxItem>
                <PageFocusBoxItem>2016 ~ Stringcaster (UI Design & front-end) (<a href="http://www.stringcaster.com/" target="_blank" rel="noopener noreferrer">www</a>)</PageFocusBoxItem>
                <PageFocusBoxItem>2016 ~ Tjerk Noordraven (UI Design & front-end) (<a href="http://www.engsteserieooit.nl/" target="_blank" rel="noopener noreferrer">www</a>)</PageFocusBoxItem>
                <PageFocusBoxItem>2015 ~ Dubai Mall (front-end) (<a href="https://thedubaimall.com/" target="_blank" rel="noopener noreferrer">www</a>)</PageFocusBoxItem>
                <PageFocusBoxItem>2015 ~ Shopping Minds (front-end) (<a href="http://shoppingminds.nl/" target="_blank" rel="noopener noreferrer">www</a>)</PageFocusBoxItem>
              </PageFocusBox> */}
            </div>
          </div>

        </PageArticle>
      </div>

    </main>
  </Layout>
)

export default AboutMe
