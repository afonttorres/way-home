import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { VDetail } from '../../views/VDetail/VDetail';
import { housingService } from '../../services/housingService';

export const Detail = () => {

    const [housing, setHousing] = useState();
    const { id } = useParams();

    useEffect(() => {
        if (!id) return;
        getData();
    }, [id])


    const getData = () => {
        housingService.getSingleHousing(id).then(res => {
            if (!res) return;
            setHousing(res);
        })
    }

    return (
        <>
            {housing ? <VDetail housing={housing} /> : null}
        </>
    )
}