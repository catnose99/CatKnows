import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PostCard from "../components/PostCard";
import CategoryMenu from "../components/CategoryMenu";
import CategoryJsonLd from "../components/json/CategoryJsonLd";
import styled from "styled-components";

const Heading = styled.h1`
  margin: 2rem 0 0.5em;
  font-size: 32px;
  color: #fff;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 1px;
`;

class CategoryTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const posts = data.allMarkdownRemark.edges;
    const { location } = this.props;
    // get Category name from category slug
    const categorySlug = pageContext.category;
    const categoryObject = data.site.siteMetadata.categories.find((cat) => {
      return cat.slug === categorySlug;
    });
    // use slug when name doesn't exist
    const categoryName = categoryObject ? categoryObject.name : categorySlug;

    return (
      <Layout location={this.props.location} title={categoryName}>
        <SEO title={categoryName} />
        <CategoryJsonLd
          categorySlug={categorySlug}
          categoryName={categoryName}
        />
        <CategoryMenu location={location} />
        <Heading>{categoryName}</Heading>
        {posts.map(({ node }) => {
          return <PostCard key={node.fields.slug} node={node} />;
        })}
      </Layout>
    );
  }
}

export default CategoryTemplate;

export const pageQuery = graphql`
  query BlogPostByCategory($category: String) {
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
