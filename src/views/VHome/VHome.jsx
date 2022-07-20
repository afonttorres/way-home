import { XFeed } from "../../components/feeds/XFeed";
import { YFeed } from "../../components/feeds/YFeed";
import { Nav } from "../../components/nav/Nav";

export const VHome = ({ housings }) => {
    return (
        <div className="view">
            <Nav />
            <XFeed housings={housings} /> 
            <XFeed housings={housings} /> 
        </div>
    )
}