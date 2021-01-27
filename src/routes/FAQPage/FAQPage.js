import React, { Component } from 'react'
import QuestionTab from '../../components/QuestionTab/QuestionTab'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import './FAQPage.css'

export default class FAQPage extends Component {
    render(){
        return(
            <section className='faq-page'>
               <SectionHeading className='faq-heading' text='Frequently Asked Questions'/>
                <div className='questions-block'>
                    <div className='question'>
                        <QuestionTab question='Question 1' answer='This is an answer to the question'/>
                    </div>
                </div>
            </section>
        )
    }
}