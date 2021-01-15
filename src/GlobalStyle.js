import {css} from '@emotion/react';
import InterBlack from './assets/fonts/Inter-Black.ttf';
import InterBold from './assets/fonts/Inter-Bold.ttf';
import InterExtraBold from './assets/fonts/Inter-ExtraBold.ttf';
import InterExtraLight from './assets/fonts/Inter-ExtraLight.ttf';
import InterLight from './assets/fonts/Inter-ExtraLight.ttf';
import InterMedkium from './assets/fonts/Inter-Medium.ttf';
import InterRegular from './assets/fonts/Inter-Regular.ttf';
import InterSemiBold from './assets/fonts/Inter-SemiBold.ttf';
import InterThin from './assets/fonts/Inter-Thin.ttf';



const globalStyle = css`
  @font-face {
    font-family: 'Inter', sans-serif;;
    font-weight: 300;
    src: url(${InterBlack}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter', sans-serif;;
    src: url(${InterBold}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter', sans-serif;;
    font-weight: 500;
    src: url(${InterExtraBold}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter', sans-serif;;
    font-weight: 700;
    src: url(${InterExtraLight}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter', sans-serif;;
    src: url(${InterLight}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter', sans-serif;;
    font-weight: 500;
    src: url(${InterMedkium}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter', sans-serif;;
    font-weight: 700;
    src: url(${InterRegular}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter', sans-serif;;
    font-weight: 700;
    src: url(${InterSemiBold}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter', sans-serif;;
    font-weight: 700;
    src: url(${InterThin}) format('truetype');
    font-display: swap;
  }

  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  span,
  em,
  small,
  strong,
  sub,
  sup,
  mark,
  del,
  ins,
  strike,
  abbr,
  dfn,
  blockquote,
  q,
  cite,
  code,
  pre,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  div,
  section,
  article,
  main,
  aside,
  nav,
  header,
  hgroup,
  footer,
  img,
  figure,
  figcaption,
  address,
  time,
  audio,
  video,
  canvas,
  iframe,
  details,
  summary,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td {
    margin: 0;
    padding: 0;
    border: 0;
  }

  /* Typography
 * *********************************** */

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    -webkit-scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;;
    font-size: 1.6rem;
    line-height: 1.4;
    scroll-behavior: smooth;
    -webkit-scroll-behavior: smooth;
  }

  * {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  a,
  a:visited {
    // color: inherit;
  }

  /* Layout
 * *********************************** */

  article,
  aside,
  footer,
  header,
  nav,
  section,
  main {
    display: block;
  }

  * {
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: inherit;
  }

  /* Elements
 * *********************************** */

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ul {
    list-style: none;
  }

  img,
  video {
    max-width: 100%;
  }

  img {
    border-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:after,
  blockquote:before,
  q:after,
  q:before {
    content: '';
    content: none;
  }

  /* Attributes & states
 * *********************************** */

  [hidden] {
    display: none !important;
  }

  [disabled] {
    cursor: not-allowed;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }

  /* Utility classes
 * *********************************** */

  .sr-only {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    left: -9999px;
    top: -9999px;
  }
`;

export default globalStyle;
