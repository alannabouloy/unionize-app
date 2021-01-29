import React from 'react'
import ReactDOM from 'react-dom'
import UserContext from '../../contexts/UserContext'
import { BrowserRouter } from 'react-router-dom'


import PageLink from './PageLink'

it('renders', () => {

    const value = {
        currentPage: 1,
        handleClick: () => {},
    }

    const div = document.createElement('div')

    ReactDOM.render(
        <UserContext.Provider value={value}>
            <BrowserRouter>
                <PageLink page={1}/>
            </BrowserRouter>
        </UserContext.Provider>, div)

    ReactDOM.unmountComponentAtNode(div)
})