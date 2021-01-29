import React, { Component } from 'react'
import SearchForm from '../../components/SearchForm/SearchForm'
import UnionList from '../../components/UnionList/UnionList'
import './FindUnionPage.css'

export default class FindUnionPage extends Component {
    render(){
        return(
            <section className='find-union-page'>
                <SearchForm/>
                <UnionList/>
            </section>
        )
    }
}