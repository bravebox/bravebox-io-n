import styled from 'styled-components'
import IconButton from './icon-button.js'

//#region Styled Components
export const NavDialog = styled.div`
  pointer-events: none;
  width: 90vw;
  height: 90vh;

  position: fixed;
  top: 5vh;
  left: 5vw;
  z-index: -1;
  overflow: auto;

  @media only screen  and (min-width : 768px) {
    width: 80vw;
    height: 80vh;
    top: 10vh;
    left: 10vw;
    overflow: hidden;
  }

  padding: 2rem;
  box-sizing: border-box;

  font-weight: 100;
  color: #fff;
  background-color: var(--primary);

  h1, h4 {
    margin-bottom: .250rem;
  }

  nav {
    display: flex;
    flex-direction: column;
  }

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  button${IconButton} {
    position: absolute;
    top: 0;
    right: 0;
  }

  &.is-grid {
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
  }

  .fp1, .fp2, .fp3, .fp4 {
    grid-column-start: 1;
    grid-column-end: span 4;
  }

  .fp1 {
    @media only screen  and (min-width : 768px) {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 2;
    }
  }

  .fp2 {
    @media only screen  and (min-width : 768px) {
      grid-column-start: 1;
      grid-column-end: 1;
      grid-row-start: 2;
      grid-row-end: 2;
    }
  }

  .fp3 {
    @media only screen  and (min-width : 768px) {
      grid-column-start: 2;
      grid-column-end: 2;
      grid-row-start: 2;
      grid-row-end: 2;
    }
  }

  .fp4 {
    @media only screen  and (min-width : 768px) {
      grid-column-start: 3;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 3;
    }
  }
`

export const NavButtonContainer = styled.div`
  width: 2rem;
  height: 2rem;

  position: fixed;
  top: 1rem;
  left: 1rem;
  bottom: auto;
  z-index: 50;

  box-shadow: rgba(0,0,0,.2) 2px 8px 10px;

  /* @media only screen  and (min-width : 768px) {
    top: auto;
    bottom: 32px;
    left: calc(50% -  24px);
  } */
`

export const NavOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;

  width: 100vw;
  height: 100vh;

  opacity: 0;
  background: rgba(255,255,255,.8);
`

export const NavContainer = styled.div`

  /* Add animation to nav elements */
  div${NavDialog},
  div${NavOverlay} {
    transition: all .2s;
  }

  /* (start) properties to animate */
  div${NavDialog} {
    transform: scale(0.98);
    opacity: 0;
  }

  div${NavDialog} {
    transform: scale(0.98);
    opacity: 0;
  }

  /* Open state */
  &.is-open div${NavDialog} {
    z-index: 100 !important;
    pointer-events: auto !important;
    transform: scale(1);
    opacity: 1;
  }

  &.is-open div${NavOverlay} {
    z-index: 90 !important;
    opacity: 1;
  }

  &.is-open div${NavButtonContainer} {
    display: none;
  }

  /* Other */
  button${IconButton} {
    background-color: var(--primary);
  }
`
//#endregion