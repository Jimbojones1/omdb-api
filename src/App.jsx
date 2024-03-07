import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieSearch from './MovieSearch/MovieSearch'
import MovieInfo from './MovieInfo/MovieInfo'


function App() {
  const [movieData, setMovieData] = useState({})

  useEffect(() => {

    const apiEndPoint = `http://www.omdbapi.com/?apikey=98e3fb1f&t=Eraserhead`


    async function getMovie(){
      try {
        // by default fetch makes http get requests, to some endpoint
        const response = await fetch(apiEndPoint)
        // we have to change the response from json into a javascript object!
        const data = await response.json(); // <- .json() method comes from fetch
        // and changes the JSON into a javascript object we can work with!

        console.log(data, ' from omdb!')
        // We usually like 9/10 want to store the response from the api call
        // in state, so other components can access that data in order to render it 
        // out!
        setMovieData(data)

      } catch(err){
        console.log(err)
      }
    }

    // Don't forget to call the function
    getMovie()

    console.log('useEffect is running')
  }, []); // Empty dependency array means call the effect once when the components loads onto the dom!

  return (
    <>
   
      <MovieSearch />
      <MovieInfo movie={movieData} />
    </>
  )
}

export default App
