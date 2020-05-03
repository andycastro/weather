import { createGlobalStyle } from "styled-components";
import bgbody from "../assets/bg_body.jpg";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Overpass", sans-serif;
    background-image: url(${bgbody});
    -webkit-font-smoothing: antialiased !important;
    background-repeat: no-repeat;
    background-size: cover;
  }

  h1, h2, h3, h4, h5 {
    color: #f9f9f9;
    font-weight:100;
  }

`;
