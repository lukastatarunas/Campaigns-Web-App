import { CampaignsActionTypes } from './campaigns.types';

const initialState = {
    isPending: false,
    campaigns: [],
    error: '',
};

const campaignsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CampaignsActionTypes.REQUEST_CAMPAIGNS_PENDING:
            return {
                ...state,
                isPending: true,
            };
        case CampaignsActionTypes.REQUEST_CAMPAIGNS_SUCCESS:
            return {
                ...state,
                campaigns: action.payload,
                isPending: false,
            };
        case CampaignsActionTypes.REQUEST_CAMPAIGNS_FAILED:
            return {
                ...state,
                error: action.payload,
                isPending: false,
            };
        default:
            return state;
    }
};

export default campaignsReducer;
