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
    }
}