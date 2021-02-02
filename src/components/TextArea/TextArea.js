import React from 'react'
import './TextArea.css'

export default function TextArea(props){
    return (
        <div className='textarea'>
            <div className='label'>
                <label htmlFor='comment'>
                    Comment:
                </label>
            </div>
            <div className='input'>
                <textarea id='comment' name='comment' required></textarea>
            </div>
        </div>
    )
}