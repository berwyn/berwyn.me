import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Navbar from '../components/navbar';
import './next-layout.css';
import { warhammerApp } from '../reducers/root';

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

  const store = createStore(warhammerApp);

  return (
    <>
      <Provider store={store}>
        <div
          css={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
        >
          <header>
            <Navbar title={data.site.siteMetadata.title} />
          </header>
          <main css={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {children}
          </main>
          <footer>Copyright © {new Date().getFullYear()} berwyn</footer>
        </div>
      </Provider>
    </>
  );
};

NextLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NextLayout;
