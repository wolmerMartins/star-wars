import React from 'react';

import Context from '../../context/Context';

import './style.css';

const Paginator = props => (
    <Context.Consumer>
    {context => (
        <div className="paginator-container">
            {console.log('paginator', context.data, context.pages)}
            <nav>
                <button className="change-page" onClick={() => context.getDataByPage(context.data.previous)} disabled={!context.data.previous}><div className="prev"></div></button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button className="change-page" onClick={() => context.getDataByPage(context.data.next)} disabled={!context.data.next}><div className="next"></div></button>
            </nav>
        </div>
    )}
    </Context.Consumer>
);

export default Paginator;