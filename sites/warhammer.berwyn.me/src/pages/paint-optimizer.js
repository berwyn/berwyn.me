import React, { Fragment, PureComponent } from 'react';
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
          type
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

const PaintList = styled.section`
  border-right: 1px solid black;
  > :not(:last-child) {
    border-bottom: 1px solid black;
  }
`;

const Header = styled.h3``;

const ListHeader = styled.h3`
  background-color: black;
  color: rgba(255, 255, 255, 0.8);
  text-transform: capitalize;
  padding: 1em;
  position: sticky;
  top: 0;
`;

class PaintOptimizer extends PureComponent {
  componentWillMount() {
    const { data, populatePaints, populateSets } = this.props;

    populatePaints(data.paints.edges.map(edge => edge.node));
    populateSets(data.sets.edges.map(edge => edge.node));
  }

  render() {
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
    const paints = this.props.data.paints.edges
      .map(edge => edge.node)
      .reduce((acc, cur) => {
        const arr = acc[cur.type] || [];
        arr.push(cur);
        acc[cur.type] = arr;

        return acc;
      }, {});

    return Object.keys(paints).map(type => (
      <Fragment key={`list-item-${type}`}>
        <ListHeader key={`header-${type}`}>{type}</ListHeader>
        {paints[type].map(paint => (
          <div
            key={`${type}-${paint.name}`}
            css={{ '&:hover': { backgroundColor: 'rgba(0, 0, 0, .1)' } }}
          >
            <SelectPaintCard paint={paint} />
          </div>
        ))}
      </Fragment>
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
