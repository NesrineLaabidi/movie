import React from 'react'
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'

const MovieTrailer = ({film}) => {
    const{id} =useParams();
    let idmovie =Number(id);
    const movie = film.find((elem) => elem.id ===idmovie);
  return (
    <>
    <div className='navBack'>
        <Link to="/">
        <Button className='btnBack' variant="outline-success" style={{color:"yellow"}}>GO BACK TO HOME PAGE</Button>
        </Link>
    </div>
    <div className='cont'>
        <div className='detaillesFilm'>
            <div className='poster'>
                <img className='image' src={movie.posterURL} alt={movie.posterURL}/>
            </div>
            <div className='info-right'>
                <ul>
                    <li><h4 className='titleFilm'>  {movie.title} </h4> <h4> {movie.Datesortie} </h4><br></br></li>
                    <li><h4> Genre :  </h4>   {movie.Genre} <br></br> </li>
                    <li><h4>Duree :</h4>  {movie.duree} <br></br> </li>
                    <li><h4> Qualite:</h4>  {movie.Qualite} <br></br> </li>
                    <li>
                    <div className="description"><h4>Synopsis : </h4><p>{movie.description}</p></div></li>
                </ul>
            </div>
        </div>
        <div className='video-content' >
            <div className='center-container'>
                <p>
                <iframe title="YouTube video player" src={movie.videoURL} width="1000" height="800" frameBorder="0" allowFullScreen="allowfullscreen">
                </iframe>

                </p>
            </div>

        </div>
    </div>
    </>
  )
}

export default MovieTrailer