import { createGlobalStyle } from 'styled-components';
import { styleHelper } from '@/ui/src/helpers/style.helper';

const createSerialSize = (size: number) => {
  return ['top', 'left', 'right', 'bottom']
    .map((d) => {
      const rem = styleHelper.pxToRem(size);
      const m = `.m${d[0]}-${size}`;
      const p = `.p${d[0]}-${size}`;
      return `${m} {margin-${d} : ${rem};} ${p} {padding-${d} : ${rem};}`;
    })
    .join('');
};

const gap = Array.from({ length: 30 }, (_, i) => {
  return i * 2;
}).concat(7);

const svgSizeSet = Array.from({ length: 60 }, (_, i) => {
  return i + 10;
}).reduce((p, size) => {
  const rem = styleHelper.pxToRem(size);
  return `${p}.size-${size} {width: ${rem};}`;
}, '');
export const AppCommonStyle = createGlobalStyle`
  html.has-open-modal {overflow: hidden}
  #root {
    min-height: 100%;
  }
  #styleRoot {
    ${gap.map((m) => {
      return createSerialSize(m);
    })}
    ${svgSizeSet}

    .nowrap {
      white-space: nowrap;
    }
    .wrap {
      white-space: initial;
    }
    .flex-none {
      flex: none;
    }
    .flex-auto {
      flex: auto;
    }
    .flex-inherit {
      flex: inherit;
    }
    .w100 {
      width: 100%;
    }
    .min-w0 {
      min-width: 0;
    }
    
    .text-l {
      text-align: left;
    }
    .text-c {
      text-align: center;
    }
    .text-r {
      text-align: right;
    }
    .va-m {
      vertical-align: middle;
    }
    .va-tb {
      vertical-align: text-bottom;
    }
    .va-tt{
      vertical-align: text-top;
    }

    .justify-start {
      justify-content: flex-start;
    }
    .flex-end{
      justify-content: flex-end;
    }
    .flex-center{
      justify-content: center;
    }
    .reset-gutter {
      margin-left: -12px;
      margin-right: -12px;
    }
    ${Array(6)
      .fill(0)
      .map((_, i) => {
        const n = i + 1;
        return `
        .flex-${n}.flex-${n} {
      flex: ${n} ${n} 0;
    }`;
      })}
    
    .flex-wrap {
      flex-wrap: wrap;
    }

    .bg-transparent {
      background-color: transparent;
    }
    .p-rel {
      position: relative;
    }
    .p-abs {
      position: absolute;
    }
    .p-static {
      position: static;
    }
    .p-sticky {
      position: sticky
    }
    .off-grid {
      position: absolute;
      width: 0;
      height: 0;
      overflow: hidden;
      opacity: 0;
      background-color: transparent;
      color: transparent;
      background-image: none;
    }
    .fw-300 {
      font-weight: 300
    }
    .fw-400 {
      font-weight: 400
    }
    .fw-500 {
      font-weight: 500
    }
    .fw-600 {
      font-weight: 600
    }
    .fw-700 {
      font-weight: 700
    }
    .underline {
      text-decoration: underline;
    }
    .line-through {
      text-decoration: line-through;
    }
    .uppercase {
      text-transform: uppercase;
    }
    .capitalize {
      text-transform: capitalize;
    }
    .lowercase {
      text-transform: lowercase;
    }
  }
`;
