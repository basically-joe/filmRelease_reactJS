import React, { Component } from "react";

class Film extends Component {
render() {
    return (
        <div className="film">
        <a href={this.props.url}><p>{this.props.name}</p></a>
        </div>
    )
}
}

export default Film;