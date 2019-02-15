import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import ContentWrapper from "../components/ContentWrapper";
import svgLogo from "../svg/logo.svg";

const HeaderTag = styled.header`
  width: 100%;
  padding: 16px 0;
  // border-bottom: solid 1px ${props => props.theme.colors.blackLight};
  box-shadow: 0 2px 4px rgba(0,0,0,.2);
`;

const HeaderInner = styled.div`
  position: relative;
  h1,
  h3 {
    width: 100%;
  }
  .logo {
    width: 180px;
    height: 42.7px;
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
      width: 165px;
      height: 37px;
    }
  }

  .logo-link {
    display: block;
  }
  .message-link {
    position: absolute;
    right: 0;
    top: 7px;
    display: block;
    width: 34px;
    &:hover {
      top: 5px;
    }
  }
`;

const Header = ({ title, location }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const logoLink = (
    <Link to={`/`} className="logo-link">
      <img className="logo" src={svgLogo} alt={title} />
    </Link>
  );

  let headerLogo;
  if (location.pathname === rootPath) {
    headerLogo = <h1>{logoLink}</h1>;
  } else {
    headerLogo = <h3>{logoLink}</h3>;
  }
  return (
    <HeaderTag>
      <ContentWrapper>
        <HeaderInner>{headerLogo}</HeaderInner>
      </ContentWrapper>
    </HeaderTag>
  );
};

export default Header;
