import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { TextField, Select, SimpleFileUpload } from 'formik-material-ui';
import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import mstyles from '../styles/preferences.module.css'
import { Paper } from '@material-ui/core';
import DashboardSidebar from '../components/course-reg/dashboard-sidebar'
import ElevateAppBar from '../components/header'
import Head from 'next/head'
import Typography from '@material-ui/core/Typography';
// import redirect from 'nextjs-redirect'
import Router from 'next/router'
import {API_URL} from '../utils/constants'
import axios from 'axios'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Link from 'next/link'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LinearProgress from "@material-ui/core/LinearProgress";


export default function SignUp() {
  const [open, setOpen] = React.useState(false);
  const [signupOk, setSignuoOk] = React.useState(false)

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  
  return (<>
    <ElevateAppBar/>
    <Head>
        <title>Course Registration Sign Up (NACETEM)</title>
    </Head>
    <Grid item container direction="row" >
      <Grid item xs={12} lg={2}>
        
      </Grid>
      <Grid item xs={12} lg={8} style={{marginLeft:30}}>
      <Typography variant="h4" gutterBottom >
           <PersonAddIcon fontSize="large"/> &nbsp;Sign Up
        </Typography>
        <Typography variant="body1" gutterBottom>
        Already have an account?  <Link href="/signin" ><a style={{color:'blue'}}>Sign In</a></Link>
      </Typography>
        {signupOk? 
          <Alert severity="success" style={{fontSize: 40, textDecoration:'underline' }}>
          <Link href='/signin'>
            <a>Sign up successful. Click here to login</a>
          </Link>
          </Alert> 
        :<Formik
        initialValues={{
          email: '',
          password: '',
        }} 
        validationSchema={Yup.object({
            email: Yup.string()
            .email('Invalid email address')
            .required('Required'),

            password: Yup.string()
            .min(8, 'Must be at least 8 characters')
            .required('Required'),

            confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {         
          axios.post(`${API_URL}/signup`, {
            email: values.email,
            password: values.password
          })
          .then(res=>{
            (res && res.data.auth) ? setSignuoOk(true) : null;
            console.log(res.data)}
            )
          .catch(err => console.log(err));
          setSubmitting(false);    
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
              <Paper>
              {isSubmitting? <LinearProgress color="secondary" />: null}

                <Grid container direction="column" justify="space-evenly" alignItems="center" style={{marginTop:20}}>
                  <Grid container direction="row" justify="space-evenly" alignItems="center" style={{paddingTop:20}}>
                        <Grid item>
                            <FormControl className={mstyles.formWidth}>
                              <Field style={{marginBottom:20}}
                                  component={TextField}
                                  name="email"
                                  type="email"
                                  label="Email"
                                  />
                            </FormControl>
                        </Grid>
                      <Grid item>
                        <FormControl className={mstyles.formWidth}>
                            <Field style={{marginBottom:20}} 
                                component={TextField}
                                name="password"
                                type="password"
                                label="Password"
                            />
                        </FormControl>
                      </Grid>

                      <Grid item>
                        <FormControl className={mstyles.formWidth}>
                            <Field style={{marginBottom:20}} 
                                component={TextField}
                                name="confirmPassword"
                                type="password"
                                label="Comfirm Password"
                            />
                        </FormControl>
                      </Grid>
                      
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <Button
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    onClick={submitForm}
                    style={{margin:20 }}
                    >
                        Save
                        
                    </Button>
                  </Grid>
                  
                </Grid>
              </Paper>
                  
          </Form>
        )}
      </Formik>
      }
      </Grid>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
           Signed up successfully
          </Alert>
        </Snackbar>
    </Grid>
    
    </>
  );
}