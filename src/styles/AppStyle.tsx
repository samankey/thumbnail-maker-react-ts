import { createGlobalStyle } from 'styled-components';
import { AppResetStyle } from '@/styles/Reset.style.ts';
import { AppCommonStyle } from '@/styles/Common.style.ts';

const AppGlobalStyle = createGlobalStyle`
  :root {

  }
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
