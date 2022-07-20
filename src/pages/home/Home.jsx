import { useState, useEffect } from "react";
import { Nav } from "../../components/nav/Nav";
import { VHome } from "../../views/VHome/VHome";
import { Footer } from '../../components/footer/Footer';
import { housingService } from "../../services/housingService";

export const Home = () => {

    const [housings, setHousings] = useState();

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        housingService.getAllHousings().then(res => {
            if (!res) return;
            setHousings(res);
        })
    }

    return (
        <>
            {housings ? <VHome housings={housings} /> : null}
            <Footer />
        </>

    )
}