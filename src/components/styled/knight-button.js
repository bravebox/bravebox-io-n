import styled from "styled-components";

const KnightButton = styled.button`
  cursor: pointer;
  font-family: inherit;
  font-weight: 100;
  font-style: italic;
  text-align: center;
  background: #fff;
  outline: none;
  position: relative;
  display: inline-block;
  padding: 0;

  background: black;

  span {
    border: solid 2px black;
    display: block;
    padding: .250rem 1rem;
    background: #fff;
  }

  &[disabled] {
    opacity: .4;
    pointer-events: none;
  }

  &:hover span {
    transform: translate(0, -1px);
  }
`

export default KnightButton;