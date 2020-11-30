import { CampaignsActionTypes } from './campaigns.types';

export const requestCampaigns = () => async (dispatch) => {
    dispatch({ type: CampaignsActionTypes.REQUEST_CAMPAIGNS_PENDING });
    fetch('https://api.jsonbin.io/b/5fc4fa92045eb86f1f88fca2')
        .then((response) => response.json())
        .then((data) => dispatch({ type: CampaignsActionTypes.REQUEST_CAMPAIGNS_SUCCESS, payload: data }))
        .catch((error) => dispatch({ type: CampaignsActionTypes.REQUEST_CAMPAIGNS_FAILED, payload: error }));
};
