import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import { useStyles, ButtonContainer } from './styles';
import { outlined, addCampaignsButtonText } from '../../constants';

const CustomButton = ({ addCampaigns }) => {
    const classes = useStyles();

    return (
        <ButtonContainer className={classes.root}>
            <Button onClick={addCampaigns} variant={outlined}>
                {addCampaignsButtonText}
            </Button>
        </ButtonContainer>
    );
};

CustomButton.propTypes = {
    addCampaigns: PropTypes.func,
};

export default CustomButton;
