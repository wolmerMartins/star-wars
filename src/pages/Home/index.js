import React, { Component } from 'react';

import Context from '../../context/Context';
import Cards from '../../components/Cards';
import Paginator from '../../components/Paginator';

import './style.css';

class Home extends Component {
    render() {
        return (
            <Context.Consumer>
            {context => (    
                <main className="home-container">
                {!context.isLoading &&
                    <div className="cards">
                        <Cards data={context.data.results} getDataById={context.getDataById} />
                    </div>
                }

                {!context.isLoading &&
                    context.data.count > 10 &&
                    <Paginator />
                }
                </main>
            )}
            </Context.Consumer>
        )
    }
}

export default Home;