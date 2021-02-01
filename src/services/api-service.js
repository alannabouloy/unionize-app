import config from '../config'

const ApiService = {
    getIndustries(){
        //get all industries
        return fetch(`${config.API_ENDPOINT}/industries`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${config.API_TOKEN}`
            }
        })
        .then(res =>
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },

    getUnions(page, search){
        if(search){
            return fetch(`${config.API_ENDPOINT}/unions/?page=${page}&q=${search}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${config.API_TOKEN}`
                }
            })
            .then(res =>
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
        }

        return fetch(`${config.API_ENDPOINT}/unions/?page=${page}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${config.API_TOKEN}`
            }
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
        //get page of unions with option to filter by search term
    },

    getUnionsByIndustry(page, industry, search){
        if(search){
            return fetch(`${config.API_ENDPOINT}/unions/industry/?page=${page}&industry=${industry}&q=${search}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${config.API_TOKEN}`
                }
            })
            .then(res => 
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
        }

        return fetch(`${config.API_ENDPOINT}/unions/industry/?page=${page}&industry=${industry}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${config.API_TOKEN}`
            }
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
        //get page of unions filtered by industry with option to filter by search term
    }
}

export default ApiService