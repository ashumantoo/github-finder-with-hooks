import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import Spinner from '../Layout/Spinner';
import Repos from '../Repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
    // componentDidMount() {
    //     this.props.getUser(this.props.match.params.login);
    //     this.props.getUserRepos(this.props.match.params.login);
    // }
    const githubContext = useContext(GithubContext);
    const { getUser, user, loading, getUserRepos, repos } = githubContext;
    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        //eslint-disable-next-line
    }, []); //Passing empty array to just run only once as the componet loads otherwise it will goes into the loop
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
        public_repos,
        public_gists,
        hireable
    } = user;
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
            <Repos repos={repos} />
        </Fragment>
    )
}

export default User;