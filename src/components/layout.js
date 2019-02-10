import React from "react";
import { Link } from "gatsby";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
// import styled from "styled-components";

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    const logo = (
      <Link to={`/`}>
        <img src="/images/logo.svg" alt={title} />
      </Link>
    );
    let header;
    if (location.pathname === rootPath) {
      header = <h1>{logo}</h1>;
    } else {
      header = <h3>{logo}</h3>;
    }
    return (
      <ThemeProvider theme={theme}>
        <div className="siteRoot">
          <header>{header}</header>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
          <GlobalStyle />
        </div>
      </ThemeProvider>
    );
  }
}

export default Layout;
