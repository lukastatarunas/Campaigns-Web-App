import { CampaignsActionTypes } from './campaigns.types';

export const requestCampaigns = () => async (dispatch) => {
    dispatch({ type: CampaignsActionTypes.REQUEST_CAMPAIGNS_PENDING });
    fetch('https://api.jsonbin.io/b/5fc80ff0045eb86f1f8a4b6e')
        .then((response) => response.json())
        .then((data) => dispatch({ type: CampaignsActionTypes.REQUEST_CAMPAIGNS_SUCCESS, payload: data }))
        .catch((error) => dispatch({ type: CampaignsActionTypes.REQUEST_CAMPAIGNS_FAILED, payload: error }));
};
