import React, { Component } from "react";

class Film extends Component {
    render() {
        return(
            <div className="film">
               
                <a href={this.props.children}>{this.props.name}</a>
              
                <br></br>
            </div>
        )
    }
}

export default Film;