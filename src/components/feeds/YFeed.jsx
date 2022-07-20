import { SmallCard } from '../cards/SmallCard';
export const YFeed = ({ housings }) => {
    return (
        <div style={{ height: '50%' }}>
            {housings.map((housing, key) =>
                <SmallCard key={housing.id} housing={housing} />
            )}
        </div>
    );
}