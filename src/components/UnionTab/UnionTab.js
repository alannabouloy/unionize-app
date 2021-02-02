import React from 'react'
import { Link } from 'react-router-dom'
import './UnionTab.css'


export default function UnionTab(props){
    return(
        <Link to={`/union/${props.union.id}`}>
            <div className='union'>
                <h3>{props.union.name}</h3>
                <p>{props.union.desc}</p>
            </div>
        </Link>
                    
    )
}