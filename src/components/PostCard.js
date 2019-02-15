import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import twemoji from "twemoji";

const PostCardWrapper = styled.div`
  a {
    display: flex;
    align-items: center;
    padding: 1.4em 0;
    text-decoration: none;
    color: #fff;
    border-top: solid 1px ${props => props.theme.colors.blackLight};
    &:hover {
      background: ${props => props.theme.colors.blackLight};
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
  background: ${props => props.theme.colors.blackLight};
  border-radius: 4px;
  font-size: 50px;
  img {
    width: 55px;
    height: 55px;
  }
`;
const PostCardContent = styled.div`
  width: calc(100% - 110px);
  padding-left: 20px;
  h3 {
    font-size: 1.5em;
    font-weight: 600;
  }
  time {
    letter-spacing: 0.05em;
    font-size: 0.9em;
    color: ${props => props.theme.colors.gray};
  }
`;

const PostCard = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug;
  const emoji = twemoji.parse(node.frontmatter.emoji || "🐱", {
    folder: "svg",
    ext: ".svg"
  });
  return (
    <PostCardWrapper>
      <Link to={node.fields.slug}>
        <PostCardEmoji dangerouslySetInnerHTML={{ __html: emoji }} />
        <PostCardContent>
          <h3>{title}</h3>
          <time>{node.frontmatter.date}</time>
        </PostCardContent>
      </Link>
    </PostCardWrapper>
  );
};

export default PostCard;
