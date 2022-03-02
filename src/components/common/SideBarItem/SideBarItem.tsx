import { VFC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';

type Props = ComponentPropsWithRef<'li'> & {
  text: string;
  selected?: boolean;
};

const SideBarItem: VFC<Props> = ({ text, selected = false }) => {
  return <li css={sideBarItem(selected)}>{text}</li>;
};

const sideBarItem = (selected: boolean) => {
  return css`
    padding-bottom: 32px;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: ${selected ? '#090f31' : '#9e9e9e'};
    list-style: none;
  `;
};

export default SideBarItem;