import React from 'react'
import ReactDOM from 'react-dom'

import SearchButton from './SearchButton'

it('renders', () => {
    const div = document.createElement('div')

    ReactDOM.render(<SearchButton/>, div)

    ReactDOM.unmountComponentAtNode(div)
})