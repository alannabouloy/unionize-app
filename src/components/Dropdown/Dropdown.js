import React from 'react'
import './Dropdown.css'

export default function Dropdown(props){
    const industries = props.industries.map((industry, i) => <option key={i} value={industry.industry}>{industry.industry}</option>)
    return(
        <div className='js-drop'>
            <div className='label'>
                <label htmlFor='dropdown'>
                    Filter by Industry:
                </label>
            </div>
            <div className='input'>
                <select id='dropdown'>
                    {industries}
                </select>
            </div>
        </div>
     )
}