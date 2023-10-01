import { getContrast } from 'polished';

/**
 * 色情報に対して、白か黒かコントラスト比が大きい方の色を返す
 * 引数も返り値も16進数カラーコード値前提
 * @param baseColor - 色情報
 * @param whiteColor - 使用候補の白系の色情報
 * @param blackColor - 使用候補の黒系の色情報
 * @return - 白か黒かコントラスト比が大きい方の色情報
 */
export const selectContrastTextColor = (
  baseColor: string,
  {
    whiteColor = '#ffffff',
    blackColor = '#000000',
  }: Partial<{ whiteColor: string; blackColor: string }> = {},
): string => {
  return getContrast(baseColor, whiteColor) < getContrast(baseColor, blackColor)
    ? blackColor
    : whiteColor;
};
