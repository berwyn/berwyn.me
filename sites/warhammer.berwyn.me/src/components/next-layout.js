import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import saga from 'redux-saga';
import { Provider } from 'react-redux';

import Navbar from '../components/navbar';
import { warhammerApp } from '../reducers/root';
import { rootSaga } from '../sagas/root';
import './next-layout.css';

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

class NextLayout extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  componentWillMount() {
    const sagas = saga();
    let enhancers;

    if (process.env.NODE_ENV === 'production') {
      enhancers = applyMiddleware(thunk, sagas);
    } else {
      enhancers = compose(
        applyMiddleware(thunk, sagas),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      );
    }

    this.store = createStore(warhammerApp, enhancers);
    sagas.run(rootSaga);
  }

  render() {
    return (
      <>
        <Provider store={this.store}>
          <StaticQuery query={query} render={this.renderData} />
        </Provider>
      </>
    );
  }

  renderData = data => {
    const { children } = this.props;

    return (
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <header>
          <Navbar title={data.site.siteMetadata.title} />
        </header>
        <main css={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {children}
        </main>
        <footer>Copyright © {new Date().getFullYear()} berwyn</footer>
      </div>
    );
  };
}

export default NextLayout;
