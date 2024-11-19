import React from "react";
import './movie.css'
const Movie = (props)=>
{
    return (
        <>
          <div className="movie-con">
          <div className="movie-image">
          <img src={props.mvImg}/>
         
          </div>
          <div className="movie-name">
             <p className="movie-p">
                <b>{props.name}</b>
             </p>
             <button className="mv-btn"> Watch Now </button>
          </div>
          </div>
        </>
    );
}

export default Movie