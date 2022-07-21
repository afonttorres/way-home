import '../feeds/feed.css';
import { MatchCard } from "../cards/matchCard/MatchCard"
import { AnimalDisplay } from '../reusables/AnimalDisplay/AnimalDisplay';

export const MatchFeed = ({ matches }) => {
    return (
        <div className="col">
            <div className="user-data col">
                <span className='main-title'>Hola, {matches[0].user.name} !</span>
                <span className='main-title match-title'>Tus solicitudes de match</span>
                <AnimalDisplay pet={matches[0].user.animal} top={'25%'} right={'0%'} color={'var(--red)'} />
            </div>
            <div className="match-feed col">
                {matches.length >= 1 ?
                    matches.map((match, key) => (
                        <MatchCard key={key} match={match} />
                    ))
                    :
                    <span className="main-title">Todavía no tienes ningún match!</span>
                }
            </div>
        </div>
    )
}