import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import { moviedata } from './data';
import MovieList from './components/movieList/MovieList';
import Filter from './components/filter/Filter'
import AddMovie from './components/addMovie/AddMovie';

function App() {
  const [movies, setMovies] = useState(moviedata)
  const [title, setTitle] = useState("")
  const [rate, setRate] = useState(0)
  const handleChange = (e) =>{
    setTitle(e.target.value)
  }
  const ratingChange =(newRating)=>{
    setRate(newRating)
  }
  const handleAdd = (newMovie) =>{
    setMovies([...movies,newMovie])
  }
  return (
    <div className="App">
      
      <Filter handleChange={handleChange} title={title} ratingChange={ratingChange}/>
     <MovieList  movies={movies.filter(elt => elt.title.toUpperCase().includes(title.toUpperCase()) && (elt.rate >= rate))}/>
     <AddMovie handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
