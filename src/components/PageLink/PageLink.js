import React from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'
import './PageLink.css'

export default function PageLink(props){
    const context = React.useContext(UserContext)
    
    if(props.page === props.left) {
        return(
            <li className='page-item'>
                <Link to='#' onClick={context.handleMoveLeft}>
                    <span>&laquo;</span>
                    <span className='nav-button'>Previous</span>
                </Link>
            </li>
        )
    }

    if(props.page === props.right){
        return(
            <li className='page-item'>
                <Link to='#' onClick={context.handleMoveRight}>
                    <span>&raquo;</span>
                    <span className='nav-button'>Next</span>
                </Link>
            </li>
        )
    }

    return(
        <li className={`page-item${ context.currentPage === props.page ? ' active': ''}`}>
            <Link className='page-link' to='#' onClick={context.handleClick(props.page)}> 
                {props.page}
            </Link>
        </li>
    )

}