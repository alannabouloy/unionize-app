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
    },

    getUnionById(unionId){
        return fetch(`${config.API_ENDPOINT}/unions/${unionId}`, {
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

    getIndustryById(industryId){
        return fetch(`${config.API_ENDPOINT}/industries/${industryId}`, {
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

    getComments(unionName){
        return fetch(`${config.API_ENDPOINT}/comments/?union=${unionName}`, {
            method: 'GET',
            headers: {
                'Authorization' : `Bearer ${config.API_TOKEN}`
            }
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },

    postComment(unionName, comment){
        const raw = JSON.stringify({
            ...comment,
            unionName
        })

        return fetch(`${config.API_ENDPOINT}/comments`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${config.API_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: raw,
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    }
}

export default ApiService