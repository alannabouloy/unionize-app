// eslint-disable-next-line import/no-anonymous-default-export
export default {
    API_ENDPOINT: (process.env.NODE_ENV === 'production') ? 'https://dry-reaches-87351.herokuapp.com/api' : 'http://localhost:8000/api',
    API_TOKEN: (process.env.NODE_ENV === 'production') ? process.env.REACT_APP_API_TOKEN : 'test-token'
}