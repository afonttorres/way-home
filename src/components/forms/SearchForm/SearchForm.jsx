import { useState } from 'react';
import '../SearchForm/searchForm.css';
export const SearchForm = ({ searchData }) => {

    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        let value = e.target.value
        
        if (e.target.value.length >= 3) {
            searchData(value.toLowerCase().trim());
        }

        setSearch(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(search == '' || search == undefined) return;
        searchData(search.toLocaleLowerCase().trim());
    }


    return (
        <form className="search-form col" onSubmit={handleSubmit}>
            <div className="search-bar row">
                <button type='submit'><i className="fa-solid fa-magnifying-glass"></i></button>
                <input
                    className='detail-text'
                    onChange={handleChange}
                    typeof="search"
                    name="search"
                    placeholder="Search"
                    value={search}
                    onFocus={(e) => e.target.select()}
                />
            </div>
        </form>
    )
}