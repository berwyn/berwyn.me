import React from 'react';
import PropTypes from 'prop-types';

const PaintCard = props => {
  const { paint } = props;
  return (
    <>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: '1rem max-content',
          gridGap: '1rem',
          padding: '1rem',
        }}
        onClick={() => {
          if (props.onClick) {
            props.onClick();
          }
        }}
      >
        <div css={{ backgroundColor: paint.color, width: '1rem' }} />
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <span>{paint.name}</span>
          <span>C${paint.price.toFixed(2)}</span>
        </div>
      </div>
    </>
  );
};

PaintCard.propTypes = {
  paint: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default PaintCard;
