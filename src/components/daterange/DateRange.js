import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { DatePicker } from '@material-ui/pickers';

const DateRange = ({ startDate, endDate, setStartDate, setEndDate }) => {
    return (
        <Fragment>
            <DatePicker autoOk label='Start-Date' clearable disableFuture value={startDate} onChange={setStartDate} />
            <DatePicker
                autoOk
                label='End-Date'
                clearable
                disableFuture
                value={endDate}
                onChange={setEndDate}
                minDate={startDate}
                disabled={!startDate}
            />
        </Fragment>
    );
};

DateRange.propTypes = {
    startDate: PropTypes.object,
    endDate: PropTypes.object,
    setStartDate: PropTypes.func,
    setEndDate: PropTypes.func,
};

export default DateRange;
