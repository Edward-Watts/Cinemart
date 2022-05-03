import React, {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navigation from './components/navigation/navigation';
import Home from './views/home/home';
import Genres from './views/genres/genres';


function App() {
  const baseURL = process.env.REACT_APP_BASE_URL
  console.log(baseURL)
  const genresUrl = `${baseURL}/v1/anime?page=1`
  const countryUrl = ''
  const [genres, setGenres] = useState(null);

  let options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + process.env.REACT_APP_API_KEY,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    } 
  }

  useEffect(() => {
    fetch(genresUrl, options)
    .then(response => response.json())
    .then(response => {
      console.log('printing-------', response.data)
      if(response) {
        setGenres(response.data)
      }
      console.log('printing genres--------', genres)
    })
    .catch(error => console.error(error))
  }, [genresUrl])

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/genres' element={<Genres/>} />
      </Routes>
    </div>
  );
}

export default App;
