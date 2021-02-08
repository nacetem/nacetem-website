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


export default function Preferences() {
  const [students, setStudents] = React.useState({});
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
        <Typography variant="h4" gutterBottom>
            Personal Contact
        </Typography>
        <Formik
        enableReinitialize = {true}
        initialValues={{
          home_add: students.home_add || '',
          postal_add: students.postal_add || '',
          personal_phone: students.personal_phone || '',
          email: students.email || '',
        }} 
        validationSchema={Yup.object({
          home_add: Yup.string('Enter your home address')
          .required('home address is required'),
          postal_add: Yup.string('Enter your postal address')
          .required('Your postal address is Required'),
          personal_phone: Yup.string('Enter your personal phone number')
          .required('Your personal phone number is Required'),
          email: Yup.string().email('Invalid email address')
          .required('Email is Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          axios.put(`${API_URL}/students/${student_id}`, {
            step: 'pcontact',
            home_add: values.home_add,
            postal_add: values.postal_add,
            personal_phone: values.personal_phone,
            email: values.email,
          },{headers:{'x-access-token':localStorage.getItem('token')}})
          .then(res=>{
            if(res.data){
            router.push('/next-of-kin')
            console.log(res.data)
          }
          })
          .catch(err => console.log(err));
          setSubmitting(false);
        //   redirect('/upload-photo')     
          // var value = '"fetchedValue"';
          // value = value.replace(/^"|"$/g, '');
        }}
      >
        {({ submitForm, isSubmitting, values }) => (
          <Form>
              <Paper>
              {isSubmitting? <LinearProgress color="secondary" />: null}
                <Grid container direction="column" justify="space-evenly" alignItems="center" style={{marginTop:20}}>
                  <Grid container direction="row" justify="space-evenly" alignItems="center" style={{paddingTop:20}}>
                        <Grid item>
                            <FormControl className={mstyles.formWidth}>
                                <Field style={{marginBottom:20}}
                                    component={TextField}
                                    name="home_add"
                                    value={values.home_add || ''}
                                    type="text"
                                    label="Home Address"
                                    />
                            </FormControl>
                        </Grid>
                      <Grid item>
                        <FormControl className={mstyles.formWidth}>
                            <Field style={{marginBottom:20}} 
                                component={TextField}
                                name="postal_add"
                                value={values.postal_add || ''}
                                type="text"
                                label="Postal Address"
                            />
                        </FormControl>
                      </Grid>
                      <Grid item>
                        <FormControl className={mstyles.formWidth}>
                            <Field style={{marginBottom:20}}
                                component={TextField}
                                name="personal_phone"
                                value={values.personal_phone || ''}
                                type="tel"
                                label="Phone Number"
                            />
                        </FormControl>
                      </Grid>
                      <Grid item>
                        <FormControl className={mstyles.formWidth}>
                            <Field style={{marginBottom:20}}
                                component={TextField}
                                name="email"
                                value={values.email || ''}
                                type="email"
                                label="Email"
                                
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
                        Save and continue
                        
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