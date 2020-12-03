import PropTypes from 'prop-types';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import CustomButton from '../custombutton/CustomButton';

import { TextAreaContainer } from './styles';
import { enterJsonData } from '../../constants';

const TextArea = ({ handleTextArea, addCampaigns, jsonData }) => {
    return (
        <TextAreaContainer>
            <TextareaAutosize onChange={handleTextArea} rowsMin={30} placeholder={enterJsonData} />
            <CustomButton addCampaigns={addCampaigns} jsonData={jsonData} />
        </TextAreaContainer>
    );
};

TextArea.propTypes = {
    handleTextArea: PropTypes.func,
    addCampaigns: PropTypes.func,
    jsonData: PropTypes.string,
};

export default TextArea;
