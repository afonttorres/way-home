import axios from 'axios';
const baseUrl = `http://localhost:8080`;

export const housingService = {
    getAllHousings() {
        const housings = axios.get(`${baseUrl}/housings`).then(res => {
            return res.data;
        })
        return housings;
    },
    getSingleHousing(id){
        const housing = axios.get(`${baseUrl}/housings/${id}`).then(res =>{
            return res.data;
        })
        return housing;
    },
    getSearch(search){
        const suggestions = axios.get(`${baseUrl}/housings?search=${search}`).then(res =>{
            return res.data;
        })
        return suggestions;
    }

}