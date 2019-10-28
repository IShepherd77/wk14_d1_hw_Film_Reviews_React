import React, { Component } from "react";

class Film extends Component {
    render() {
        return(
            <div className="film">
                <p>{this.props.name}</p>
                <h4>{this.props.children}</h4>

            </div>
        )
    }
}

export default Film;