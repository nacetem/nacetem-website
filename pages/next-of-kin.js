import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { TextField, Select, SimpleFileUpload } from 'formik-material-ui';
import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import mstyles from '../styles/preferences.module.css'
import { Paper } from '@material-ui/core';
import DashboardSidebar from './dashboard-sidebar'
import ElevateAppBar from '../components/header'
import Head from 'next/head'
import Typography from '@material-ui/core/Typography';
import axios from 'axios'
import {API_URL} from '../utils/constants'
import {useStateValue} from '../components/course-reg/state-provider'
import { useRouter } from 'next/router'
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';




export default function NextOfKin() {
  const [students, setStudents] = React.useState({});

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  
  const [{loggedIn, user_id, student_id}, dispatch] = useStateValue();
  const router = useRouter()
  React.useEffect(() => {
    getStudents()
  }, []);
  const getStudents = () => {
    axios
      .get(`${API_URL}/students/${student_id}`, {
          headers: {'x-access-token': localStorage.getItem('token')}
        })
      .then(
        (res)=>{setStudents(res.data)})
      .catch(err => console.log(err))  
  }
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
    router.push('/education')
  };
  return (<>
    <ElevateAppBar/>
    <Head>
        <title>Course Registration Dashboard (NACETEM)</title>
    </Head>
    <Grid item container direction="row" >
      <Grid item xs={12} lg={2}>
        <DashboardSidebar/>
      </Grid>
      <Grid item xs={12} lg={8} style={{marginLeft:30}}>
      <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} 
      autoHideDuration={4000} onClose={handleClose} key={vertical + horizontal}>
          <Alert severity="success">
          <b> Saved successfully. Continueing to Educational Background</b>
          </Alert>
        </Snackbar>
      <Typography variant="h4" gutterBottom>
            Next of Kin Details
        </Typography>
        <Formik
        enableReinitialize = {true}
        initialValues={{
            nokName: students.nokName || '',
            nokRel: students.nokRel || '',
            nokContact: students.nokContact || '',
            nokPhoneNo: students.nokPhoneNo || '',
            nokEmail: students.nokEmail || '',
        }} 
        validationSchema={Yup.object({
            nokName: Yup.string()
          .required('Next of Kin Name is required'),
          nokRel: Yup.string()
          .required('Next of Kin Relationship is Required'),
          nokContact: Yup.string()
          .required('Next of Kin Contact is Required'),
          nokPhoneNo: Yup.string()
          .required('Next of Kin Phone Number is Required'),
          nokEmail: Yup.string()
          .required('Next of Kin Email is Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          axios.put(`${API_URL}/students/${student_id}`, {
            step: 'nokdetails',
            nokName: values.nokName,
            nokRel: values.nokRel,
            nokContact: values.nokContact,
            nokPhoneNo: values.nokPhoneNo,
            nokEmail: values.nokEmail,
          },{headers:{'x-access-token':localStorage.getItem('token')}})
          .then(res=>{
            if(res.data){
              setState({ ...state, open: true });
          }
          })
          .catch(err => console.log(err));
          setSubmitting(false);   
        }}
      >
        {({ submitForm, isSubmitting, values }) => (
          <Form>
              <Paper>
                <Grid container direction="column" justify="space-evenly" alignItems="center" style={{marginTop:20}}>
                  <Grid container direction="row" justify="space-evenly" alignItems="center" style={{paddingTop:20}}>
                        <Grid item>
                            <FormControl className={mstyles.formWidth}>
                                <Field style={{marginBottom:20}}
                                    component={TextField}
                                    name="nokName"
                                    value={values.nokName || ''}
                                    type="text"
                                    label="Next of Kin Name"
                                    />
                            </FormControl>
                        </Grid>
                      <Grid item>
                        <FormControl className={mstyles.formWidth}>
                            <Field style={{marginBottom:20}} 
                                component={TextField}
                                name="nokRel"
                                value={values.nokRel || ''}
                                type="text"
                                label="Next of Kin Relationship"
                            />
                        </FormControl>
                      </Grid>
                      <Grid item>
                        <FormControl className={mstyles.formWidth}>
                            <Field style={{marginBottom:20}}
                                component={TextField}
                                name="nokContact"
                                value={values.nokContact || ''}
                                type="text"
                                label="Next of Kin Contact Address"
                            />
                        </FormControl>
                      </Grid>                     
                      <Grid item>
                        <FormControl className={mstyles.formWidth}>
                            <Field style={{marginBottom:20}}
                                component={TextField}
                                name="nokPhoneNo"
                                value={values.nokPhoneNo || ''}
                                type="tel"
                                label="Next of Kin Phone Number"
                            />
                        </FormControl>
                      </Grid>
                      <Grid item>
                        <FormControl className={mstyles.formWidth}>
                            <Field style={{marginBottom:20}}
                                component={TextField}
                                name="nokEmail"
                                value={values.nokEmail || ''}
                                type="email"
                                label="Next of Kin Email"
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
                        Save and Continue
                        
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
  );
}