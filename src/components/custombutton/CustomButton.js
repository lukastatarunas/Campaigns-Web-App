import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import { useStyles, ButtonContainer } from './styles';
import { outlined, addCampaignsButtonText } from '../../constants';

const CustomButton = ({ addCampaigns, jsonData }) => {
    const classes = useStyles();

    return (
        <ButtonContainer className={classes.root}>
            <Button onClick={addCampaigns} variant={outlined} disabled={jsonData === null}>
                {addCampaignsButtonText}
            </Button>
        </ButtonContainer>
    );
};

CustomButton.propTypes = {
    addCampaigns: PropTypes.func,
    jsonData: PropTypes.string,
};

export default CustomButton;
