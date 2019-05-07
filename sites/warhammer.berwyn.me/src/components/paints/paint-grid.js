import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import PaintCard from './paint-card';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1em;
`;

const PaintGrid = ({ paints, itemComponent }) => {
  const ItemComponent = itemComponent || PaintCard;

  return (
    <>
      <Wrapper>
        {paints.map(paint => (
          <div key={paint.name}>
            <ItemComponent paint={paint} />
          </div>
        ))}
      </Wrapper>
    </>
  );
};

PaintGrid.propTypes = {
  paints: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  itemComponent: PropTypes.elementType,
};

PaintGrid.defaultProps = {
  paints: [],
  itemComponent: PaintCard,
};

export default PaintGrid;
