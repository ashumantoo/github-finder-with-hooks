import React, { useState, useContext } from 'react';
import PropsTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = (props) => {
    const githubContext = useContext(GithubContext);

    const [search, setSearch] = useState('');

    const onChangeHandler = (e) => {
        setSearch(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (search === '') {
            props.setAlert('Please enter something', 'light');
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

Search.propsTypes = {
    setAlert: PropsTypes.func.isRequired
}

export default Search;