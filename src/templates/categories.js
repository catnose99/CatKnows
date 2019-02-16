import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PostCard from "../components/PostCard";
import CategoryMenu from "../components/CategoryMenu";
import styled from "styled-components";

const Heading = styled.h1`
  margin: 0.5em 0 0.8em;
  font-size: 32px;
  color: #fff;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: 1px;
`;

class CategoryTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const posts = data.allMarkdownRemark.edges;
    const { location } = this.props;
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
        <CategoryMenu location={location} />
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
          color
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
            date(formatString: "YYYY.MM.DD")
            title
            emoji
            category
          }
        }
      }
    }
  }
`;
