import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import MiniGame from "../components/minigame"

const MainTitle = styled.div`
  text-align: center;

  position: absolute;
  bottom: 40px;
  left: calc(50% - 140px);
  width: 280px;
  @media only screen  and (min-width : 768px) {
    left: calc(50% - 240px);
    width: 480px;
  }

  h1, h3 {
    margin-bottom: .500rem;
  }

  h1 {
    font-size: 1.500rem;
    @media only screen  and (min-width : 768px) {
      font-size: 2.500rem;
    }
  }
  h3 {
    font-size: 1.250rem;
    @media only screen  and (min-width : 768px) {
      font-size: 1.500rem;
    }
  }
`

const SvgScene = styled.div`
  position: absolute;

  top: calc(50% - 140px);
  left: calc(50% - 140px);
  width: 280px;
  height: 280px;

  @media only screen  and (min-width : 768px) {
    top: calc(50% - 200px);
    left: calc(50% - 200px);
    width: 400px;
    height: 400px;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`bravebox`, `front-end development`, `design`]} />
    <SvgScene>
      <MiniGame></MiniGame>
    </SvgScene>
    <MainTitle>
      <h1>bravebox/io</h1>
      <h3>creative front-end developer</h3>
    </MainTitle>
  </Layout>
)

export default IndexPage
