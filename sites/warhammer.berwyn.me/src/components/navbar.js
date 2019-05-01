import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  top: 0;
  position: sticky;

  display: flex;
  flex-direction: row;

  width: 100vw;
  padding: 1rem;

  background-color: rgba(0, 0, 0, 0.8);
  color: white;
`;

const Navbar = ({ title }) => (
  <>
    <Wrapper>
      <span>{title}</span>
    </Wrapper>
  </>
);

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
