
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios'
import {API_URL} from '../../utils/constants'
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StudentDetails from './students-details';
import Ranked from './ranked';
import Tooltip from '@material-ui/core/Tooltip';
import {useStateValue} from './state-provider'
import ImportExportIcon from '@material-ui/icons/ImportExport';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toast from './toast';



  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  
  const headCells = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
    { id: 'studyCentre', numeric: true, disablePadding: false, label: 'Study Center' },
    { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
    { id: 'gender', numeric: true, disablePadding: false, label: 'Gender' },
    { id: 'dob', numeric: true, disablePadding: false, label: 'Date of Birth' },
    { id: 'details', numeric: true, disablePadding: false, label: 'Details' },
  ];
  const useStyles = makeStyles((theme) => ({visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));
  function EnhancedTableHead(props) {
    const { classes, order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'center'}
              padding={headCell.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
  EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
      };

  const useToolbarStyles = makeStyles((theme) => ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: '1 1 100%',
    },
  }));  
export default function PreferredProgramme(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [{loggedIn, user_id, student_id}, dispatch] = useStateValue();
  const [filesList, setFilesList] = React.useState([]);
  const [errorMsg, setErrorMsg] = React.useState('');  
  const [open, setOpen] = React.useState(false);
  const [openRank, setOpenRank] = React.useState(false);
  const [students, setStudents] = React.useState([]);
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [eachStudent, setEachStudent] = React.useState([]);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('studyCentre');
  const [session, setsession] = React.useState([]);
  const [ranked, setRanked] = React.useState([]);
  const [openToast, setOpenToast] = React.useState(false);
  const [excelFeedBack, setExcelFeedBack] = React.useState('false');
  React.useEffect(() => {
    getStudents()
    getFilesList()
    getSession()
    getRankedApplicants()
    console.log('ranked: ', ranked)
  }, []);
  

  const handleOpenTost = () => {
    setOpenToast(true);
  };

  const handleCloseToast = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenToast(false);
  };
  const getRankedApplicants = () => {
    axios
      .post(`${API_URL}/rankedApplicants`,{preferred: props.preferred}, {
          headers: {'x-access-token': localStorage.getItem('token')}
        })
      .then(
        (res)=>setRanked(res.data))
      .catch(err => console.log(err))  
  }
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
    const handleEdit = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const getStudents = () => {
        axios
          .post(`${API_URL}/allstudents`,{preferred: props.preferred}, {
              headers: {'x-access-token': localStorage.getItem('token')}
            })
          .then(
            (res)=>{setStudents(res.data)})
          .catch(err => console.log(err))  
      }
    const getStudentsForExcel = (e) => {
      const menuval = e.target.value
        axios
          .post(`${API_URL}/excelexport`, {session: menuval, preferred: props.preferred}, {
              headers: {'x-access-token': localStorage.getItem('token')}
            })
          .then(res => {
            setExcelFeedBack(res.data.exported)
            handleOpenTost()})
          .catch(err => console.log(err))  
          setAnchorEl(null)
      }
    const getEachStudent = (student_id) => {
        axios
          .get(`${API_URL}/students/${student_id}`, {
              headers: {'x-access-token': localStorage.getItem('token')}
            })
          .then(
            res=>{
              setEachStudent(res.data)
              return handleEdit()
            })
          .catch(err => console.log(err))  
      }
    const getFilesList = async () => {
        try {
          const { data } = await axios.post(`${API_URL}/usercredentials`, {user_id}, {
              headers: {
                'x-access-token': localStorage.getItem('token')
              }
            });
          setErrorMsg('');
          setFilesList(data);
          console.log(data)
        } catch (error) {
          error.response && setErrorMsg(error.response.data);
        }
      }; 
    const getSession = () => {
        axios
          .get(`${API_URL}/academics`, {
              headers: {'x-access-token': localStorage.getItem('token')}
            })
          .then(
            res=>{
              setsession(res.data)
            })
          .catch(err => console.log(err))  
      }
      const handleClick = (event) => {setAnchorEl(event.currentTarget) }
      const handleOnClose = ()=> setAnchorEl(null);
      return <>
        <Grid container>
          <Typography variant="h5" gutterBottom>
            {props.title}
          </Typography>
          
        </Grid>

        <Grid container>
        
          <Grid item xs={12} lg={3}>
            <Typography variant="body1" gutterBottom>
              {/* Total number of records: {students.length} */}
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Toast handleOpenTost={handleOpenTost} handleCloseToast={handleCloseToast} openToast={openToast} excelFeedBack={excelFeedBack}/>
          </Grid>
          <Grid item xs={12} lg={1}>
            <Ranked ranked={ranked}/>
          </Grid>
          <Grid item xs={12} lg={2}>
          <Tooltip title="Export to excel">
            <Button 
              aria-controls="Select-export"
              color="primary" aria-haspopup="true" 
              onClick={handleClick}>
               <img src="/images/excel_img.png" width="100" height="30" alt="Export to excel"/>
            </Button>
          </Tooltip>
            <Menu
              id="excel-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleOnClose}
            >
            {session? session.map((sess) => <MenuItem key={sess.id} value={sess.session} onClick={e=>getStudentsForExcel(e)}>{sess.session} session</MenuItem>): null}
            </Menu>
          </Grid>
        </Grid>
        <Paper className={classes.root}>
        <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={students.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                
                <EnhancedTableHead
                  classes={classes}
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                />
                <TableBody>

                    {students? students.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((std) => {
                       return (<TableRow key={std.student_id}>
                          <TableCell align="center">
                              {std.fname} &nbsp; {std.mname} &nbsp;  <b>{(std.surname).toLocaleUpperCase()}</b>
                          </TableCell><TableCell align="center">
                              {std.studyCentre}
                          </TableCell><TableCell align="center">
                              {std.email}
                          </TableCell>
                          <TableCell align="center">
                              {std.gender}
                          </TableCell>
                          <TableCell align="center">
                              {std.dob}
                          </TableCell>
                          <TableCell align="center">
                            <IconButton color="primary" aria-label="upload picture" component="span" onClick={()=>getEachStudent(std.student_id)}>
                            <Tooltip title="Details">
                              <MoreVertIcon/>
                            </Tooltip>
                          </IconButton>   
                          </TableCell>
                      </TableRow> );
                    }): null
                    }
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={students.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        
        <StudentDetails open={open} handleClose={handleClose} eachStudent={eachStudent} filesList={filesList}/>
        {/* <Ranked open={openRank} handleClose={handleCloseRank} /> */}
    </Paper>

      </>
      
}
