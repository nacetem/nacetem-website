import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function RankedTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Surname</StyledTableCell>
            <StyledTableCell align="right">First Name</StyledTableCell>
            <StyledTableCell align="right">Middle Name</StyledTableCell>
            <StyledTableCell align="right">Study Centre</StyledTableCell>
            <StyledTableCell align="right">Date of Birth</StyledTableCell>
            <StyledTableCell align="right">English Language</StyledTableCell>
            <StyledTableCell align="right">General Mathematics</StyledTableCell>
            <StyledTableCell align="right">Number of Sittings</StyledTableCell>
            <StyledTableCell align="right">Science-oriented?</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.ranked.map((rank) => (
            <StyledTableRow key={rank.surname}>
              <StyledTableCell component="th" scope="row">
                {rank.surname}
              </StyledTableCell>
              <StyledTableCell align="right">{rank.fname}</StyledTableCell>
              <StyledTableCell align="right">{rank.mname}</StyledTableCell>
              <StyledTableCell align="right">{rank.studyCentre}</StyledTableCell>
              <StyledTableCell align="right">{rank.dob}</StyledTableCell>
              <StyledTableCell align="right">{rank.english_language}</StyledTableCell>
              <StyledTableCell align="right">{rank.general_mathematics}</StyledTableCell>
              <StyledTableCell align="right">{rank.noofsittings}</StyledTableCell>
              <StyledTableCell align="right">{rank.scienceornot}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
