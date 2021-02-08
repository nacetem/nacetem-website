import React from 'react';
import { makeStyles, withStyles  } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Link from 'next/link'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import PersonIcon from '@material-ui/icons/Person';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import SchoolIcon from '@material-ui/icons/School';
import PeopleIcon from '@material-ui/icons/People';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import DoneIcon from '@material-ui/icons/Done';
import FeedbackIcon from '@material-ui/icons/Feedback';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import mstyle from '../styles/nav-side-bar.module.css'
import {useStateValue} from '../components/course-reg/state-provider'
import ConfirmSubmit from '../components/course-reg/confirm-submit'
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';
import { useRouter } from 'next/router'
import axios from 'axios'
import {API_URL} from '../utils/constants'


const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function DashboardSidebar() {
  const [open, setOpen] = React.useState(false);
  const [submit_status, setsubmit_status] = React.useState(false);
   
  const [{loggedIn, user_id, student_id}, dispatch] = useStateValue();
  const router = useRouter()
  const classes = useStyles();
  const handleOpen = () =>{
    setOpen(true)
  }
  const SubmitStatus = () =>{
    axios.put(`${API_URL}/students/${student_id}`, {
      step: 'submit_status',
      submit_status: true,
    },{headers:{'x-access-token':localStorage.getItem('token')}})
    .then(res=>{
      if(res.data){
        console.log(res.data)
        // setState({ ...state, open: true });
    }
    })
    .catch(err =>console.log(err));
  }
  const handleSubmit = () =>{
    setsubmit_status(true)
    dispatch({type:'SUBMITTED', payload: submit_status })
    SubmitStatus()
    return router.push('/student-dashboard')
  }
  const handleCancel = () => {
        setOpen(false);
      };
  
  return (
    <div className={mstyle.fullheight}>
      <List component="nav" aria-label="course reg side bar">
        <ListItem button style={{marginBottom:10}}>
          <PlaylistAddCheckIcon/> &nbsp; &nbsp;
          <Link href="/preferences">
            <a>
            Preferences
            </a>
          </Link>
        </ListItem>
        <Divider />
        <ListItem button style={{marginBottom:10}}>
           <AddAPhotoIcon/> &nbsp; &nbsp;
          <Link href="/upload-photo">
            <a>
            Upload Photograph
            </a>
          </Link>
        </ListItem>
        <ListItem button style={{marginBottom:10}}>
          <PersonOutlineIcon/> &nbsp; &nbsp;
          <Link href="/personal">
            <a>
            Personal Details
            </a>
          </Link>
        </ListItem>
        <ListItem button style={{marginBottom:10}}>
          <ContactMailIcon/> &nbsp; &nbsp;
          <Link href="/contact">
            <a>
            Personal Contact
            </a>
          </Link>
        </ListItem>
        <Divider />
        <ListItem button style={{marginBottom:10}}>
          <PeopleIcon/> &nbsp; &nbsp;
          <Link href="/next-of-kin">
            <a>
            Next of Kin
            </a>
          </Link>
        </ListItem>
        <Divider />
        <ListItem button style={{marginBottom:10}}>
          <SchoolIcon/>  &nbsp; &nbsp;
          <Link href="/education">
            <a>
            Educational Background
            </a>
          </Link>
        </ListItem>
        <ListItem button style={{marginBottom:10}}>
          <AttachFileIcon/> &nbsp; &nbsp;
          <Link href="/upload-credentials">
            <a>
            Upload Credentials
            </a>
          </Link>
        </ListItem>
        <Divider />
        <ListItem button style={{marginBottom:10}}>
        <FeedbackIcon /> &nbsp; &nbsp;
        <Link href="/experience">
            <a>
            Job Experience
            </a>
          </Link> &nbsp; &nbsp;
          {/* <DoneIcon style={{ color: 'green'}} fontSize="small"/> */}
          </ListItem>
          <Divider />
          <ListItem>
            <ColorButton variant="contained" color="primary" className={classes.margin} onClick={handleOpen}>
              Submit Application
            </ColorButton>
          </ListItem>
      </List>
      <ConfirmSubmit open={open} handleSubmit={handleSubmit} handleCancel={handleCancel}/>
    </div>
  );
}
