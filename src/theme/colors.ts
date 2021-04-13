import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#a01b2f",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#a01b2f",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f8f6f6",
  backgroundDisabled: "#E9EAEB",
  contrast: "#2a1517",
  invertedContrast: "#FFFFFF",
  input: "#ede0e2",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#821828",
  textDisabled: "#c4bdbe",
  textSubtle: "#c68a93",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #f3d7dc 0%, #fff2f4 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#a01b2f",
  background: "#252742",
  backgroundDisabled: "#43383a",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#fff1f3",
  textDisabled: "#766769",
  textSubtle: "#d58b96",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
