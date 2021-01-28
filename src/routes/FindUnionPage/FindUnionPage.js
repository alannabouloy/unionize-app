import React, { Component } from 'react'
import SearchForm from '../../components/SearchForm/SearchForm'
import UnionList from '../../components/UnionList/UnionList'
import './FindUnionPage.css'

export default class FindUnionPage extends Component {
    state = {
        industry: '',
        search: '',
        pg: 1,
    }



    render(){

        let industries = [{industry: "I1"}, {industry: "I2"}, {industry: 'I3'}]
        let unions = [
            {
                name: 'union1',
                industry: 'I1',
                desc: 'this is a description',
                webURL: 'http://fakelink.com'
            }, 
            {
                name: 'union2', 
                industry:'I2', 
                desc:'this is a description', 
                webURL:'http://fakelink.com'
            },
            {
                name: 'union3',
                industry: 'I3',
                desc:'this is a description',
                webURL:'http://fakelink.com'
            },
            {
                name:'union4',
                industry:'I1',
                desc:'this is a description',
                webURL: 'http://fakelink.com'
            },
            {
                name:'union5',
                industry: 'I2',
                desc: 'this is a description',
                webURL:'http://fakelink.com'
            }
        ]
        return(
            <section className='find-union-page'>
                <SearchForm industries={industries}/>
                <UnionList unions={unions}/>
            </section>
        )
    }
}