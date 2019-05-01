import React from 'react';
import { graphql } from 'gatsby';

import NextLayout from '../components/next-layout';

export const query = graphql`
  {
    paints: allPaintsYaml {
      edges {
        node {
          name
          price
        }
      }
    }
    sets: allPaintSetsYaml {
      edges {
        node {
          name
          price
        }
      }
    }
  }
`;

export default ({ data }) => {
  return (
    <NextLayout>
      {data.paints.edges.map(({ node }) => (
        <div key={node.name}>
          {node.name} - {node.price}
        </div>
      ))}
    </NextLayout>
  );
};
