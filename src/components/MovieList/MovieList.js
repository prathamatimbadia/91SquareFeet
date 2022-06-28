import React, { useEffect, useState } from 'react'
import './MovieList.css'


const MovieList = () => {
    const [movieList, setMovieList] = useState()
    const getMovieList = async () => {
        const response = await fetch("APICALL")
            .catch((err) => {
                console.log("Err: ", err);
            });
        return response.data;
    }

    useEffect(() => {
        setMovieList(getMovieList())
    }, [])

    return (
        <div className='movieList'>MovieList</div>
    )
}

export default MovieList