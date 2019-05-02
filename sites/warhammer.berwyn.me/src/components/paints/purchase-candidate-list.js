import React from 'react';
import styled from '@emotion/styled';

import PurchaseCandidate from './purchase-candidate';

const CandidateList = styled.section`
  > :not(:last-child) {
    border-bottom: 1px solid black;
  }
`;

const PurchaseCandidateList = ({ candidates }) => {
  return (
    <CandidateList>
      {candidates.map((candidate, index) => (
        <PurchaseCandidate
          candidate={candidate}
          key={index}
          css={{ ':not(:last-child)': { borderBottom: '1px solid black' } }}
        />
      ))}
    </CandidateList>
  );
};

export default PurchaseCandidateList;
