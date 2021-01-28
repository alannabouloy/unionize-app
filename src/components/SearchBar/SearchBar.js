import React from 'react'
import './SearchBar.css'

export default function SearchBar(props){
    return(
        <div className='js-search'>
            <div className='label'>
                <label htmlFor='search-bar'>
                    Enter a search term:
                </label>
            </div>
            <div className='input'>
                <input id='search-bar' type='text' placeholder='Search something...'/>
            </div>
        </div>
    )
}