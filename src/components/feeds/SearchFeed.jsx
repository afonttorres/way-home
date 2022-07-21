import '../feeds/feed.css';
import { SmallCard } from '../cards/smallCard/SmallCard';

export const SearchFeed = ({ suggestions }) => {

    return (
        <div className="search-feed yfeed col">
            {suggestions.length > 1 ?

                <>{suggestions.map((s, key) => (
                    <SmallCard key={s.id} housing={s} />
                ))}</>

                :
                <span>
                    no existe esta búsqueda
                </span>
            }
        </div>
    )
}