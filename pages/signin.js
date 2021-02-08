import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import mstyles from '../styles/preferences.module.css'
import { Paper } from '@material-ui/core';
import ElevateAppBar from '../components/header'
import Head from 'next/head'
import Typography from '@material-ui/core/Typography';
import {API_URL} from '../utils/constants'
import axios from 'axios'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Link from 'next/link'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import {useStateValue} from '../components/course-reg/state-provider'
import { useRouter } from 'next/router'
import LinearProgress from "@material-ui/core/LinearProgress";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';

export default function SignIn() {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const [students, setStudents] = React.useState({});
  const [error, setError] = React.useState(false);
  const [{loggedIn, student_id}, dispatch] = useStateValue();
  const router = useRouter()
  const [pvalues, setpValues] = React.useState({
    password: '',
    showPassword: false,
  });
  
  const getStudents = (student_id) => {
    axios
      .get(`${API_URL}/students/${student_id}`, {
          headers: {'x-access-token': localStorage.getItem('token')}
        })
      .then(
        (res)=>{setStudents(res.data)})
      .catch(err => console.log(err))  
  }
  const handleChange = (prop) => (event) => {
    setpValues({ ...pvalues, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setpValues({ ...pvalues, showPassword: !pvalues.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
    students.submit_status ? router.push('/student-dashboard') : router.push('/preferences')
  };

  // const handleClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  //   router.push('/course-dashboard')
  //   setOpen(false);
  // };

  return (<>
    <ElevateAppBar/>
    <Head>
        <title>Sign In (NACETEM)</title>
    </Head>
    <Grid item container direction="row" >
      <Grid item xs={12} lg={3}>
        
      </Grid>
      <Grid item xs={12} lg={5} style={{marginLeft:30}}>
      <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} 
      autoHideDuration={2000} onClose={handleClose} key={vertical + horizontal}>
          <Alert severity="success">
           <b>Signed in successfully. You are being redirected to Application</b>
          </Alert>
        </Snackbar>
        <Typography variant="h4" gutterBottom style={{marginTop:10}}>
           <LockOpenIcon fontSize="large"/> &nbsp;Sign In
        </Typography>
        {error? <Alert severity="error">
           Something went wrong. Username or Password is wrong
          </Alert>: null}
         
        <Typography variant="body1" gutterBottom>
        Don't have an account?  <Link href="/sign-up" ><a style={{color:'blue'}}>Sign Up</a></Link>
        
      </Typography>
      
        <Formik
        initialValues={{
          email: '',
          password: '',
        }} 
        validationSchema={Yup.object({
            email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
            password: Yup.string()
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true)
            axios.post(`${API_URL}/signin`, {
            email: values.email,
            password: values.password
          })
          .then(res=>{
            if(res.data.token){
              const {token, user_id, student_id} = res.data
            localStorage.setItem('token', token)        
            // localStorage.clear();
            getStudents(student_id)
            dispatch({type:'LOGGEDIN', payload:{user_id, student_id}})
            setState({ ...state, open: true });

            // router.push('/course-dashboard')
            console.log(res.data)
          }
          })
          .catch(err => setError(true));
          setSubmitting(false);  
        }}
      >
        {({ submitForm, isSubmitting, values, handleChange  }) => (
          <Form>
              <Paper>
                {isSubmitting? <LinearProgress color="secondary" />: null}
                <Grid container direction="column" justify="space-evenly" alignItems="center" style={{marginTop:20}}>
                  <Grid item>
                      <FormControl className={mstyles.formWidth}>
                          <Field style={{marginBottom:20, marginTop:20}}
                              component={TextField}
                              name="email"
                              type="email"
                              label="Email"
                              onChange={(e) => {handleChange(e); setError(false)}}
                              />
                      </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControl className={mstyles.formWidth}>
                        <Field style={{marginBottom:20}} 
                         component={TextField}
                            name="password"
                            label="Password"
                            type={pvalues.showPassword ? 'text' : 'password'}
                            value={values.password}
                        onChange={(e) => {handleChange(e); setError(false)}}
                        InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                       ),
                      }}
                        />
                    </FormControl>
                  </Grid>
                 
                  <Grid item xs={12} lg={4}>
                        <Button
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting}
                        onClick={submitForm}
                        style={{margin:20 }}
                        >
                            Submit 
                        </Button>
                      </Grid>
                      
                </Grid>
              </Paper>
          </Form>
        )}
      </Formik>
     
      </Grid>
    </Grid>
    
    </>
  )
}