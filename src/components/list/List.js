import PropTypes from 'prop-types';
import MoonLoader from 'react-spinners/MoonLoader';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { green, red } from '@material-ui/core/colors';
import * as moment from 'moment';

import { override, useStyles, LoaderContainer, StyledTableCell, StyledTableRow, IconContainer } from './styles';
import { dateFormat } from '../../constants';

const List = ({ isPending, data }) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            {isPending ? (
                <LoaderContainer>
                    <MoonLoader css={override} />
                </LoaderContainer>
            ) : (
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell>User Name</StyledTableCell>
                            <StyledTableCell>Start Date</StyledTableCell>
                            <StyledTableCell>End Date</StyledTableCell>
                            <StyledTableCell>Active</StyledTableCell>
                            <StyledTableCell>Budget</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item) => {
                            return (
                                <StyledTableRow key={item.userId}>
                                    <StyledTableCell component='th' scope='row'>
                                        {`Campaign ${item.userId}`}
                                    </StyledTableCell>
                                    <StyledTableCell>{item.name}</StyledTableCell>
                                    <StyledTableCell>{item.startDate}</StyledTableCell>
                                    <StyledTableCell>{item.endDate}</StyledTableCell>
                                    <StyledTableCell>
                                        {new Date() >= moment(item.startDate, dateFormat).toDate() &&
                                        new Date() <= moment(item.endDate, dateFormat).toDate() ? (
                                            <IconContainer>
                                                <FiberManualRecordIcon style={{ color: green[500] }} fontSize='small' />
                                                <span>Active</span>
                                            </IconContainer>
                                        ) : (
                                            <IconContainer>
                                                <FiberManualRecordIcon style={{ color: red[500] }} fontSize='small' />
                                                <span>Inactive</span>
                                            </IconContainer>
                                        )}
                                    </StyledTableCell>
                                    <StyledTableCell>{`$${item.budget}`}</StyledTableCell>
                                </StyledTableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            )}
        </TableContainer>
    );
};

List.propTypes = {
    isPending: PropTypes.bool,
    data: PropTypes.array,
};

export default List;
