import {
    SEARCH_USERS,
    GET_USER,
    GET_REPOS,
    CLEAR_USER,
    SET_ALERT,
    SET_LOADING,
    REMOVE_ALERT
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}