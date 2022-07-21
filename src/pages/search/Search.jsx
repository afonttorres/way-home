import { VSearch } from "../../views/VSearch/VSearch";
import { Footer } from '../../components/footer/Footer';
import { useEffect, useState } from "react";
import { SearchForm } from "../../components/forms/SearchForm/SearchForm";
import axios from "axios";

export const Search = () => {
    const [data, setData] = useState([{ "title": "Ngerong Apartment", "description": "New architecture....", "price": "150", "specs": ["3 beds", "wifi", "pool", "garden"], "isActive": true, "category": "apartment", "createdAt": "20/07/2022", "isShareable": true, "isPetFriendly": true, "animal": "cat", "imgUrl1": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", "imgUrl2": "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", "imgUrl3": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80", "location": "location 1", "ratio": 3, "id": "1" }, { "title": "Ngerong Apartment", "description": "New architecture....", "price": "150", "specs": ["3 beds", "wifi", "pool", "garden"], "isActive": true, "category": "apartment", "createdAt": "20/07/2022", "isShareable": true, "isPetFriendly": true, "animal": "cat", "imgUrl1": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", "imgUrl2": "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", "imgUrl3": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80", "location": "location 1", "ratio": 3, "id": "2" }]);
    
    const [suggestions, setSuggestions] = useState([]);
    const [searcher, setSearcher] = useState("");

    const getSuggestions = async () => {
        await axios.get("https://62d7c5d249c87ff2af3c821c.mockapi.io/housing")
            .then(response => {
                setSuggestions(response.data);
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleChange = (e) => {
        setSearcher(e.target.value);
        console.log("Results: " + e.target.value);
        filter(e.target.value);
    };

    const filter = (search) => {
        const resultado = data.filter((card) => {
            if (card.title.toLowerCase().includes(search.toLowerCase())
                || (card.description.toLowerCase().includes(search.toLowerCase))
                || (card.category.toLowerCase().includes(search.toLowerCase))
                || (card.location.toLowerCase().includes(search.toLowerCase))
                || (card.price.includes(search.toLowerCase))
            ) return card;
            setSuggestions(resultado)
        })
    };

    useEffect(() => {
        getSuggestions();
    }, [])

    return (
        <>
            <form action="" className="search-form col">
                <input placeholder="Search here..." value={searcher} onChange={handleChange} />
            </form>
            <VSearch suggestions={suggestions} />
            <Footer />
        </>
    )
}