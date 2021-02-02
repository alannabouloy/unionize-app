import React from 'react'
import './TextInput.css'

export default function TextInput(props){
    return (
        <div className='textinput'>
            <div className='label'>
                <label htmlFor='name'>
                    Name:
                </label>
            </div>
            <div className='input'>
                <input id='name' name='name' type='text' placeholder='Jane Doe' required/>
            </div>
        </div>
    )
}