import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import svgTwitter from "../svg/socials/twitter.svg";
import svgResume from "../svg/socials/resume.svg";
import svgEmail from "../svg/socials/email.svg";

const BioWrapper = styled.div`
  position: relative;
  max-width: 290px;
  padding: 1.5em;
  font-size: 15.5px;
  background: ${props => props.theme.colors.blackLight};
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
  }
  &:before {
    top: 0;
    left: 0;
    border-top: 20px solid ${props => props.theme.colors.background};
    border-right: 20px solid transparent;
  }
  &:after {
    bottom: 0;
    right: 0;
    border-bottom: 20px solid ${props => props.theme.colors.background};
    border-left: 20px solid transparent;
  }
  .avatar {
    border-radius: 50%;
  }
`;
const BioHeader = styled.div`
  display: flex;
  align-items: center;
`;
const BioName = styled.div`
  margin-left: 10px;
  a {
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 1.3em;
    color: #fff;
  }
`;
const BioMain = styled.div`
  margin-top: 1em;
`;
const BioText = styled.p`
  color: #fff;
`;
const BioLinks = styled.div`
  margin-top: 1.5em;
  display: flex;
  color: #fff;
  text-align: center;
  .bio-link {
    width: 33.3%;
    display: block;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9em;
    line-height: 30px;
    color: ${props => props.theme.colors.gray};
    letter-spacing: 0.5px;
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
  img {
    display: block;
    margin: 0 auto;
    width: 40px;
    height: 33px;
  }
`;

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata;
        return (
          <BioWrapper>
            <BioHeader>
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                className="avatar"
              />
              <BioName>
                <a href={`https://twitter.com/${social.twitter}`}>CatNose</a>
              </BioName>
            </BioHeader>
            <BioMain>
              <BioText>
                Independent UI/UX designer / front-end developer who loves
                crafting web apps.
              </BioText>
              <BioLinks>
                <a className="bio-link" href="https://www.resume.id/catnose99">
                  <img src={svgResume} alt="RESUME" />
                  <div>RESUME</div>
                </a>
                <a
                  className="bio-link bio-link--email"
                  href="mailto:catnose99@gmail.com"
                >
                  <img src={svgEmail} alt="" />
                  <div>E-mail</div>
                </a>
                <a className="bio-link" href="https://twitter.com/catnose99">
                  <img src={svgTwitter} alt="Twitter" />
                  <div>Twitter</div>
                </a>
              </BioLinks>
            </BioMain>
          </BioWrapper>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/avatar.png/" }) {
      childImageSharp {
        fixed(width: 70, height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;

export default Bio;
