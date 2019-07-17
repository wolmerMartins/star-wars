import React from 'react';

import Context from '../../context/Context';
import CardList from '../../components/CardList';

import images from '../../assets/images/images';

const PlanetDetails = props => (
    <Context.Consumer>
        {context => (
            <div className="card-details-container">
                <div className="card-image-button">
                    <div className="card-image">
                        <img src={images[context.dataSelected.data[0].name.replace(/[^A-Za-z0-9]/g, '')]} alt="Card details ilustration" />
                    </div>

                    <button className="go-back-button" onClick={() => context.returnToHome()}>Go Back</button>
                </div>
                
                <div className="card-infos">
                    <div className="card-header">
                        <span className="card-name-location">
                            <h2>{context.dataSelected.data[0].name}</h2>
                            <h3><img src="" alt="" />{context.dataSelected.data[0].terrain}</h3>
                        </span>

                        <span className="card-additional">
                            <p>{context.dataSelected.data[0].climate}</p>
                            <p>{context.dataSelected.data[0].gravity}</p>
                            <p>{context.dataSelected.data[0].orbital_period}</p>
                        </span>
                    </div>

                    <div className="card-body">
                        {context.dataSelected.data[0].films.length > 0 &&
                        <CardList data={context.dataSelected.data[0].films} title={'Films'} />}
                        {context.dataSelected.data[0].residents.length > 0 &&
                        <CardList data={context.dataSelected.data[0].residents} title={'Residents'} />}
                    </div>
                </div>
            </div>
        )}
    </Context.Consumer>
);

export default PlanetDetails;