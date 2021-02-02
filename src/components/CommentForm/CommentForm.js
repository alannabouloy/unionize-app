import React from 'react'
import SubHeading from '../SubHeading/SubHeading'
import SubmitButton from '../SubmitButton/SubmitButton'
import TextArea from '../TextArea/TextArea'
import TextInput from '../TextInput/TextInput'
import './CommentForm.css'

export default function CommentForm(props){
    return (
        <form id='comment-form'>
            <SubHeading text='Leave a Comment!'/>
            <TextInput/>
            <TextArea/>
            <SubmitButton text='Submit'/>
        </form>
    )
}