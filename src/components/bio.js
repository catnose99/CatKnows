import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";
import { Link } from "gatsby";

import svgTwitter from "../svg/socials/twitter.svg";
import svgResume from "../svg/socials/resume.svg";
import svgEmail from "../svg/socials/email.svg";

const BioWrapper = styled.div`
  position: relative;
  padding: 1.7em;
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
  .avatar {
    width: 70px;
  }
`;
const BioName = styled.div`
  margin-left: 15px;
  a {
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 20px;
    color: #fff;
  }
  .position {
    color: rgba(255, 255, 255, 0.4);
    font-size: 14px;
  }
`;
const BioMain = styled.div`
  padding-left: 85px;
`;
const BioText = styled.p`
  color: #fff;
`;
const BioLinks = styled.div`
  margin: 0.5em 0 0;
  color: #fff;
  a {
    display: inline-block;
    margin-right: 20px;
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;
    line-height: 30px;
    color: #fff;
    letter-spacing: 0.5px;
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
  img {
    width: 28px;
    height: 28px;
    vertical-align: middle;
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
                <div className="position">Designer + Engineer hybrid.</div>
              </BioName>
            </BioHeader>
            <BioMain>
              <BioText>
                Independent designer/front-end dev who loves crafting web apps.
              </BioText>
              <BioLinks>
                <Link to={`/`} className="bio-link">
                  <img src={svgResume} alt="RESUME" /> RESUME
                </Link>
                <Link to={`/`} className="bio-link">
                  <img src={svgEmail} alt="" /> E-mail
                </Link>
                <Link to={`/`} className="bio-link">
                  <img src={svgTwitter} alt="Twitter" /> Twitter
                </Link>
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
