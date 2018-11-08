import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { ProjectListing, Layout } from 'components';

const Index = ({
  data: {
    allMarkdownRemark: { edges: projectEdges },
  },
}) => (
  <Layout>
    <ProjectListing projectEdges={projectEdges} />
    <ProjectListing projectEdges={projectEdges} />
  </Layout>
);
const params = {
  slidesPerView: 'auto',
  spaceBetween: 40,
  breakpoints: {
    460: {
      slidesPerView: 1,
    },
  },
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___title], order: ASC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            service
            client
            cover {
              childImageSharp {
                fluid(maxWidth: 850, quality: 90, traceSVG: { color: "#f3f3f3" }) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
