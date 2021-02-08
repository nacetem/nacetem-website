
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import StudentCard from './student-details-card'
import download from 'downloadjs';
import axios from 'axios'
import {API_URL} from '../../utils/constants'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Tooltip from '@material-ui/core/Tooltip';
import PersonIcon from '@material-ui/icons/Person';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import SchoolIcon from '@material-ui/icons/School';
import PeopleIcon from '@material-ui/icons/People';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function RankedStudent(props) {
  const classes = useStyles();
  const [errorMsg, setErrorMsg] = React.useState('');
  const [loading, setLoading] = React.useState(false);   
  
  
  return (
    <div>
      <Dialog fullScreen open={props.openRank} onClose={props.handleCloseRank} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            {/* <IconButton edge="start" color="inherit" onClick={props.handleClose} aria-label="close">
              <CloseIcon />
            </IconButton> */}
            <Typography variant="h6" className={classes.title}>
             {/* {props.eachStudent.fname}&nbsp;{props.eachStudent.mname}&nbsp;{props.eachStudent.surname.toLocaleUpperCase()} */}
            </Typography>
            <Button autoFocus color="inherit" onClick={props.handleCloseRank}>
              Done
            </Button>
          </Toolbar>
        </AppBar>
            <Grid container>
              <Grid item xs={12} sm={12} lg={3}>
                container
              </Grid>
              <Grid item xs={12} sm={12} lg={5}>
              container
              </Grid>
              <Grid item xs={12} sm={12} lg={4}>
                container
              </Grid>
            </Grid>
      </Dialog>
    </div>
  );
}
