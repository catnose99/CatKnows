import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

const CategoryJsonLD = ({ categorySlug, categoryName }) => {
  return (
    <StaticQuery
      query={jsonLdCategoryQuery}
      render={(data) => {
        const { siteUrl } = data.site.siteMetadata;
        //bread crumbs
        const jsonBreadCrumbs = {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": siteUrl,
                name: "HOME",
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@id": `${siteUrl}/${categorySlug}`,
                name: categoryName,
              },
            },
          ],
        };
        return (
          <Helmet>
            <script type="application/ld+json">
              {JSON.stringify(jsonBreadCrumbs)}
            </script>
          </Helmet>
        );
      }}
    />
  );
};

export default CategoryJsonLD;

const jsonLdCategoryQuery = graphql`
  query jsonLdCategoryQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
