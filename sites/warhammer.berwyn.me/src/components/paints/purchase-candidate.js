import React from 'react';
import styled from '@emotion/styled';
import PaintCard from './paint-card';

const Header = styled.h3``;

const Tagline = styled.h4``;

const FlowLine = styled.div`
  display: flex;
  flex-direction: row;
`;

const PurchaseCandidate = ({ candidate }) => {
  const paintTotal = candidate.paints.reduce(
    (acc, cur) => (acc += cur.price),
    0
  );
  const setTotal = candidate.sets.reduce((acc, cur) => (acc += cur.price), 0);
  const subtotal = paintTotal + setTotal;

  return (
    <>
      <div css={{ padding: '1em' }}>
        <Header>Paints:</Header>
        <FlowLine>
          {candidate.paints.map(paint => (
            <PaintCard paint={paint} key={paint.name} />
          ))}
        </FlowLine>
        <Header>Sets:</Header>
        <FlowLine>
          {candidate.sets.map(set => (
            <div key={set.name}>{set.name}</div>
          ))}
        </FlowLine>
        <Tagline>Price: C${subtotal.toFixed(2)}</Tagline>
      </div>
    </>
  );
};

export default PurchaseCandidate;
