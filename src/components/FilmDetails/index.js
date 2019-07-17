import React from 'react';

import Context from '../../context/Context';
import CardList from '../../components/CardList';

import images from '../../assets/images/images';

const FilmDetails = props => (
    <Context.Consumer>
        {context => (
            <div className="card-details-container">
                <div className="card-image-button">
                    <div className="card-image">
                        <img src={images[context.dataSelected.data[0].title.replace(/[^A-Za-z0-9]/g, '')]} alt="Card details ilustration" />
                    </div>

                    <button className="go-back-button" onClick={() => context.returnToHome()}>Go Back</button>
                </div>
                
                <div className="card-infos">
                    <div className="card-header">
                        <span className="card-name-location">
                            <h2>{context.dataSelected.data[0].title}</h2>
                            <h3><img src="" alt="" />{context.dataSelected.data[0].director}</h3>
                        </span>

                        <span className="card-additional">
                            <p>{context.dataSelected.data[0].producer}</p>
                            <p>{context.dataSelected.data[0].release_date}</p>
                        </span>
                    </div>

                    <div className="card-body">
                        {context.dataSelected.data[0].species.length > 0 &&
                        <CardList data={context.dataSelected.data[0].species} title={'Species'} />}
                        {context.dataSelected.data[0].starships.length > 0 &&
                        <CardList data={context.dataSelected.data[0].starships} title={'Starships'} />}
                        {context.dataSelected.data[0].vehicles.length > 0 &&
                        <CardList data={context.dataSelected.data[0].vehicles} title={'Vehicles'} />}
                        {context.dataSelected.data[0].planets.length > 0 &&
                        <CardList data={context.dataSelected.data[0].planets} title={'Planets'} />}
                        {context.dataSelected.data[0].characters.length > 0 &&
                        <CardList data={context.dataSelected.data[0].characters} title={'Characters'} />}
                    </div>
                </div>
            </div>
        )}
    </Context.Consumer>
);

export default FilmDetails;