import React, { Component } from 'react'
import ApiService from '../services/api-service'

const UserContext = React.createContext({
    error: null,
    industry: {},
    industries: [],
    results: {},
    setError: () => {},
    clearError: () => {},
    getIndustries: () => {},
    getUnions: () => {},
})

export default UserContext

export class UserProvider extends Component {
    constructor(props){
        super(props)
        const state = {
            error: null,
            industry: {},
            industries: [],
            results: {}
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
            console.log('state set to: ', results)
        })
    }

    render(){
        const value = {
            error: this.state.error,
            industry: this.state.industry,
            industries: this.state.industries,
            results: this.state.results,
            setError: this.setError,
            clearError: this.clearError,
            getIndustries: this.getIndustries,
            getUnions: this.getUnions,
        }

        return (
            <UserContext.Provider value={value}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}