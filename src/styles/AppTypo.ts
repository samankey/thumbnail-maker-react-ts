const AppTypoSource = {
  HEAD_XXL: `
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.2rem;
`,
  HEAD_XL: `
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.8rem;
`,
  TITLE_L: `
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.4rem;
`,
  TITLE_M: `
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.2rem;
`,
  TITLE_S: `
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2rem;
`,
  TITLE_XS: `
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.8rem;
`,
  SUB_TITLE_XXL: `
  font-size: 2.4rem;
  font-weight:500;
  line-height:3.2rem;
`,
  SUB_TITLE_XL: `
  font-size:2rem;
  font-weight:500;
  line-height:2.8rem;
`,
  SUB_TITLE_L: `
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.4rem;
`,
  SUB_TITLE_M: `
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.2rem;
`,
  SUB_TITLE_S: `
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
`,
  SUB_TITLE_XS: `
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.8rem;
`,
  BODY_XXL: `
  font-size:2.4rem;
  font-weight: 400;
  line-height:3.2rem;
`,
  BODY_XL: `
  font-size:2rem;
  font-weight: 400;
  line-height:2.8rem;
`,
  BODY_L: `
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.4rem;
`,
  BODY_M: `
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.2rem;
`,
  BODY_S: `
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
`,
  BODY_XS: `
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
`,
  DETAIL: `
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2rem;
`,
};
type AppTypoKey = keyof typeof AppTypoSource;

/**
 * @WARN do not use this. is only for AppUiStyle
 */
export const AppTypoProp = Object.keys(AppTypoSource).map((key) => {
  return {
    key: key as AppTypoKey,
    font: key.toLowerCase().replace(/_/g, '-'),
    css: AppTypoSource[key as AppTypoKey],
  };
});

export const AppTypoTokenVars = AppTypoProp.reduce(
  (acc, c) => {
    return {
      ...acc,
      [c.key]: { font: c.font, css: c.css, rule: `.${c.font} {${c.css}}` },
    };
  },
  {} as Record<AppTypoKey, { font: string; css: string; rule: string }>,
);
