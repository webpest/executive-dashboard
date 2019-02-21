import { createGlobalStyle } from "styled-components";
import { theme } from ".";
const GlobalStyle = createGlobalStyle`
  html, body, p, ol, ul, li, dl, dt, dd, blockquote, figure, fieldset, legend, textarea, pre, iframe, hr, h1, h2, h3, h4, h5, h6 {margin: 0;padding: 0;}h1, h2, h3, h4, h5, h6 {font-size: 100%;font-weight: normal;}ul {list-style: none;}button, input, select, textarea {margin: 0;}html {box-sizing: border-box;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;}html,body{height: 100%;}
  body {
    font-size: 16px;
    line-height: 1.5em;
    font-family: 'Roboto', sans-serif;
    background-color: ${props => props.theme.bgLight};
  }
  *, *:before, *:after {box-sizing: inherit;}img, embed, iframe, object, audio, video {height: auto;max-width: 100%;}iframe {border: 0;}table {border-collapse: collapse;border-spacing: 0;}td, th {padding: 0;text-align: left;}

/* Make clicks pass-through */
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: ${theme.primaryColor};

  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: 2px;
}

/* Fancy blur effect */
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px ${theme.primaryColor}, 0 0 5px ${theme.primaryColor};
  opacity: 1.0;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
}
.rc-table-body {
  overflow-x: auto;
}

/* Remove these to get rid of the spinner */
#nprogress .spinner {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 15px;
  right: 15px;
}

#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;

  border: solid 2px transparent;
  border-top-color: ${theme.primaryColor};
  border-left-color: ${theme.primaryColor};
  border-radius: 50%;

  -webkit-animation: nprogress-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

@-webkit-keyframes nprogress-spinner {
  0%   { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes nprogress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

`;
export default GlobalStyle;
