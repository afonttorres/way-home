import { DetailCard } from "../../components/cards/DetailCard";
import { Nav } from "../../components/nav/Nav";
import '../VDetail/vdetail.css';

export const VDetail = ({ housing }) => {

    return (
        <div className="view detailView">
            <section className="wrapper" style={{backgroundImage:`url(${housing.imgUrl1})`}}>
            <Nav />
            <DetailCard housing={housing} />
            </section>
        </div>
    );
}