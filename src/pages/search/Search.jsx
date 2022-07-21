import { VSearch } from "../../views/VSearch/VSearch";
import { Footer } from '../../components/footer/Footer';
import { useEffect, useState } from "react";
import { housingService } from "../../services/housingService";

export const Search = () => {

    const [search, setSearch] = useState();
    const [suggestions, setSuggestions] = useState([]);

    useEffect(()=>{
    },[suggestions])
    

    const searchData = (data) => {
        getSuggestions(data);
        setSearch(data)
    }

    const getSuggestions = (data) => {
        housingService.getSearch(data).then(res => {
            if (!res) return;
            setSuggestions(res);
        })
    }

    return (
        <>
            <VSearch suggestions={suggestions} searchData={searchData} search={search} />
            <Footer />
        </>
    )
}
