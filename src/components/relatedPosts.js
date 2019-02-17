import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import twemoji from "twemoji";
import CategoryLabel from "../components/CategoryLabel";

const Wrapper = styled.div`
  margin: 2em 0 0;
  background: ${props => props.theme.colors.whitesmoke};
  padding: 2em ${props => props.theme.sideSpace.contentLarge};
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    padding: 30px ${props => props.theme.sideSpace.contentSmall};
  }
`;

const PostCardWrapper = styled.div`
  .post-card-link {
    display: flex;
    align-items: center;
    padding: 15px;
    background: #fff;
    border-radius: 5px;
    color: ${props => props.theme.colors.blackLight};
    &:hover {
      background: #e0ebf1;
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
  h5 {
    font-size: 1.25em;
    font-weight: 600;
    line-height: 1.45;
  }
  time {
    display: block;
    margin-bottom: 0.1em;
    letter-spacing: 0.05em;
    font-size: 0.8em;
    color: ${props => props.theme.colors.gray};
  }
`;

const RelatedPostCard = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug;
  const emoji = twemoji.parse(node.frontmatter.emoji || "🐱", {
    folder: "svg",
    ext: ".svg"
  });

  return (
    <PostCardWrapper>
      <Link to={node.fields.slug} className="post-card-link">
        <PostCardEmoji dangerouslySetInnerHTML={{ __html: emoji }} />
        <PostCardContent>
          <h5>{title}</h5>
          <time>{node.frontmatter.date}</time>
          <CategoryLabel slug={node.frontmatter.category} />
        </PostCardContent>
      </Link>
    </PostCardWrapper>
  );
};

const RelatedPosts = ({ posts }) => {
  if (!posts.length) return null;
  let content = [];

  posts.forEach(post => {
    content.push(
      <RelatedPostCard key={post.node.fields.slug} node={post.node} />
    );
  });
  return <Wrapper>{content}</Wrapper>;
};

export default RelatedPosts;
