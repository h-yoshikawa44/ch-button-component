import { VFC, ClassAttributes, LabelHTMLAttributes } from 'react';
import { css } from '@emotion/react';
import Label from '@/components/atoms/Label';

type Props = ClassAttributes<HTMLLabelElement> &
  LabelHTMLAttributes<HTMLLabelElement> & {
    label: string;
    component: React.ReactNode;
  };

const ComponentLabel: VFC<Props> = ({ label, component, ...props }) => {
  return (
    <Label {...props}>
      <span css={labelText}>{label}</span>
      {component}
    </Label>
  );
};

const labelText = css`
  display: block;
  padding-bottom: 10px;
`;

export default ComponentLabel;
