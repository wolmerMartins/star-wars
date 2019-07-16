import React, { Fragment } from 'react';

import Context from './context/Context';
import Provider from './context/Provider';

import Header from './components/Header';
import Home from './pages/Home';
import Details from './pages/Details';
import Loader from './components/Loader';

import './global.css';

function App() {
  return (
    <Provider>
      <div className="App">
        <div className="app-container">
          <Header />
          <Context.Consumer>
            {context => (
              <Fragment>
              { context.isLoading && <Loader /> }
              { !context.dataSelected.status && <Home /> }
              { context.dataSelected.status && <Details /> }
              </Fragment>
            )}
          </Context.Consumer>
        </div>
      </div>
    </Provider>
  );
}

export default App;
