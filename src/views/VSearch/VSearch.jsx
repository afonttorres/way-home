import { SearchFeed } from "../../components/feeds/SearchFeed"
import { SearchForm } from "../../components/forms/SearchForm/SearchForm"

export const VSearch = ({suggestions, searchData, search}) => {

    return (
        <div className="view">
            <SearchForm searchData={searchData}/>
            <SearchFeed suggestions={suggestions} search={search}/>
        </div>
    )
}