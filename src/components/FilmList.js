import React, { Component } from "react";
import Film from './Film';

class FilmList extends Component {
    render() {
        return(
            <div className="film-list">
                <p>Film List goes here!</p>
                <Film name="Rick Henry">Film 1 text here</Film>
                <Film name="Valerie Gibson">film 2 stuff here.</Film>
            </div>
        )
    }
}

export default FilmList;