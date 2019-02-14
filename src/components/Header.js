import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const HeaderTag = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 14px 0 12px;
  text-align: center;
  background: #111;
  &:before {
    position: absolute;
    top: -10px;
    left: 0;
    display: block;
    content: "";
    width: 100%;
    height: 14px;
    background: ${props => props.theme.colors.gradient};
  }
  h1,
  h3 {
    width: 100%;
  }
  .logo {
    width: 200px;
    height: 45px;
  }
  a {
    display: block;
  }
`;

const Header = ({ title, location }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const logo = (
    <Link to={`/`}>
      <img className="logo" src="/images/logo.svg" alt={title} />
    </Link>
  );

  let headerInner;
  if (location.pathname === rootPath) {
    headerInner = <h1>{logo}</h1>;
  } else {
    headerInner = <h3>{logo}</h3>;
  }
  return <HeaderTag>{headerInner}</HeaderTag>;
};

export default Header;
