import React, { Component } from 'react'
import CommentForm from '../../components/CommentForm/CommentForm'
import CommentSection from '../../components/CommentSection/CommentSection'
import Description from '../../components/Description/Description'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import SubHeading from '../../components/SubHeading/SubHeading'
import UnionLink from '../../components/UnionLink/UnionLink'
import ApiService from '../../services/api-service'
import './UnionPage.css'

export default class UnionPage extends Component {
    state = {
        union: {
            id: 0,
            name: '',
            industry: '',
            desc: '',
            webURL: ''
        }, 

        comments: []
    }
    async componentDidMount() {
        const { unionId } = this.props.match.params 
       
        let union = await ApiService.getUnionById(unionId)

        const { industry } = await ApiService.getIndustryById(union.industry)

        union = {
            ...union,
            industry
        }

        this.setState({union})

        const comments = await ApiService.getComments(union.name)
        
        this.setState({comments})
    }

    render(){
        return(
            <section className='union-page'>
                <SectionHeading className='union-head' text={this.state.union.name}/>
                <SubHeading text={`${this.state.union.industry} Industry`}/>
                <Description text={this.state.union.desc}/>
                <UnionLink link={this.state.union.webURL}/>
                <CommentSection comments={this.state.comments}/>
                <CommentForm/>   
            </section>
        )
    }
}