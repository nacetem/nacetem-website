import React from 'react';
import { makeStyles  } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Link from 'next/link'
import SchoolIcon from '@material-ui/icons/School';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import NewSession from './new-session'
import Button from '@material-ui/core/Button';
import axios from 'axios'
import {API_URL} from '../../utils/constants'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DialogActions from '@material-ui/core/DialogActions';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import FormControl from '@material-ui/core/FormControl';
import mstyles from '../../styles/preferences.module.css'
import Grid from '@material-ui/core/Grid';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';

export default function AdminSidebar(){
  const [open, setOpen] = React.useState(false);
  const handleOpen = () =>{
    setOpen(true)
  }
  const handleCancel = () => {
    setOpen(false);
  };
  const content = <Formik
    enableReinitialize = {true}
    initialValues={{
    session: '',
    }}
    validationSchema={Yup.object({
        session: Yup.string('Enter session')
        .required('session is required'),
        
    })}
    onSubmit={(values, { setSubmitting }) => {
        axios.post(`${API_URL}/academics`, {
        session: values.session,
        },{headers:{'x-access-token':localStorage.getItem('token')}})
        .then(res=>{
        if(res.data){
              console.log(res.data)
        }
        })
        .catch(err => console.log(err));
        setSubmitting(false); 
        console.log(values.session)  
        handleCancel()
    }
  } 
  >
  {({ submitForm }) => (
  <Form>
  <FormControl className={mstyles.formWidth}>
    <Field style={{marginBottom:20}}
        component={TextField}
        name="session"
        type="text"
        label="Enter session"
        />
  </FormControl>
  <DialogActions>
    <Button onClick={submitForm} color="primary">
        Submit
    </Button>
    &nbsp;  &nbsp; &nbsp;
    <Button onClick={handleCancel} color="primary" autoFocus> 
        Cancel
    </Button>
  </DialogActions>
  </Form>
  )}
</Formik>
  return (<>
 
    <Grid container>    
    <div className={mstyles}>
      <List component="nav" aria-label="course reg side bar">        
        <ListItem button style={{marginBottom:10}}>
          <AddBoxIcon/> &nbsp; &nbsp;
           <Button 
                  aria-controls="simple-menu"
                  color="primary" aria-haspopup="true" 
                  onClick={handleOpen}>
                  New Session
              </Button>
        </ListItem>
        <Divider />
        <ListItem button style={{marginBottom:10}}>
           <SchoolIcon/> &nbsp; &nbsp;&nbsp;&nbsp;
          <Link href="/admin-professional-master">
            <a>
           Professional Master Technology Management
            </a>
          </Link>
        </ListItem>
        <ListItem button style={{marginBottom:10}}>
          <LocalLibraryIcon/> &nbsp; &nbsp;&nbsp;&nbsp;
          <Link href="/admin-academic-master">
            <a>
            Academic Master Technology Management
            </a>
          </Link>
        </ListItem>
        <ListItem button style={{marginBottom:10}}>
          <MenuBookIcon/> &nbsp; &nbsp;&nbsp;&nbsp;
          <Link href="/admin-pgd">
            <a>
            Post Graduate Diploma Technology Management
            </a>
          </Link>
        </ListItem>
      </List>
      <NewSession open={open} content={content} handleCancel={handleCancel}/>
    </div>
    </Grid>
    </>
  );
}
