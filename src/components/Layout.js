import React from "react";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Bio from "./Bio";
import ContentWrapper from "../components/ContentWrapper";
import styled from "styled-components";

const Content = styled.div`
  margin-top: 1rem;
  display: flex;
  min-height: 85vh;
  align-items: flex-start;
  @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
    display: block;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    margin-top: 0.5rem;
  }
`;

const MainWrapper = styled.div`
  width: calc(100% - ${(props) => props.theme.sizes.bioWidth} - 40px);
  margin-right: 40px;
  @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
    width: 100%;
  }
`;

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <div className="siteRoot">
          <Header title={title} location={location} />
          <ContentWrapper>
            <Content>
              <MainWrapper>
                <main>{children}</main>
              </MainWrapper>
              <Bio />
            </Content>
          </ContentWrapper>
          <Footer />
          <GlobalStyle />
        </div>
      </ThemeProvider>
    );
  }
}

export default Layout;
