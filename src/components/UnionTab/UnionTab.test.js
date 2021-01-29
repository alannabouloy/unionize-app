import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import UnionTab from './UnionTab'

it('renders', () => {
    const union = {
        name: 'union',
        desc: 'a union',
        webURL: 'http://alink.com'
    }

    const div = document.createElement('div')

    ReactDOM.render(
        <BrowserRouter>
            <UnionTab union={union}/>
        </BrowserRouter>, div)

    ReactDOM.unmountComponentAtNode(div)
})