import React from "react";
import styled from "styled-components";

const IndexContent = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    max-width: 760px;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    padding: 0 20px;
  }
`;

const ContentWrapper = ({ children }) => {
  return <IndexContent>{children}</IndexContent>;
};

export default ContentWrapper;
