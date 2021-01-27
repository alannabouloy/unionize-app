import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar(props){
    return(
        <div className='navbar'>
                <ul className='navlinks'>
                    <li>
                        <Link to='/'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='/unions'>
                            Find A Union
                        </Link>
                    </li>
                    <li>
                        <Link to='/questions'>
                            FAQ
                        </Link>
                    </li>
                </ul>
            </div>
    )
}