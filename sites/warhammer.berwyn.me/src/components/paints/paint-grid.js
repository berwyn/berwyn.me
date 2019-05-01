import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import PaintCard from './paint-card';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
`;

const PaintGrid = ({ paints }) => (
  <>
    <Wrapper>
      {paints.map(paint => (
        <div key={paint.name}>
          <PaintCard paint={paint} />
        </div>
      ))}
    </Wrapper>
  </>
);

PaintGrid.propTypes = {
  paints: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

PaintGrid.defaultProps = {
  paints: [],
};

export default PaintGrid;
