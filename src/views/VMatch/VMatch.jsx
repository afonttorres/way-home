import { MatchFeed } from "../../components/feeds/MatchFeed";
import { Nav } from "../../components/nav/Nav";

export const VMatch = ({ matches }) => {

    return (
        <div className="view">
            <Nav />
            <MatchFeed matches={matches} />
        </div>
    )
}