import { MainCard } from '../cards/MainCard';
export const XFeed = ({ housings }) => {
    return (
        <div style={{ height: '50%' }}>
            {housings.map((housing, key) =>
                <MainCard key={housing.id} housing={housing} />
            )}
        </div>
    );
}