import { createGlobalStyle } from 'styled-components';

export const AppResetStyle = createGlobalStyle`
  html {
    font-size: 10px;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    word-break: keep-all;
    word-wrap: break-word;
    scroll-behavior: smooth;
    height: 100%;
    &.hidden {
      overflow: hidden;
    }
  }
  
  [data-font=pretendard] {
    font-family: 'Pretendard Variable', sans-serif;
  }
  
  svg {
    flex: none;
  }
  
  body {
    padding: 0;
    margin: 0;
    overflow-x: visible;
    font-size: 15px;
    width: 100%;
    height: 100%;
    line-height: 1.4;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-text-size-adjust: none;
    -webkit-font-smoothing: antialiased;
    user-select: none;
    word-break: keep-all;
    &.has-open-modal {
      overflow: hidden;
      height: 100%;
    }
  }
  * {
    box-sizing: border-box;
  }
  span, object, div, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, address, big, cite, code, del, dfn, em, font, img, ins, q,
  s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, textarea, input, figure, figcaption, video, mark {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }
  caption {
    line-height: 0;
    font-size: 0;
    text-indent: -1600px;
    color: transparent;
    vertical-align: top;
  }
  img {
    border: 0;
    vertical-align: top;
  }
  iframe {
    display: block;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: inherit;
    font-size: inherit;
    font-weight: normal;
    color: inherit;
  }
  address, caption, cite, code, dfn, th, var {
    font-style: inherit;
    font-weight: inherit;
    margin: 0;
    padding: 0;
  }
  em {
    font-style: normal;
    padding: 0;
    margin: 0;
  }
  strong {
    font-weight: 700;
    margin: 0;
    padding: 0;
  }
  ol, ul, li {
    list-style: none;
    text-decoration: none;
  }
  blockquote, q {
    quotes: none;
  }
  main, nav, aside, article, header, section, footer, figure {
    display: block;
  }
  table {
    width: 100%;
    table-layout: fixed;
  }
  a {
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    color: inherit;
  }
  a:hover {
    text-decoration: none;
    color: inherit;
  }
  optgroup {
    font-family: inherit;
    color: inherit;
  }
  
  fieldset {
    border: none;
    display: block;
  }
  
  label {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  
  select {
    font-family: inherit;
    font-size: inherit;
    font-weight: normal;
    color: inherit;
  }
  
  textarea {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    border-width: 1px;
    font-family: inherit;
    font-size: inherit;
    font-weight: normal;
    color: inherit;
    resize: none;
  }
  
  input, textarea {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    border-width: 0;
    font-family: inherit;
    font-size: inherit;
    font-weight: normal;
    color: inherit;
  }
  
  input[type=text],
  input[type=password],
  input[type=search],
  input[type=email] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  input[type=search]::-webkit-search-cancel-button {
    -webkit-appearance: textfield;
  }
  input[type=text]::-ms-clear ,
  input[type=search]::-ms-clear {
    display: none;
  }
  input::placeholder {
    color: #bebebe;
    font-style: normal;
  }
  input:focus {
    outline: none;
  }
  [hidden] {
  	display: none !important;
  }
  
  button {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border: none;
    cursor: pointer;
    background-color: transparent;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }
  svg {
    vertical-align: middle;
  }
`;
