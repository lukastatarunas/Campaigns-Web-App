import { UsersActionTypes } from './users.types';

const initialState = {
    isPending: false,
    users: [],
    error: '',
};

const usersReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case UsersActionTypes.REQUEST_USERS_PENDING:
            return {
                ...state,
                isPending: true,
            };
        case UsersActionTypes.REQUEST_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                isPending: false,
            };
        case UsersActionTypes.REQUEST_USERS_FAILED:
            return {
                ...state,
                error: action.payload,
                isPending: false,
            };
        default:
            return state;
    }
};

export default usersReducer;
