import React from 'react';
import './SearchBar.css';
import { TextField } from '@material-ui/core';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import { IconButton } from '@material-ui/core';

function SearchBar(props) {
    return (
        <div className="searchBar">
            <form className="searchBar__form">
                <TextField onChange={props.onChangeHandler} autoComplete='off' value={props.value} className="searchBar__formControl" id="standard-basic" label="Enter a city" />
                <IconButton onClick={props.onClickHandler} className="searchBar__btn">
                    <LocationSearchingIcon />
                </IconButton>
            </form>
        </div>
    )
}

export default SearchBar
