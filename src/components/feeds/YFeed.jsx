import '../feeds/feed.css';
import { SmallCard } from '../cards/smallCard/SmallCard';
import { SeeAll } from '../reusables/SeeAll/SeeAll';

export const YFeed = ({ housings }) => {
    return (
        <div className="yfeed-cont col">
            
            <SeeAll title={'most popular'} goTo={'/most-popular'} width={'75%'} />
            <div className='yfeed col'>
                {housings.map((housing, key) =>
                    <SmallCard key={housing.id} housing={housing} />
                )}
            </div>
        </div>
    );
}