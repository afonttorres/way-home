import axios from 'axios';
const baseUrl = `http://localhost:8080`;

export const specsService = {
    getAllSpecs() {
        const specs = axios.get(`${baseUrl}/specs`).then(res => {
            return res.data;
        })
        return specs;
    },
    getHousingSpecs(id){
        const specs = axios.get(`${baseUrl}/housings/${id}/specs`).then(res =>{
            return res.data;
        })
        return specs;
    }
}