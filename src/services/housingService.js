import axios from 'axios';
const baseUrl = `https://62d7c5d249c87ff2af3c821c.mockapi.io`;

export const housingService = {
    getAllHousings() {
        const housings = axios.get(`${baseUrl}/housing`).then(res => {
            return res.data;
        })
        return housings;
    },
    getSingleHousing(id){
        const housing = axios.get(`${baseUrl}/housing/${id}`).then(res =>{
            return res.data;
        })
        return housing;
    },
    getSearch(search){
        const suggestion = axios.get(`${baseUrl}`).then(res=>{
            return res.data;
        })
        return suggestion;
    }
}