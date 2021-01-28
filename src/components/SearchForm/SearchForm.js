import React from 'react'
import Dropdown from '../Dropdown/Dropdown'
import SearchBar from '../SearchBar/SearchBar'
import SearchButton from '../SearchButton/SearchButton'
import './SearchForm.css'

export default function SearchForm(props){
    return(
        <form id='js-search-form'>
            <Dropdown industries={props.industries}/>
            <SearchBar/>
            <SearchButton/>
        </form>
    )
}