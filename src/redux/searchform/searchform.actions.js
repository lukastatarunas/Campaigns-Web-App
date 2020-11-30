import { SearchFormActionTypes } from './searchform.types';

export const changeSearchForm = (value) => ({
    type: SearchFormActionTypes.CHANGE_SEARCH_FORM,
    payload: value,
});
