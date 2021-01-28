import React from 'react'
import './UnionTab.css'
import { Link } from 'react-router-dom'

export default function UnionTab(props){
    return(
        <Link to={props.union.webURL}>
            <div className='union'>
                <h3>{props.union.name}</h3>
                <p>{props.union.desc}</p>
            </div>
        </Link>
                    
    )
}