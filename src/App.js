import './App.css';
import MovieGallery from './Components/Gallery/gallery';
import MovieItem from './Components/Gallery/movieItem';
import Header from './Components/Header/header';
import EditPage from './Components/EditPage/editPage';
import AddMoviePage from './Components/AddingPage/addPage';
import { Routes, Route, NavLink } from 'react-router-dom';
import Privacy from './Components/Privacy/privacy';
import CopyRight from './Components/Copyright/copyRight';


function App() {
  return (
    <div className="App">
      <nav className='menue'>
          
        <p><span id='letter'>P</span> <i class="fa-solid fa-clapperboard-play" id='popcornicon'/>  P C <i class="fa-solid fa-clapperboard-play" id='popcornicon'/>  R N  <span id='letter'>T</span> i m e <i class="fa-solid fa-clapperboard-play" id='popcornicon2'/><i class="fa-solid fa-clapperboard-play" id='popcornicon2'/><i class="fa-solid fa-clapperboard-play" id='popcornicon2'/></p>
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/Movies">See All Movies</NavLink>
        <NavLink to="/AddMoviePage">Add New Movie</NavLink>
        <NavLink to="/Privacy">Privacy</NavLink>
      </nav>

      <Routes>
        <Route></Route>
        <Route path='/Movies' element={<MovieGallery />} />
        <Route path="/" element={<Header />} />
        <Route path="/:id" element={<MovieItem />} />
        <Route path="/Privacy" element={<CopyRight />} />
        <Route path="/EditPage/:id" element={<EditPage />} />
        <Route path="/AddMoviePage" element={<AddMoviePage />} />
      </Routes>
      <Privacy></Privacy>

    </div>
  );
}

export default App;
