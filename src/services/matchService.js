import axios from 'axios';
const baseUrl = `http://localhost:8080`;

export const matchService = {
    getAllMatches() {
        const matches = axios.get(`${baseUrl}/matches`).then(res => {
            return res.data;
        })
        return matches;
    },
    getUserMatches(id) {
        const matches = axios.get(`${baseUrl}/users/${id}/matches`).then(res => {
            return res.data;
        })
        return matches;
    },
    postMatch(req){
        const match = axios.post(`${baseUrl}/matches`, req).then(res =>{
            return res.data;
        })
        return match;
    }
}