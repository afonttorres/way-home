import '../feeds/feed.css';
import { MainCard } from '../cards/MainCard';
export const XFeed = ({ housings }) => {
    return (
        <div className='xfeed'>
            {housings.map((housing, key) =>
                <MainCard key={housing.id} housing={housing} />
            )}
        </div>
    );
}