import React, { Component } from 'react'
import SearchForm from '../../components/SearchForm/SearchForm'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import Pagination from '../../components/Pagination/Pagination'
import UnionList from '../../components/UnionList/UnionList'
import './FindUnionPage.css'

export default class FindUnionPage extends Component {
    render(){
        return(
            <section className='find-union-page'>
                <SectionHeading className='find-union-heading' text='Find A Union'/>
                <SearchForm/>
                <UnionList/>
                <Pagination/>
            </section>
        )
    }
}