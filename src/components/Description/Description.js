import React from 'react'
import './Description.css'

export default function Description(props){
    return (
        <div className='description'>
            <p>{props.text}</p>
        </div>
    )
}