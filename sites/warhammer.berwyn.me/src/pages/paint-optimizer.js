import React, { PureComponent } from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import Card from '../components/card';
import NextLayout from '../components/next-layout';
import SelectPaintCard from '../containers/paints/select-paint-card';
import SelectedPaintGrid from '../containers/paints/selected-paint-grid';
import CalculatedPurchaseCandidateList from '../containers/paints/calculated-purchase-candidate-list';
import { populatePaints, populateSets } from '../actions/populate';

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
          paints
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

const Header = styled.h3``;

class PaintOptimizer extends PureComponent {
  componentWillMount() {
    const { data, populatePaints, populateSets } = this.props;

    populatePaints(data.paints.edges.map(edge => edge.node));
    populateSets(data.sets.edges.map(edge => edge.node));
  }

  render() {
    const { data } = this.props;

    return (
      <PaintPanel>
        <PaintList>{this.renderPaints()}</PaintList>
        <section css={{ flex: 1 }}>
          <div css={{ padding: '1em' }}>
            <Card elevation={2}>
              <div css={{ padding: '1em' }}>
                <Header>Selected Paints:</Header>
                <SelectedPaintGrid />
              </div>
            </Card>
          </div>
          <CalculatedPurchaseCandidateList />
        </section>
      </PaintPanel>
    );
  }

  renderPaints = () => {
    return this.props.data.paints.edges.map(({ node }) => (
      <div
        key={node.name}
        css={{ '&:hover': { backgroundColor: 'rgba(0, 0, 0, .1)' } }}
      >
        <SelectPaintCard paint={node} />
      </div>
    ));
  };
}

const ConnectedPaintOptimizer = connect(
  (_, { data }) => ({ data }),
  dispatch => ({
    populatePaints(paints) {
      dispatch(populatePaints(paints));
    },
    populateSets(sets) {
      dispatch(populateSets(sets));
    },
  })
)(PaintOptimizer);

export default ({ data }) => {
  return (
    <>
      <NextLayout>
        <ConnectedPaintOptimizer data={data} />
      </NextLayout>
    </>
  );
};
