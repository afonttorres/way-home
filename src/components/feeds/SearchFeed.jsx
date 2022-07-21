import '../feeds/feed.css';
import { SmallCard } from '../cards/smallCard/SmallCard';

export const SearchFeed = ({ suggestions, search }) => {

    console.log(suggestions)
    return (
        <div className="search-feed yfeed col">
            {suggestions.length >= 1 ?

                <>{suggestions.map((s, key) => (
                    <SmallCard key={s.id} housing={s} />
                ))}</>

                :
                <div className="col">
                    {search ? <span className="title" style={{ width: '75%', textAlign: 'center' }}>Lo sentimos, no hay sugerencias para {search}</span> : null}
                </div>
            }
        </div>
    )
}