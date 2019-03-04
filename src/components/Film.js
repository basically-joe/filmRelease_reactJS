import React, { Component } from "react";

class Film extends Component {
render() {
    return (
        <div className="film">
        <h4>{this.props.name} ({this.props.id})</h4>
        <p>{this.props.url}</p>
        </div>
    )
}
}

export default Film;