import React from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';

import Context from './context/Context';
import Provider from './context/Provider';
import Routes from './routes';

import Header from './components/Header';
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
              <BrowserRouter>
                <Routes />
                { context.isLoading && <Loader /> }
                { !context.dataSelected.status && <Redirect to="/" /> }
                { context.dataSelected.status && <Redirect to="/details" /> }
              </BrowserRouter>
            )}
          </Context.Consumer>
        </div>
      </div>
    </Provider>
  );
}

export default App;
