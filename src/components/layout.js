import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import Header from "../components/Header";
import CategoryMenu from "./CategoryMenu";
import Bio from "../components/Bio";
import ContentWrapper from "../components/ContentWrapper";
import styled from "styled-components";

const MainWrapper = styled.div`
  width: calc(100% - ${props => props.theme.sizes.bioWidth} - 60px);
  margin-right: 60px;
`;

const Content = styled.div`
  margin-top: 2em;
  display: flex;
  align-items: flex-start;
`;

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <div className="siteRoot">
          <Header title={title} location={location} />
          <ContentWrapper>
            <Content>
              <MainWrapper>
                <CategoryMenu location={location} />
                <main>{children}</main>
              </MainWrapper>
              <Bio />
            </Content>
          </ContentWrapper>

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
