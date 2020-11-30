import { UsersActionTypes } from './users.types';

export const requestUsers = () => async (dispatch) => {
    dispatch({ type: UsersActionTypes.REQUEST_USERS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => dispatch({ type: UsersActionTypes.REQUEST_USERS_SUCCESS, payload: data }))
        .catch((error) => dispatch({ type: UsersActionTypes.REQUEST_USERS_FAILED, payload: error }));
};
