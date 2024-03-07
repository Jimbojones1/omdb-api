import { useState } from 'react'

export default function MovieSearch({getSearchTerm}){

	const [movieName, setMovieName] = useState('')

	function handleChange(e){
		setMovieName(e.target.value)
	}

	function handleSubmit(e){
		e.preventDefault(); // stop the browser from making a get request
		getSearchTerm(movieName); // lifting the state up to the app component
	}
	return (
		<form onSubmit={handleSubmit}>
			<input type='text' placeholder='Search Movie' value={movieName} onChange={handleChange}/>
			<button>Search Movie</button>
		</form>
	)
}