
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

export default function StudentDetails(props) {
  const classes = useStyles();
  const [errorMsg, setErrorMsg] = React.useState('');
  const [loading, setLoading] = React.useState(false);   
  const downloadFile = async (id, path, mimetype) => {
    try {
      setLoading(true)
      const result = await axios.get(`${API_URL}/download/${id}`, {
        responseType: 'blob'
      }, {
        headers: { 'x-access-token': localStorage.getItem('token')
        }
      });
      const split = path.split('/');
      const filename = split[split.length - 1];
      setErrorMsg('');
      result.data? download(result.data, filename, mimetype): null
      setLoading(true)
       return;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg('Error while downloading file. Try again later');
      }
    }
  };
  
  return (
    <div>
      
      <Dialog fullScreen open={props.open} onClose={props.handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            {/* <IconButton edge="start" color="inherit" onClick={props.handleClose} aria-label="close">
              <CloseIcon />
            </IconButton> */}
            <Typography variant="h6" className={classes.title}>
             {/* {props.eachStudent.fname}&nbsp;{props.eachStudent.mname}&nbsp;{props.eachStudent.surname.toLocaleUpperCase()} */}
            </Typography>
            <Button autoFocus color="inherit" onClick={props.handleClose}>
              Go Back
            </Button>
          </Toolbar>
        </AppBar>
            <Grid container>
              <Grid item xs={12} sm={12} lg={3}>
                <div style={{margin:10}}>
                  <StudentCard surname={props.eachStudent.surname}
                    fname={props.eachStudent.fname}
                    mname={props.eachStudent.mname}
                    student_id={props.eachStudent.student_id}
                    photo_path={props.eachStudent.photo_path}
                    photo_mimetype={props.eachStudent.photo_mimetype}
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={12} lg={5}>
              <Paper style={{marginTop:10, padding:10}} elevation={2}>
              <Grid container><h3><SchoolIcon/>  &nbsp; &nbsp;Institution Attended<hr/></h3></Grid>
              <Grid container>
                
            <Grid item xs={12} sm={12} lg={4}>
            
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
              <small>Institution 1:</small><br/>
                <b>{props.eachStudent.institution1}</b>
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} lg={4}>
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
              <small>Qualification 1:</small><br/>
                <b>{props.eachStudent.qualification1}</b>
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} lg={4}>
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
                <small>Qualification Date 1:</small><br/>
                <b>{props.eachStudent.qualificationDate1}</b>
              </Typography>
            </div>
          </Grid>
          
        </Grid>

        <Grid container>
        <Grid item xs={12} sm={12} lg={4}>
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
                <small>Institution 2:</small><br/>
                <b>{props.eachStudent.institution2}</b>
              </Typography>
            </div>
          </Grid>
            
          <Grid item xs={12} sm={12} lg={4}>
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
              <small>Qualification 2:</small><br/>
                <b>{props.eachStudent.qualification2}</b>
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} lg={4}>
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
                <small>Qualification Date 2:</small><br/>
                <b>{props.eachStudent.qualificationDate2}</b>
              </Typography>
            </div>
          </Grid>

        </Grid>

        <Grid container>
        <Grid item xs={12} sm={12} lg={4}>
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
                <small>Institution 3:</small><br/>
                <b>{props.eachStudent.institution3}</b>
              </Typography>
            </div>
          </Grid>
            
          <Grid item xs={12} sm={12} lg={4}>
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
              <small>Qualification 3:</small><br/>
                <b>{props.eachStudent.qualification3}</b>
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} lg={4}>
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
                <small>Qualification Date 3:</small><br/>
                <b>{props.eachStudent.qualificationDate3}</b>
              </Typography>
            </div>
          </Grid>
          
        </Grid>
        <Grid container>
        <Grid item xs={12} sm={12} lg={4}>
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
                <small>Institution 4:</small><br/>
                <b>{props.eachStudent.institution4}</b>
              </Typography>
            </div>
          </Grid>
            
          <Grid item xs={12} sm={12} lg={4}>
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
              <small>Qualification 4:</small><br/>
                <b>{props.eachStudent.qualification4}</b>
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} lg={4}>
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
                <small>Qualification Date 4:</small><br/>
                <b>{props.eachStudent.qualificationDate4}</b>
              </Typography>
            </div>
          </Grid>
          
        </Grid>

        <Grid container>
        <Grid item xs={12} sm={12} lg={4}>
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
                <small>Institution 5:</small><br/>
                <b>{props.eachStudent.institution5}</b>
              </Typography>
            </div>
          </Grid>
            
          <Grid item xs={12} sm={12} lg={4}>
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
              <small>Qualification 5:</small><br/>
                <b>{props.eachStudent.qualification5}</b>
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} lg={4}>
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
                <small>Qualification Date 5:</small><br/>
                <b>{props.eachStudent.qualificationDate5}</b>
              </Typography>
            </div>
          </Grid>
          
        </Grid>

        <Grid container>
        <Grid container><h3><PlaylistAddCheckIcon/> &nbsp; &nbsp;Preference<hr/></h3></Grid>
            <Grid item xs={12} sm={12} lg={4}>
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
              <small>Preferred Study Center:</small><br/>
                <b>{props.eachStudent.studyCentre}</b>
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} lg={4}>
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
              <small>Preferred Master’s Degree Programme:</small><br/>
                <b>{props.eachStudent.preferred}</b>
              </Typography>
            </div>
          </Grid>

          
          
        </Grid>

        <Grid container>
        <Grid container><h3><PersonOutlineIcon/> &nbsp; &nbsp;Personal Details<hr/></h3></Grid>
        <Grid item xs={12} sm={12} lg={4}>
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
                <small>Date of birth:</small><br/>
                <b>{props.eachStudent.dob}</b>
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} lg={4}>
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
                <small>Genger:</small><br/>
                <b>{props.eachStudent.gender}</b>
              </Typography>
            </div>
          </Grid>
            <Grid item xs={12} sm={12} lg={4}>
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
              <small>State of origin:</small><br/>
                <b>{props.eachStudent.state_origin}</b>
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} lg={4}>
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
              <small>Religion:</small><br/>
                <b>{props.eachStudent.religion}</b>
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} lg={4}>
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
                <small>Marital Status:</small><br/>
                <b>{props.eachStudent.maritalStatus}</b>
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} lg={4}>
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
                <small>Home Address:</small><br/>
                <b>{props.eachStudent.home_add}</b>
              </Typography>
            </div>
          </Grid>
          
        </Grid>

        <Grid container>
            <Grid item xs={12} sm={12} lg={4}>
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
              <small>Postal Address:</small><br/>
                <b>{props.eachStudent.postal_add}</b>
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} lg={4}>
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
              <small>Personal Phone:</small><br/>
                <b>{props.eachStudent.personal_phone}</b>
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} lg={4}>
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
                <small>Email:</small><br/>
                <b>{props.eachStudent.email}</b>
              </Typography>
            </div>
          </Grid>
          </Grid>
          <Grid container>
          <Grid container><h3><PeopleIcon/> &nbsp; &nbsp;Next of Kin Details<hr/></h3></Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
                <small>Next of kin Name:</small><br/>
                <b>{props.eachStudent.nokName}</b>
              </Typography>
            </div>
          </Grid>
        
            <Grid item xs={12} sm={12} lg={4}>
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
              <small>Next of Kin Religion:</small><br/>
                <b>{props.eachStudent.nokRel}</b>
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} lg={4}>
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
              <small>Next of Kin Contact:</small><br/>
                <b>{props.eachStudent.nokContact}</b>
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} lg={4}>
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
                <small>Next of Kin Phone Number:</small><br/>
                <b>{props.eachStudent.nokPhoneNo}</b>
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} lg={4}>
            <div style={{margin:10}}>
              <Typography variant="body1" color="textSecondary" component="p">
                <small>Next of kin Name:</small><br/>
                <b>{props.eachStudent.nokName}</b>
              </Typography>
            </div>
          </Grid>
          
        </Grid>

        </Paper >
              </Grid>
              <Grid item xs={12} sm={12} lg={4}>
                {/* Uploads */}
                <Paper style={{margin:10, padding:10}} elevation={2}>
                  <Grid container>
                    <Grid item xs={12} sm={12} lg={4}>
                    <h3><AttachFileIcon/> &nbsp; &nbsp;Credentials<hr/></h3>
                    <ol>
                      {props.filesList.length > 0 ? (
                          props.filesList.map(({ credential_id, file_path, file_mimetype }) => (
                              <li>
                                  <a
                                  href="#/"
                                  onClick={() =>
                                      downloadFile(credential_id, file_path, file_mimetype)
                                  }
                                  >{file_path} &nbsp; <IconButton color="primary" aria-label="file path">
                                      <Tooltip title="Download">
                                        <CloudDownloadIcon />
                                      </Tooltip>
                                    </IconButton>
                                    
                                  </a>
                                  {loading? < CircularProgress size={68}/> : null}
                              </li>
                              
                          )
                          )
                      ) : (
                          
                          <p> No files found. Please add some.</p>
                      )
                      }
                  </ol>
                    </Grid>
                  </Grid>
              </Paper>

              </Grid>
            </Grid>
           
            
      </Dialog>
    </div>
  );
}
