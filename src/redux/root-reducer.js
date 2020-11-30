import { combineReducers } from 'redux';

import searchFormReducer from './searchform/searchform.reducers';
import usersReducer from './users/users.reducers';
import campaignsReducer from './campaigns/campaigns.reducers';

export default combineReducers({
    searchform: searchFormReducer,
    users: usersReducer,
    campaigns: campaignsReducer,
});
