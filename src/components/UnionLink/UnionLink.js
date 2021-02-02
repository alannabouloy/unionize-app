import React from 'react'
import './UnionLink.css'

export default function UnionLink(props){
    return (
        <div className='union-link'>
            <a href={props.link} target='blank' alt='link to union website'>
                Click here to visit their website!
            </a>
        </div>
    )
}