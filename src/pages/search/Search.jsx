import { VSearch } from "../../views/VSearch/VSearch";
import { Footer } from '../../components/footer/Footer';
import { useState } from "react";

export const Search = () => {

    const [suggestions, setSuggestions] =useState();

    const getSuggestions = (search) =>{

    }

    return (
        <>
            <VSearch suggestions={suggestions} />
            <Footer />
        </>
    )
}

// [
//     {
//     "title": "Ngerong Apartment",
//     "description": "New architecture....",
//     "price": "150",
//     "specs": [
//         "3 beds",
//         "wifi",
//         "pool",
//         "garden"
//     ],
//     "isActive": true,
//     "category": "apartment",
//     "createdAt": "20/07/2022",
//     "isShareable": true,
//     "isPetFriendly": true,
//     "animal": "frog",
//     "imgUrl1": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     "imgUrl2": "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     "imgUrl3": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80",
//     "location": "location 1",
//     "ratio": 3,
//     "id": "1"
// },
// {
//     "title": "Ngerong Apartment",
//     "description": "New architecture....",
//     "price": "150",
//     "specs": [
//         "3 beds",
//         "wifi",
//         "pool",
//         "garden"
//     ],
//     "isActive": true,
//     "category": "apartment",
//     "createdAt": "20/07/2022",
//     "isShareable": true,
//     "isPetFriendly": true,
//     "animal": "worm",
//     "imgUrl1": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     "imgUrl2": "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     "imgUrl3": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80",
//     "location": "location 1",
//     "ratio": 3,
//     "id": "2"
// },
// {
//     "title": "Ngerong Apartment",
//     "description": "New architecture....",
//     "price": "150",
//     "specs": [
//         "3 beds",
//         "wifi",
//         "pool",
//         "garden"
//     ],
//     "isActive": true,
//     "category": "apartment",
//     "createdAt": "20/07/2022",
//     "isShareable": true,
//     "isPetFriendly": true,
//     "animal": "dog",
//     "imgUrl1": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     "imgUrl2": "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     "imgUrl3": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80",
//     "location": "location 1",
//     "ratio": 3,
//     "id": "3"
// },
// {
//     "title": "Ngerong Apartment",
//     "description": "New architecture....",
//     "price": "150",
//     "specs": [
//         "3 beds",
//         "wifi",
//         "pool",
//         "garden"
//     ],
//     "isActive": true,
//     "category": "apartment",
//     "createdAt": "20/07/2022",
//     "isShareable": true,
//     "isPetFriendly": true,
//     "animal": "hippo",
//     "imgUrl1": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     "imgUrl2": "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     "imgUrl3": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80",
//     "location": "location 1",
//     "ratio": 3,
//     "id": "4"
// }
// ]