import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import emptyVideo from "./empty.mp4";

const MovieCard = ({Addmovies,setShow,handleclose}) => {


    const [title,setTitleNewMovie]= useState("");
    const [description,setDescriptionNewMovie]=useState("");
    const [posterURL,setPosterURLNewMovie]= useState("");
    const [rating,setRatingNewMovie]= useState("");
    const [videoURL,setVideoURLNewMovie]= useState("");
    const [origine,setOrigineNewMovie]=useState("");
    const [datesortie,setDatesortieNewMovie]= useState("");
    const [genre,setGenreNewMovie]= useState("");
    const [dure,setDureNewMovie]= useState("");
    const [qualite,setQaualiteNewMovie]= useState("");

    const handlerSubmit = (e) =>
    {e.preventDefault();
        Addmovies(title,description,posterURL,videoURL,origine,datesortie,genre,dure,qualite,rating);
        setShow(false);

    }



  const verifPosterURL=(ver)=>{
    if (!ver.includes("https://"))
    {setPosterURLNewMovie("https://png.pngtree.com/background/20210710/original/pngtree-film-film-poster-background-material-picture-image_1055676.jpg");}
    else {setPosterURLNewMovie(ver);
    }
    }

    const verifvideoURL=(ver)=>{
        if (!ver.includes("https://"))
        {setVideoURLNewMovie({emptyVideo});}
        else {setVideoURLNewMovie(ver);
        }
    }
  return (
    <>
     <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>titre film</Form.Label>
        <Form.Control type="text"  onChange={e =>setTitleNewMovie(e.target.value)} />
        <Form.Label>Origine du film</Form.Label>
        <Form.Control type="text"  onChange={e =>setOrigineNewMovie(e.target.value)} />
        <Form.Label>Description du film </Form.Label>
        <Form.Control type="text"  onChange={e =>setDescriptionNewMovie(e.target.value)} />
        <Form.Label>Qualite du film</Form.Label>
        <select className='Liste'  onChange={e=>setQaualiteNewMovie(e.target.value)} >
               <option value="HD">HD</option>
               <option value="FULL-HD">FULL-HD</option>
               <option value="3D">3D</option>
               <option value="SD">SD</option>
               <option value="HD">HDLight</option>
        </select> <Form.Label>Qualite du film</Form.Label>
        <select className='liste' onChange={e=>setGenreNewMovie(e.target.value)}  >
              <option value="Action">Action</option>
              <option value="Drama">Drama</option>
              <option value="HD">Fction</option>
              <option value="Anime">Anime</option>
        </select> <Form.Label>Qualite du film</Form.Label>
        <select className='liste' onChange={e=>setDatesortieNewMovie(e.target.value)}  >
              <option value="2020">2020</option>
              <option value="2023">2023</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
        </select>

        <Form.Label>dure du film</Form.Label>
        <Form.Control type="text"  onChange={e =>setDureNewMovie(e.target.value)} />
        <Form.Label>url de coverture</Form.Label>
        <Form.Control type="text"  onChange={e =>verifPosterURL(e.target.value)} />
        <Form.Label>bande d'annonce du film</Form.Label>
        <Form.Control type="text"  onChange={e =>verifvideoURL(e.target.value)} />
        <Form.Label>reating</Form.Label>
        <div className='ratting ratting2'>
          <a href='#5' title='Give 5 stars' onClick={()=>setRatingNewMovie("5")}>★</a>
          <a href='#4' title='Give 4 stars' onClick={()=>setRatingNewMovie("4")}>★</a>
          <a href='#3' title='Give 3 stars' onClick={()=>setRatingNewMovie("3")}>★</a>
          <a href='#2' title='Give 2 stars' onClick={()=>setRatingNewMovie("2")}>★</a>
          <a href='#1' title='Give 1 stars' onClick={()=>setRatingNewMovie("1")}>★</a>
        </div>
        </Form.Group>
    </Form>
        <Modal.Footer>
        <Button variant="outline-success" onClick={handleclose}> Annuler </Button>
        <Button variant="outline-success" type="submit"onClick={handlerSubmit}> Add Movie </Button>
      </Modal.Footer>

       
     
    
    </>
  )
}

export default MovieCard