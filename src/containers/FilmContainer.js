import React, { Component } from 'react';
import FilmList from '../components/FilmList';

class FilmContainer extends Component {
    render() {
        return (
            <div className="film-container">
                <h2>Upcoming Film Releases for UK</h2>
                <FilmList />
            </div>

        )
    }
}

export default FilmContainer;