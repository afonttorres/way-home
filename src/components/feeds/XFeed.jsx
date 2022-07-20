import '../feeds/feed.css';
import { MainCard } from '../cards/mainCard/MainCard';
export const XFeed = ({ housings }) => {
    return (
        <div className='xfeed row'>
            {housings.map((housing, key) =>
                <MainCard key={housing.id} housing={housing} />
            )}
        </div>
    );
}