import React from 'react'
import ReactDOM from 'react-dom'
import UserContext from '../../contexts/UserContext'
import {BrowserRouter} from 'react-router-dom'

import UnionList from './UnionList'

it('renders', () => {
    const value = {
        results: {
            unions: [{name: 'union1', desc: 'a union', webURL: 'http://alink.com'}]
        }
    }
    const div = document.createElement('div')

    ReactDOM.render(
        <UserContext.Provider value={value}>
            <BrowserRouter>
                <UnionList/>
            </BrowserRouter>
        </UserContext.Provider>, div)

    ReactDOM.unmountComponentAtNode(div)
})