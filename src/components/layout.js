import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import Header from "../components/Header";
import CategoryMenu from "./CategoryMenu";

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <div className="siteRoot">
          <Header title={title} location={location} />
          <CategoryMenu location={location} />
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
