import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';
import {useGAEventsTracker} from '../Hooks/useGAEventsTracker';

const Search = (props) => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const GAEventTracker = useGAEventsTracker('Github-Search');

    const [search, setSearch] = useState('');

    const onChangeHandler = (e) => {
        setSearch(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (search === '') {
            alertContext.setAlert('Please enter something', 'light');
        } else {
            githubContext.searchUsers(search);
            GAEventTracker('search','github user repo search');
            setSearch(''); //clearing the search field
        }
    }

    return (
        <div>
            <form className="form" onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    name="search"
                    placeholder="Search User..."
                    value={search}
                    onChange={onChangeHandler}
                />
                <input
                    type="submit"
                    value="Search"
                    className="btn btn-dark btn-block"
                />
            </form>
            {githubContext.users.length > 0 && (
                <button className="btn btn-light btn-block" onClick={githubContext.clearSearchedUsers}>Clear</button>
            )}
        </div>
    )
}

export default Search;