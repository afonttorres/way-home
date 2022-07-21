import '../feeds/feed.css';
import { MatchCard } from "../cards/matchCard/MatchCard"

export const MatchFeed = ({ matches }) => {
    return (
        <div className="match-feed col">
            {matches.length >= 1 ?
                matches.map((match, key) => (
                    <MatchCard key={key} match={match} />
                ))
                :
                <span className="main-title">Todavía no tienes ningún match!</span>
            }
        </div>
    )
}