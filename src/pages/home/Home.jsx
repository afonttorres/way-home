import { useState, useEffect } from "react";
import { VHome } from "../../views/VHome/VHome";
import { Footer } from '../../components/footer/Footer';
import { housingService } from "../../services/housingService";
import { specsService } from "../../services/specsService";


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