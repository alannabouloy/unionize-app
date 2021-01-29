import React, { Component } from 'react'
import ApiService from '../services/api-service'

const UserContext = React.createContext({
    error: null,
    industry: '',
    search: '',
    industries: [],
    results: {},
    setError: () => {},
    clearError: () => {},
    getIndustries: () => {},
    getUnions: () => {},
    getUnionsByIndustry: () => {},
    handleDropdownChange: () => {},
    handleSearchBarChange: () => {},
    onSearchSubmit: () => {},
})

export default UserContext

export class UserProvider extends Component {
    constructor(props){
        super(props)
        const state = {
            error: null,
            industry: '',
            search: '',
            industries: [],
            results: {
                count: 0,
                pageCount: 0,
                unions: []
            }
        }

        this.state = state;
    }

    setError = error => {
        console.error(error)
        this.setState({error})
    }

    clearError = () => {
        this.setState({ error: null })
    }

    getIndustries = () => {
        ApiService.getIndustries()
            .then(res => {
                const industries  = res
                this.setState({ industries })
            })
    }

    getUnions = (page, search) => {
        ApiService.getUnions(page, search)
        .then(res => {
            const results = res
            this.setState({ results })
            
        })
    }

    getUnionsByIndustry = (page, industry, search) => {
        ApiService.getUnionsByIndustry(page, industry, search)
        .then(res => {
            const results = res
            this.setState({ results })
            console.log('state set to: ', results)
        })
    }

    handleDropdownChange = ev => {
        const industry = ev.target.value
        this.setState({ industry })
    }

    handleSearchBarChange = ev => {
        const search = ev.target.value
        this.setState({ search })
    }

    clearForm = () => {
        document.getElementById('search-bar').value = ''
        document.getElementById('dropdown').value = ''
        this.setState({ search: '' })
        this.setState({ industry: ''})
    }

    onSearchSubmit = ev => {
        ev.preventDefault()
        const {industry, search} = this.state
        this.clearForm()
        if(industry){
            this.getUnionsByIndustry(1, industry, search)
        } else {
            this.getUnions(1, search)
        }
    }

    render(){
        const value = {
            error: this.state.error,
            industry: this.state.industry,
            industries: this.state.industries,
            results: this.state.results,
            search: this.state.search,
            setError: this.setError,
            clearError: this.clearError,
            getIndustries: this.getIndustries,
            getUnions: this.getUnions,
            getUnionsByIndustry: this.getUnionsByIndustry,
            handleDropdownChange: this.handleDropdownChange,
            handleSearchBarChange: this.handleSearchBarChange,
            onSearchSubmit: this.onSearchSubmit,
        }

        return (
            <UserContext.Provider value={value}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}