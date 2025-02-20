import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { ubuntuMono } from '@/styles/fonts';

type Props = ComponentPropsWithRef<'div'> & {
  title: string;
  component: React.ReactNode;
};

const ComponentBox: FC<Props> = ({ title, component, ...props }) => {
  return (
    <div {...props}>
      <h6 css={subTitle} {...props}>
        {title}
      </h6>
      {component}
    </div>
  );
};

const subTitle = css`
  margin-block: 0 16px;
  font-family: ${ubuntuMono.style.fontFamily};
  font-size: 12px;
  font-weight: normal;
  line-height: 12px;
`;

export default ComponentBox;
