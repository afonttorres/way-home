import { useEffect, useState } from 'react';
import { Footer } from '../../components/footer/Footer';
import { matchService } from '../../services/matchService';
import { VMatch } from '../../views/VMatch/VMatch';

export const Match = () => {

    const [matches, setMatches] = useState();

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        matchService.getUserMatches(1).then(res => {
            if (!res) return;
            setMatches(res);
        })
    }

    return (
        <>
            {matches ? <VMatch matches={matches} /> : null}
            <Footer />
        </>
    )
}