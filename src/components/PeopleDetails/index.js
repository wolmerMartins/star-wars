import React from 'react';

import Context from '../../context/Context';
import CardList from '../../components/CardList';

import images from '../../assets/images/images';

const PeopleDetails = props => (
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
                        <h3><img src="" alt="" />{context.dataSelected.data[0].homeworld.name}</h3>
                    </span>

                    <span className="card-additional">
                        <p>{context.dataSelected.data[0].species[0].name}</p>
                        <p>{context.dataSelected.data[0].gender}</p>
                        <p><img src="" alt="" />{context.dataSelected.data[0].birth_year}</p>
                    </span>
                </div>

                <div className="card-body">
                    {context.dataSelected.data[0].films.length > 0 &&
                    <CardList data={context.dataSelected.data[0].films} title={'Films'} />}
                    {context.dataSelected.data[0].starships.length > 0 &&
                    <CardList data={context.dataSelected.data[0].starships} title={'Starships'} />}
                    {context.dataSelected.data[0].vehicles.length > 0 &&
                    <CardList data={context.dataSelected.data[0].vehicles} title={'Vehicles'} />}
                </div>
            </div>
        </div>
    )}
    </Context.Consumer>
);

export default PeopleDetails;