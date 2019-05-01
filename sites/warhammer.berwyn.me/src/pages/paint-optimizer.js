import React from 'react';
import { graphql } from 'gatsby';

import NextLayout from '../components/next-layout';
import styled from '@emotion/styled';
import SelectPaintCard from '../containers/paints/select-paint-card';
import SelectedPaintGrid from '../containers/paints/selected-paint-grid';

export const query = graphql`
  {
    paints: allPaintsYaml {
      edges {
        node {
          name
          price
          color
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

const PaintPanel = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const PaintList = styled.div`
  border-right: 1px solid black;
  > :not(:last-child) {
    border-bottom: 1px solid black;
  }
`;

export default ({ data }) => {
  return (
    <NextLayout>
      <PaintPanel>
        <PaintList>
          {data.paints.edges.map(({ node }) => (
            <div
              key={node.name}
              css={{ '&:hover': { backgroundColor: 'rgba(0, 0, 0, .1)' } }}
            >
              <SelectPaintCard paint={node} />
            </div>
          ))}
        </PaintList>
        <div css={{ flex: 1 }}>
          <SelectedPaintGrid />
        </div>
      </PaintPanel>
    </NextLayout>
  );
};
