import React from 'react'
import './Banner.css'

const Banner = () => {
    let title = 'Welcome to the weekend watch'
    let subTitle = 'Millions of Movies, TV Shoes and many more'
    return (
        <div className='banner'>
            <p className='banner__title'>{title}</p>
            <p className='banner__subtitle'>{subTitle}</p>
            <input className='banner__searchBar' type="text" placeholder="Search for movie, tv shoes, and person"></input>
            <button className='banner__searchButton' type="submit">Search</button>
            <div className='mark'></div>
        </div>
    )
}

export default Banner