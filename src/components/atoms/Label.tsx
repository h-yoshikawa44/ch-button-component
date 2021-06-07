import { FC, ClassAttributes, LabelHTMLAttributes } from 'react';
import { css } from '@emotion/react';

type Props = ClassAttributes<HTMLLabelElement> &
  LabelHTMLAttributes<HTMLLabelElement>;

const Label: FC<Props> = ({ ...props }) => {
  return <label css={label} {...props} />;
};

const label = css`
  font-size: 12px;
  font-style: normal;
  font-weight: normal;
  line-height: 12px;
`;

export default Label;
