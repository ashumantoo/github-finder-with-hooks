import React, { Component } from 'react';

class UserItem extends Component {

    /*============ Defining Local Component state inside the constructor ========
    constructor() {
        super()
        this.state = {
            user: {
                id: 1,
                login: "mojombo",
                avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
                url: "https://api.github.com/users/mojombo",
                html_url: "https://github.com/mojombo",
            }
        }
    }
    ============================================================================*/
    state = {
        user: {
            id: 1,
            login: "mojombo",
            avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
            html_url: "https://github.com/mojombo",
        }
    }

    render() {
        return (
            <div className="card text-center">
                <img className="round-img" src={this.state.user.avatar_url} alt="user_logo" style={{ width: "60px" }} />
                <h4>{this.state.user.login}</h4>
                <a href={this.state.user.html_url} className="btn btn-dark btn-sm my-1">More</a>
            </div>
        )
    }
}

export default UserItem;