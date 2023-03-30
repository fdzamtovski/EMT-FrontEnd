import axios from "axios";

const instance = axios.create({
    baseURL: 'https://emt-lab1and2.herokuapp.com/',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
})

export default instance;