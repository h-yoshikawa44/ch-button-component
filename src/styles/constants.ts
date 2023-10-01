// ブレイクポイント
const xs = 0;
const sm = 600;
const md = 960;
const lg = 1280;
const xl = 1920;

export const breakPoint = {
  xs,
  sm,
  md,
  lg,
  xl,
} as const;

// 色
const black = '#3F3F3F';
const blackLighten = '#4f4f4f';
const gray = '#9E9E9E';
const whiteDarken = '#fafbfd';
const white = '#fff';

const orange = '#f7542e';

const base = '#E0E0E0';
const primary = '#2962FF';
const secondary = '#455A64';
const danger = '#D32F2F';
const action = {
  disabled: '#E0E0E0',
  selected: '#090f31',
} as const;

export const colors = {
  black,
  blackLighten,
  gray,
  whiteDarken,
  white,
  orange,
  base,
  primary,
  secondary,
  danger,
  action,
} as const;

// 色の変化
const buttonDarken = 0.2;
const buttonAlpha = 0.1;

export const colorRatios = {
  buttonDarken,
  buttonAlpha,
} as const;
