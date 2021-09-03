import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import twemoji from "twemoji";
import CategoryLabel from "../components/CategoryLabel";

const PostCardWrapper = styled.div`
  .post-card-link {
    display: flex;
    align-items: start;
    padding: 1.4em 0;
    color: #fff;
    border-top: solid 1px ${(props) => props.theme.colors.blackLight};
    @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
      padding: 1em 0;
    }
  }
`;
const PostCardEmoji = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 90px;
  height: 90px;
  background: ${(props) => props.theme.colors.blackLight};
  border-radius: 12px;
  font-size: 50px;
  img {
    width: 45px;
    height: 45px;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
    width: 70px;
    height: 70px;
    img {
      width: 38px;
      height: 38px;
    }
  }
`;
const PostCardContent = styled.div`
  width: calc(100% - 90px);
  padding-left: 20px;
  h3 {
    font-size: 1.5em;
    font-weight: 700;
    line-height: 1.4;
  }
  time {
    display: block;
    margin-bottom: 0.2em;
    letter-spacing: 0.05em;
    font-size: 0.9em;
    color: ${(props) => props.theme.colors.gray};
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
    width: calc(100% - 70px);
    padding-left: 15px;
    h3 {
      font-size: 16.5px;
    }
    time {
      font-size: 12px;
    }
  }
`;

const PostCard = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug;
  const emoji = twemoji.parse(node.frontmatter.emoji || "🐱", {
    folder: "svg",
    ext: ".svg",
  });

  return (
    <PostCardWrapper>
      <Link to={node.fields.slug} className="post-card-link">
        <PostCardEmoji dangerouslySetInnerHTML={{ __html: emoji }} />
        <PostCardContent>
          <h3>{title}</h3>
          <time>{node.frontmatter.date}</time>
          <CategoryLabel slug={node.frontmatter.category} />
        </PostCardContent>
      </Link>
    </PostCardWrapper>
  );
};

export default PostCard;
