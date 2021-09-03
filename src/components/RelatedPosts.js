import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import twemoji from "twemoji";

const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.whitesmoke};
  padding: 2em ${(props) => props.theme.sideSpace.contentLarge};
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    padding: 30px ${(props) => props.theme.sideSpace.contentSmall};
  }
`;

const PostCardWrapper = styled.div`
  .post-card-link {
    display: flex;
    align-items: center;
    margin-bottom: 1.3em;
    padding: 15px;
    background: #fff;
    border-radius: 14px;
    color: ${(props) => props.theme.colors.blackLight};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
      padding: 10px;
    }
  }
`;
const PostCardEmoji = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 80px;
  height: 80px;
  background: ${(props) => props.theme.colors.whitesmoke};
  border-radius: 10px;
  font-size: 50px;
  img {
    width: 45px;
    height: 45px;
  }
`;
const PostCardContent = styled.div`
  width: calc(100% - 80px);
  padding-left: 15px;
  h5 {
    font-size: 1.1em;
    font-weight: 700;
    line-height: 1.45;
  }
  time {
    display: block;
    margin-bottom: 0.1em;
    letter-spacing: 0.05em;
    font-size: 0.8em;
    color: ${(props) => props.theme.colors.silver};
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    padding-left: 15px;
    h5 {
      font-size: 1em;
    }
  }
`;

const RelatedPostCard = ({ node }) => {
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
          <h5>{title}</h5>
          <time>{node.frontmatter.date}</time>
        </PostCardContent>
      </Link>
    </PostCardWrapper>
  );
};

const RelatedPosts = ({ posts }) => {
  if (!posts.length) return null;
  let content = [];

  posts.forEach((post) => {
    content.push(
      <RelatedPostCard key={post.node.fields.slug} node={post.node} />
    );
  });
  return <Wrapper>{content}</Wrapper>;
};

export default RelatedPosts;
