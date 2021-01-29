import React, { Component } from 'react'
import ApiService from '../services/api-service'

const UserContext = React.createContext({
    error: null,
    industry: '',
    search: '',
    industries: [],
    results: {},
    pageNeighbors: 0,
    currentPage:1,
    setError: () => {},
    clearError: () => {},
    getIndustries: () => {},
    getUnions: () => {},
    getUnionsByIndustry: () => {},
    handleDropdownChange: () => {},
    handleSearchBarChange: () => {},
    onSearchSubmit: () => {},
    handleMoveLeft: () => {},
    handleMoveRight: () => {},
    handleClick: () => {},
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
            },
            pageNeighbors: 0,
            currentPage: 1,
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
            this.setState({currentPage: page})
        })
    }

    getUnionsByIndustry = (page, industry, search) => {
        ApiService.getUnionsByIndustry(page, industry, search)
        .then(res => {
            const results = res
            this.setState({ results })
            this.setState({currentPage: page})
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

    checkAndClear = () => {
        if(document.getElementById('dropdown').value === ''){
            this.setState({industry: ''})
        }
        if(document.getElementById('search-bar').value === ''){
            this.setState({search: ''})
        }
    }

    onSearchSubmit = ev => {
        ev.preventDefault()
        this.checkAndClear()
        const {industry, search} = this.state
        this.clearForm()
        if(industry){
            this.getUnionsByIndustry(1, industry, search)
        } else {
            this.getUnions(1, search)
        }
    }

    handleMoveLeft = ev => {
        ev.preventDefault()
        this.goToPage(this.state.currentPage - (this.state.pageNeighbors * 2) - 1)
    }

    handleMoveRight = ev => {
        ev.preventDefault()
        this.goToPage(this.state.currentPage + (this.pageNeighbors * 2) + 1)
    }

    handleClick = page => evt => {
        evt.preventDefault()
        this.goToPage(page)
    }

    goToPage = page => {
        const currentPage = Math.max(0, Math.min(page, this.state.results.pageCount))
        this.setState({currentPage})
        if(this.state.industry){
            this.getUnionsByIndustry(currentPage, this.state.industry, this.state.search)
        }
        else{
            this.getUnions(currentPage, this.state.search)
        }

    }


    render(){
        const value = {
            error: this.state.error,
            industry: this.state.industry,
            industries: this.state.industries,
            results: this.state.results,
            search: this.state.search,
            pageNeighbors: this.state.pageNeighbors,
            currentPage: this.state.currentPage,
            setError: this.setError,
            clearError: this.clearError,
            getIndustries: this.getIndustries,
            getUnions: this.getUnions,
            getUnionsByIndustry: this.getUnionsByIndustry,
            handleDropdownChange: this.handleDropdownChange,
            handleSearchBarChange: this.handleSearchBarChange,
            onSearchSubmit: this.onSearchSubmit,
            handleMoveLeft: this.handleMoveLeft,
            handleMoveRight: this.handleMoveRight,
            handleClick: this.handleClick,
        }

        return (
            <UserContext.Provider value={value}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}