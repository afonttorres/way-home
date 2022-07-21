import '../feeds/feed.css';
import { MainCard } from '../cards/mainCard/MainCard';
import { SeeAll } from '../reusables/SeeAll/SeeAll';
export const XFeed = ({ housings }) => {
    return (
        <div className="xfeed-cont col">
            <SeeAll title={'most popular'} goTo={'most-popular'} width={'75%'} />
            <div className='xfeed row'>
                {housings.map((housing, key) =>
                    <>{key < 10 ? <MainCard key={housing.id} housing={housing} /> : null}</>
                )}
            </div>
        </div>
    );
}