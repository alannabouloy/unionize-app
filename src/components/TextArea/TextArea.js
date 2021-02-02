import React from 'react'
import UserContext from '../../contexts/UserContext'
import './TextArea.css'

export default function TextArea(props){
    const context = React.useContext(UserContext)
    return (
        <div className='textarea'>
            <div className='label'>
                <label htmlFor='comment'>
                    Comment:
                </label>
            </div>
            <div className='input'>
                <textarea id='comment' name='comment' onChange={e => context.handleCommentChange(e)} required></textarea>
            </div>
        </div>
    )
}