import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import ContentWrapper from "../components/ContentWrapper";
import svgLogo from "../svg/logo.svg";

const HeaderTag = styled.header`
  padding: 1.4rem 0;
  width: 100%;
`;

const HeaderInner = styled.div`
  position: relative;
  h1,
  h3 {
    width: 100%;
  }
  .logo {
    display: block;
    @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
      margin: 0 auto;
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
  const HeadingLevel = location.pathname === rootPath ? "h1" : "h3";

  return (
    <HeaderTag>
      <ContentWrapper>
        <HeaderInner>
          <HeadingLevel>
            <Link to={`/`} className="logo-link">
              <img
                className="logo"
                src={svgLogo}
                alt={title}
                width={165}
                height={37}
              />
            </Link>
          </HeadingLevel>
        </HeaderInner>
      </ContentWrapper>
    </HeaderTag>
  );
};

export default Header;
