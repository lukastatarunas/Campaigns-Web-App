import { SearchFormActionTypes } from './searchform.types';

const initialState = {
    searchForm: '',
};

const searchFormReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SearchFormActionTypes.CHANGE_SEARCH_FORM:
            return {
                ...state,
                searchForm: action.payload,
            };
        default:
            return state;
    }
};

export default searchFormReducer;
