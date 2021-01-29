import React from 'react'
import ReactDOM from 'react-dom'
import UserContext from '../../contexts/UserContext'
import {BrowserRouter} from 'react-router-dom'
import SearchForm from './SearchForm'

it('renders', () => {

    const value = {
        industries: ['I1', 'I2', 'I3', 'I4']
    }

    const div = document.createElement('div')

    ReactDOM.render(
        <UserContext.Provider value={value}>
            <BrowserRouter>
                <SearchForm/>
            </BrowserRouter>
        </UserContext.Provider>, div)

    ReactDOM.unmountComponentAtNode(div)
})