import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Spinner from '../Layout/Spinner';

class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }

    static propsTypes = {
        getUser: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired,
        user: PropTypes.object.isRequired,
    }

    render() {
        const {
            name,
            avatar_url,
            location,
            company,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_url,
            public_repos,
            public_gists,
            hireable
        } = this.props.user;

        const { loading } = this.props;
        if (loading) return <Spinner />

        return (
            <Fragment>
                <Link to='/' className="btn btn-light">Back To Search </Link>
                Hireable: {' '}
                {hireable ? (<i className="fas fa-check text-success" />) :
                    (<i className="fas fa-times-circle text-danger" />)}
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} alt="" className="round-img" style={{ width: "150px" }} />
                        <h1>{name}</h1>
                        <p>Location: {location}</p>
                    </div>
                    <div>
                        {bio && (<Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>)}
                        <a href={html_url} className="btn btn-dark">Visit Github Profile</a>
                        <ul>
                            <li>
                                {login && (
                                    <Fragment>
                                        <strong>Username: </strong>{login}
                                    </Fragment>
                                )}
                            </li>
                            <li>
                                {company && (
                                    <Fragment>
                                        <strong>Company: </strong>{company}
                                    </Fragment>
                                )}
                            </li>
                            <li>
                                {blog && (
                                    <Fragment>
                                        <strong>Website: </strong>{blog}
                                    </Fragment>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">Followers: {followers}</div>
                    <div className="badge badge-light">Following: {following}</div>
                    <div className="badge badge-dark">Public Repos: {public_repos}</div>
                    <div className="badge badge-success">Public Gists: {public_gists}</div>
                </div>
            </Fragment>
        )
    }
}

export default User;