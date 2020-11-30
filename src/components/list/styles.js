import styled from 'styled-components';
import { css } from '@emotion/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export const override = css`
    display: block;
    margin: 0 auto;
    border-color: black;
`;

export const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export const LoaderContainer = styled.div``;

export const IconContainer = styled.div`
    display: flex;
`;

export const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);
