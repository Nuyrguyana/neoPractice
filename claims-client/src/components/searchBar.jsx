import React, {useState} from 'react';
import {useAsyncDebounce} from "react-table";
import iconSearch from '../image/icon-search.svg'
import {useSelector} from "react-redux";

export const SearchBar = () => {

    const {globalFilter, setGlobalFilter, preGlobalFilteredRows} = useSelector(state => state);

    const [value, setValue] = useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)
    return (
        <div className='searchbar-container'>
            <input
                value={value || ""}
                className='input-search'
                type='search'
                placeholder='Search'
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
            />
            <img className='icon-font-awesome-search' src={iconSearch}/>
        </div>
    );
};
