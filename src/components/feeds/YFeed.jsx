import '../feeds/feed.css';
import { SmallCard } from '../cards/smallCard/SmallCard';
export const YFeed = ({ housings }) => {
    return (
        <div className='yfeed'>
            {housings.map((housing, key) =>
                <SmallCard key={housing.id} housing={housing} />
            )}
        </div>
    );
}