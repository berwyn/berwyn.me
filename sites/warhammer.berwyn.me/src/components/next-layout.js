import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import Navbar from '../components/navbar';
import './next-layout.css';

const NextLayout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <>
      <div
        css={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <header>
          <Navbar title={data.site.siteMetadata.title} />
        </header>
        <main css={{ flex: 1 }}>{children}</main>
        <footer>Copyright © {new Date().getFullYear()} berwyn</footer>
      </div>
    </>
  );
};

NextLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NextLayout;
