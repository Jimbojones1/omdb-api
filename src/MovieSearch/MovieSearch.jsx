import { useState } from 'react'

export default function MovieSearch(){

	const [movieName, setMovieName] = useState('')

	function handleChange(e){
		setMovieName(e.target.value)
	}

	return (
		<form>
			<input type='text' placeholder='Search Movie' value={movieName} onChange={handleChange}/>
			<button>Search Movie</button>
		</form>
	)
}