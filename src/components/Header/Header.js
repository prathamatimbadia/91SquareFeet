import React from 'react'
import './Header.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import logo from '../../assets/images/Union 625.svg'


const Header = () => {
    let navItemsLeft = [{ id: 1, name: 'Movies' }, { id: 2, name: 'TV Show' }, { id: 3, name: 'People' }, { id: 4, name: 'More' }]
    let navItemsRight = [{ id: 1, name: 'Log In' }, { id: 2, name: 'Joine Us' }]

    return (
        <div className='header'>
            <img alt='logo' src={logo} className='header__logo'></img>
            <div className='header__nav'>
                <ul className='header__leftNav navbar'>
                    {navItemsLeft.map((item) => (
                        <li key={item.id}>{item.name}</li>)
                    )}
                </ul>
            </div>
            <div className='header__nav'>
                <ul className='header__rightNav navbar'>
                    {navItemsRight.map((item) => (<li key={item.id}>{item.name}</li>))}
                </ul>
                <SearchOutlinedIcon className='header__search' />
            </div>

        </div >
    )
}

export default Header