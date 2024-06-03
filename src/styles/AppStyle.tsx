import { createGlobalStyle } from 'styled-components';
import { AppResetStyle } from '@/styles/Reset.style.ts';
import { AppCommonStyle } from '@/styles/Common.style.ts';
import { AppTypoTokenVars } from '@/styles/AppTypo.ts';
import { AppColorProps } from '@/styles/AppColor.ts';

const colors = AppColorProps.reduce(
  (acc, { hex, varKey, segments, color, bg }) => {
    return {
      var: `${acc.var}${varKey}: rgb(${segments});`,
      colorGroup: `${acc.colorGroup}.${color} {color: var(${varKey}, ${hex})}`,
      bgGroup: `${acc.bgGroup}.${bg}{background-color: var(${varKey}, ${hex})}`,
    };
  },
  { var: '', colorGroup: '', bgGroup: '' },
);
const typo = Object.values(AppTypoTokenVars).reduce((p, { rule }) => {
  return p + rule;
}, '');
const AppGlobalStyle = createGlobalStyle`
  :root {
    ${colors.var};
  }
  ${colors.colorGroup}
  ${colors.bgGroup}
  ${typo}
  body {
    color: rgba(31, 35, 41, 1);
    letter-spacing: -0.03em;
  }
`;

export const AppStyle = () => {
  return (
    <>
      <AppResetStyle />
      <AppCommonStyle />
      <AppGlobalStyle />
    </>
  );
};
