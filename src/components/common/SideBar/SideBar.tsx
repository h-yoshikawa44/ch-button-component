import { css } from '@emotion/react';
import SideBarItem from '@/components/common/SideBarItem';
import { fonts, colors } from '@/styles/constants';

const SideBar = () => {
  return (
    <div css={sideBar}>
      <h1 css={siteTitle}>
        <span>Dev</span>challenge.io
      </h1>
      <nav css={nav}>
        <ul css={ul}>
          <SideBarItem text="Colors" />
          <SideBarItem text="Typography" />
          <SideBarItem text="Spaces" />
          <SideBarItem text="Buttons" />
          <SideBarItem text="Inputs" selected />
          <SideBarItem text="Grid" />
        </ul>
      </nav>
    </div>
  );
};

const sideBar = css`
  padding: 48px 56px;
  background-color: ${colors.whiteDarken};
`;

const siteTitle = css`
  font-family: ${fonts.poppins};
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 19px;

  span {
    color: ${colors.orange};
  }
`;

const nav = css`
  padding-top: 88px;
`;

const ul = css`
  padding-inline-start: unset;
`;

export default SideBar;
