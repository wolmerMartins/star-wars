import React from 'react';

import images from '../../assets/images/images';

import './style.css';

const Cards = props => (
    props.data.map(res =>
        <div key={res.url} className="card-container">
            <button onClick={() => props.getDataById(res.url)} className="card-selected">Click for details</button>
            <div className="card">
                <img className="background-image" src={res.name ? images[res.name.replace(/[ -]/g, '')] : images[res.title]} alt="ilustration of card component" />
                <div className="card-name">
                    <h2>{res.name ? res.name : res.title}</h2>
                </div>
            </div>
        </div>
    )
);

export default Cards;