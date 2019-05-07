import React from 'react';
import { connect } from 'react-redux';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { deselectPaint } from '../../actions/selected-paint';
import PaintCard from '../../components/paints/paint-card';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Icon = styled.button`
  display: none;
  color: crimson;

  ${Wrapper}:hover & {
    display: inline-block;
  }
`;

const DeselectingPaintCard = ({ paint, onDeselect }) => (
  <>
    <Wrapper>
      <PaintCard paint={paint} />
      <Icon onClick={() => onDeselect(paint)}>
        <FontAwesomeIcon icon={faTimesCircle} />
      </Icon>
    </Wrapper>
  </>
);

const mapStateToProps = (state, ownProps) => ownProps;

const mapDispatchToProps = dispatch => ({
  onDeselect: paint => dispatch(deselectPaint(paint)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeselectingPaintCard);
