import React, { useReducer } from 'react';

import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
    SEARCH_USERS,
    GET_USER,
    GET_REPOS,
    CLEAR_USER,
    SET_ALERT,
    SET_LOADING,
    REMOVE_ALERT
} from '../types';

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
        alert: null
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //search users


    //get user


    //get user repos


    //clear user


    //set loading

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
            }}
        >
            {props.children}
        </GithubContext.Provider>
    )
}

export default GithubState;