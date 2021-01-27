import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Header.css'

export default function Header(props){
    return(
        <header className='header'>
            <div className='heading'>
                <h1>Unionize</h1>
            </div>
            <div className='break'>
            </div>
            <NavBar/>
        </header>
    )
}