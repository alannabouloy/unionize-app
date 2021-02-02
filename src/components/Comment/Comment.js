import React from 'react'
import './Comment.css'

export default function Comment(props){
    return(
        <li>
            <h4>{props.name}</h4>
            <p>{props.comment}</p>
            <p>{props.date}</p>
        </li>
    )
}