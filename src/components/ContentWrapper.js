import React from "react";
import styled from "styled-components";

const IndexContent = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;
`;

const ContentWrapper = ({ children }) => {
  return <IndexContent>{children}</IndexContent>;
};

export default ContentWrapper;
