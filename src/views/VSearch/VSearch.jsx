import { SearchFeed } from "../../components/feeds/SearchFeed";
import { SearchForm } from "../../components/forms/SearchForm/SearchForm";
import { Nav } from "../../components/nav/Nav";

export const VSearch = ({suggestions, searchData, search}) => {

    return (
        <div className="view">
            <Nav />
            <SearchForm searchData={searchData}/>
            <SearchFeed suggestions={suggestions} search={search}/>
        </div>
    )
}