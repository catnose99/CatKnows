import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

const JsonLD = () => {
  return (
    <StaticQuery
      query={jsonLdHomeQuery}
      render={(data) => {
        const { title, siteUrl, description, author } = data.site.siteMetadata;

        const publisher = {
          "@type": "Organization",
          name: author,
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/images/avatar.png`,
            width: 150,
            height: 150,
          },
        };

        const jsonLd = {
          "@context": "http://schema.org",
          "@type": "WebSite",
          image: {
            "@type": "ImageObject",
            url: `${siteUrl}/images/ogp.png`,
            height: 1200,
            width: 630,
          },
          url: siteUrl,
          name: title,
          author: {
            "@type": "Person",
            name: author,
          },
          description: description,
          publisher,
        };

        return (
          <Helmet>
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
          </Helmet>
        );
      }}
    />
  );
};

export default JsonLD;

const jsonLdHomeQuery = graphql`
  query JsonLdHomeQuery {
    site {
      siteMetadata {
        title
        siteUrl
        description
        author
      }
    }
  }
`;
