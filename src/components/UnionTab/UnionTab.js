import React from 'react'
import './UnionTab.css'


export default function UnionTab(props){
    return(
        <a href={props.union.webURL} alt={`link to ${props.union.name} site`} target='blank'>
            <div className='union'>
                <h3>{props.union.name}</h3>
                <p>{props.union.desc}</p>
            </div>
        </a>
                    
    )
}