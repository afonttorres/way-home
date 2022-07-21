import { SearchFeed } from "../../components/feeds/SearchFeed"
// import { SearchForm } from "../../components/forms/SearchForm/SearchForm"

export const VSearch = ({suggestions}) => {

    return (
        <div className="view">
            {/* <SearchForm suggestions={suggestions}/> */}
            <SearchFeed suggestions={suggestions}/>
        </div>
    )
}