import React from "react";
import styled from "styled-components";
import svgTwitterWhite from "../svg/socials/twitter-white.svg";

const Wrapper = styled.div`
  margin: 1.8rem 0 0;
  padding: 0 ${(props) => props.theme.sideSpace.contentLarge};
  text-align: center;
  color: ${(props) => props.theme.colors.blackLight};
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    padding: 0 ${(props) => props.theme.sideSpace.contentSmall};
  }
`;

const ShareTitle = styled.div`
  font-weight: 700;
  font-size: 1.2em;
  letter-spacing: 0.05em;
`;

const ShareLinks = styled.div`
  margin-top: 0.5em;
`;

const ShareLink = styled.a`
  display: inline-block;
  margin: 0 6px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  color: #fff;
  background: ${(props) => props.theme.colors.blackLight};
  font-weight: 700;
  vertical-align: middle;
  &:hover {
    transform: translateY(-2px);
  }
`;
const GitHubLink = styled.a`
  display: inline-block;
  margin-top: 1em;
  font-size: 0.85em;
  color: ${(props) => props.theme.colors.silver};
`;

const ShareButtons = ({ slug, title, emoji }) => {
  const encodedTitle = encodeURIComponent(
    `${emoji || "🐱"}${title} | CatKnows`
  );
  const pageUrl = `https://catnose99.com${slug}`;
  return (
    <Wrapper>
      <ShareTitle>SHARE</ShareTitle>
      <ShareLinks>
        <ShareLink
          href={`https://twitter.com/share?url=${pageUrl}&text=${encodedTitle}&via=catnose99`}
          rel="nofollow"
        >
          <img
            src={svgTwitterWhite}
            alt="Twitter"
            style={{
              width: "24px",
              height: "19px",
              marginTop: "11px",
            }}
          />
        </ShareLink>
        <ShareLink
          href={`https://www.facebook.com/share.php?u=${pageUrl}`}
          style={{ fontSize: "20px" }}
          rel="nofollow"
        >
          f
        </ShareLink>
        <ShareLink
          href={`http://b.hatena.ne.jp/add?mode=confirm&url=${pageUrl}`}
          style={{ fontSize: "19px" }}
          rel="nofollow"
        >
          B!
        </ShareLink>
      </ShareLinks>
      <GitHubLink
        href={`https://github.com/catnose99/CatKnows/edit/master/content/blog${slug}index.md`}
        rel="nofollow"
      >
        Edit on GitHub
      </GitHubLink>
    </Wrapper>
  );
};

export default ShareButtons;
