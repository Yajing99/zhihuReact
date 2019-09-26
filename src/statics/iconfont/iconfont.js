import { createGlobalStyle } from 'styled-components';

export const IconfontStyle = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1569429759764'); /* IE9 */
    src: url('./iconfont.eot?t=1569429759764#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1569429759764') format('woff'),
    url('./iconfont.ttf?t=1569429759764') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1569429759764#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
