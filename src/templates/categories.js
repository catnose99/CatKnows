import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PostCard from "../components/PostCard";
import styled from "styled-components";
import svgHeadingBar from "../svg/others/heading-bar.svg";

const Heading = styled.h1`
position: relative;
  margin: 0.5em 0 .8em;
  padding-left: 20px;
  font-size: 32px;
  color: #fff;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: 1px;
  &:before {
    position: absolute;
    top: 2px;
    left: 0;
    content: "";
    display: inline-block;
    width: 10px;
    height: 40px;
    background-image: url("${svgHeadingBar}");
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

class CategoryTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const posts = data.allMarkdownRemark.edges;
    // get Category name from category slug
    const catSlug = pageContext.category;
    const catObject = data.site.siteMetadata.categories.find(cat => {
      return cat.slug === catSlug;
    });
    // use slug when name doesn't exist
    const catName = catObject ? catObject.name : catSlug;

    return (
      <Layout location={this.props.location} title={catName}>
        <SEO title={catName} />
        <Heading>{catName}</Heading>
        {posts.map(({ node }) => {
          return <PostCard key={node.fields.slug} node={node} />;
        })}
      </Layout>
    );
  }
}

export default CategoryTemplate;

export const pageQuery = graphql`
  query($category: String) {
    site {
      siteMetadata {
        categories {
          name
          slug
        }
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            title
            emoji
            category
          }
        }
      }
    }
  }
`;
