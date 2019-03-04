import React, { Component } from "react";
import Film from "./Film"

class FilmList extends Component(){
  
    render() {

        const filmNodes = this.props.data.map(comment => {
            return (
                <Film
                    title={film.name}
                    key={film.id}
                    url = {film.url}
                >{film.text}</Film>
            )
        })

        return (
            <div className="film-list">
                {filmNodes}

            </div>
        )
    }

}

export default FilmList.js