import { DetailCard } from "../../components/cards/DetailCard";
import { Nav } from "../../components/nav/Nav";

export const VDetail = ({ housing }) => {

    const background = 'https://unsplash.com/es/fotos/eWqOgJ-lfiI';

    return (
        <div className="view">
            <Nav />
            <DetailCard housing={housing} />
        </div>
    );
}