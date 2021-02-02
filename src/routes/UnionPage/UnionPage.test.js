import React from 'react'
import ReactDOM from 'react-dom'
import UserContext from '../../contexts/UserContext'
import UnionPage from './UnionPage'

it('renders', () => {

    const value = {}

    const div = document.createElement('div')

    ReactDOM.render(
        <UserContext.Provider value={value}>
                <UnionPage/>
        </UserContext.Provider>, div)

    ReactDOM.unmountComponentAtNode(div)
})