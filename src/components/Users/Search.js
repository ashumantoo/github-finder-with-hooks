import React, { Component } from 'react';
import PropsTypes from 'prop-types';

class Search extends Component {
    state = {
        search: ""
    }

    onChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        //passing searched text from search component to the app component
        //i.e from bottom component to the top component
        this.props.searchUsers(this.state.search);
        this.setState({ search: '' }); //clearing the search field
    }

    static propsTypes = {
        searchUsers: PropsTypes.func.isRequired
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmitHandler}>
                    <input
                        type="text"
                        name="search"
                        placeholder="Search User..."
                        value={this.state.search}
                        onChange={this.onChangeHandler}
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="btn btn-dark btn-block"
                    />
                </form>
            </div>
        )
    }
}

export default Search;