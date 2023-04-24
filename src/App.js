import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './Component/MovieList';
import {Film} from './Component/Data'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieTrailer from './Component/MovieTrailer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<MovieList film = {Film}></MovieList>} ></Route>
      <Route path="/:id" element={<MovieTrailer film = {Film}/>}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
