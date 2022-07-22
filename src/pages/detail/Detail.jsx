import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { VDetail } from '../../views/VDetail/VDetail';
import { housingService } from '../../services/housingService';
import { matchService } from '../../services/matchService';
import { specsService } from '../../services/specsService';

export const Detail = () => {

    const { id } = useParams();
    const [housing, setHousing] = useState();
    const [specs, setSpecs] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (!id) return;
        getData();
    }, [id])

    useEffect(() => {
        if (!specs) return;
    }, [specs])


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

    const match = (housingId) => {
        let req = { housingId: housingId, userId: 1 };
        postMatch(req);
    }

    const postMatch = (req) => {
        matchService.postMatch(req).then(res => {
            if (!res) return;
            let s = 3;
            let ms = s * 1000;
            setTimeout(() => {
                navigate('/matches');
            }, ms);
        })
    }

    return (
        <>
            {specs ? <VDetail housing={housing} specs={specs} match={match} /> : null}
        </>
    )
}