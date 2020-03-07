import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = (props) => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

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