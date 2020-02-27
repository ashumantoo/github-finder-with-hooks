import React, { Component } from 'react';

class Search extends Component {
    state = {
        text: ""
    }

    onChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(this.state.text);
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmitHandler}>
                    <input
                        type="text"
                        name="text"
                        placeholder="Search User..."
                        value={this.state.text}
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