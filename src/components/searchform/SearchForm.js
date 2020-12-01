import PropTypes from 'prop-types';

import { TextField } from '@material-ui/core';

import { useStyles, Form } from './styles';
import { off, searchByName, outlined } from '../../constants';

const SearchForm = ({ handleSearchForm }) => {
    const classes = useStyles();

    return (
        <Form className={classes.root} noValidate autoComplete={off}>
            <TextField onChange={handleSearchForm} label={searchByName} variant={outlined} />
        </Form>
    );
};

SearchForm.propTypes = {
    handleSearchForm: PropTypes.func,
};

export default SearchForm;
