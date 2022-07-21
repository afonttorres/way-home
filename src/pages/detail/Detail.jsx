import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { VDetail } from '../../views/VDetail/VDetail';
import { housingService } from '../../services/housingService';
import { specsService } from '../../services/specsService';

export const Detail = () => {

    const { id } = useParams();
    const [housing, setHousing] = useState();
    const [specs, setSpecs] = useState();

    useEffect(() => {
        if (!id) return;
        getData();
    }, [id])

    useEffect(()=>{
        if(!specs) return;
    },[specs])


    const getData = () => {
        housingService.getSingleHousing(id).then(res => {
            if (!res) return;
            setHousing(res);
            getSpecs();
        })
    }

    const getSpecs = () => {
        specsService.getHousingSpecs(id).then(res => {
            if (!res) return;
            setSpecs(res);
        })
    }

    return (
        <>
            {specs ? <VDetail housing={housing} specs={specs} /> : null}
        </>
    )
}