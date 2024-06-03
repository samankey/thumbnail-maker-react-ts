import { styleHelper } from '@/ui/src/helpers/style.helper.ts';

const PrimaryColor = {
  // BLUE
  BLUE50: '#F1F6FE',
  BLUE100: '#E7F0FD',
  BLUE200: '#D8E6FA',
  BLUE300: '#89B6F5',
  BLUE400: '#5093F1',
  BLUE500: '#2D7EF2',
  BLUE600: '#216EE3',
  BLUE700: '#0D4CA5',
  BLUE800: '#0A3676',
  BLUE900: '#082E63',

  // VIOLET
  VIOLET50: '#F4F2FD',
  VIOLET100: '#DED8F9',
  VIOLET200: '#C8BDF4',
  VIOLET300: '#B2A3F0',
  VIOLET400: '#9884EB',
  VIOLET500: '#7060E2',
  VIOLET600: '#5E49DF',
  VIOLET700: '#4D2FC6',
  VIOLET800: '#3A2395',
  LIGHT: '#FFFFFF',
  DARK: '#000',

  // GRAY
  GRAY50: '#F9FAFC',
  GRAY100: '#F4F5F9',
  GRAY150: '#EBEDF2',
  GRAY200: '#D9DEE9',
  GRAY300: '#BCC2D2',
  GRAY400: '#9FA9BB',
  GRAY500: '#8D96A7',
  GRAY600: '#6E7584',
  GRAY700: '#515867',
  GRAY800: '#373C49',
  GRAY900: '#1F2329',
};

const SemanticColor = {
  BODY_BG: PrimaryColor.GRAY100,
  TEXT_1: PrimaryColor.GRAY800,
  TEXT_2: PrimaryColor.GRAY700,
  TEXT_3: PrimaryColor.GRAY600,
  TEXT_4: PrimaryColor.GRAY500,
  TEXT_MAIN: PrimaryColor.BLUE500,
};

const AppColor = {
  ...PrimaryColor,
  ...SemanticColor,
};

type AppColorKey = keyof typeof AppColor;

/**
 * @WARN do not use this. is only for AppStyle
 */
export const AppColorProps = Object.keys(AppColor).map((key) => {
  const hex = AppColor[key as AppColorKey];
  const lowerKey = key.toLowerCase().replace(/_/g, '-');
  return {
    key: key as AppColorKey,
    varKey: `--color-${lowerKey}`,
    segments: styleHelper.hexToRgbSegment(hex),
    color: `fc-${lowerKey}`,
    bg: `bg-${lowerKey}`,
    hex,
  };
});
export const AppColorVariable = AppColorProps.reduce(
  (acc, c) => {
    return {
      ...acc,
      [c.key]: {
        var: `var(${c.varKey}, ${c.hex})`,
        color: c.color,
        bg: c.bg,
      },
    };
  },
  {} as Record<keyof typeof AppColor, { var: string; color: string; bg: string }>,
);
