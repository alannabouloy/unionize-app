import React from 'react'
import UserContext from '../../contexts/UserContext'
import Dropdown from '../Dropdown/Dropdown'
import SearchBar from '../SearchBar/SearchBar'
import SearchButton from '../SearchButton/SearchButton'
import './SearchForm.css'

export default function SearchForm(props){
    const context = React.useContext(UserContext)

    return(
        <form id='js-search-form' onSubmit={e => context.onSearchSubmit(e)}>
            <div className='search-elements'>
                <Dropdown/>
                <SearchBar/>
            </div>
            <SearchButton/>
        </form>
    )
}