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
import DashboardSidebar from './dashboard-sidebar'
import ElevateAppBar from '../components/header'
import Head from 'next/head'
import Typography from '@material-ui/core/Typography';
import axios from 'axios'
import {API_URL} from '../utils/constants'
import {useStateValue} from '../components/course-reg/state-provider'
import { useRouter } from 'next/router'
import LinearProgress from "@material-ui/core/LinearProgress";
import Alert from '@material-ui/lab/Alert';



export default function Experience() {
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
      Job Experience (Industrial, Administrative, Managerial) if employed
        </Typography>
        <Formik
        enableReinitialize = {true}
        initialValues={{
            employer: students.employer || '',
            designation: students.designation || '',
            job_descr: students.job_descr || '',
            why_interested: students.why_interested || '',
            expectation_on_completion: students.expectation_on_completion || '',
        }} 
        validationSchema={Yup.object({
            employer: Yup.string()
          .required("Employer's name is required"),
          designation: Yup.string()
          .required('Designation is required'),
          job_descr: Yup.string()
          .required('Job description is required'),
          why_interested: Yup.string()
          .required('This field is required'),
          expectation_on_completion: Yup.string()
          .required('Epectation on completion is required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          axios.put(`${API_URL}/students/${student_id}`, {
            step: 'experience',
            employer: values.employer,
            designation: values.designation,
            job_descr: values.job_descr,
            why_interested: values.why_interested,
            expectation_on_completion: values.expectation_on_completion,
          },{headers:{'x-access-token':localStorage.getItem('token')}})
          .then(res=>{
            if(res.data){
            // router.push('/summary')
            console.log(res.data)
          }
          })
          .catch(err => console.log(err));
          setSubmitting(false);   
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
                                    name="employer"
                                    value={values.employer || ''}
                                    type="text"
                                    label="Employer's Name"
                                    />
                            </FormControl>
                        </Grid>
                      <Grid item>
                        <FormControl className={mstyles.formWidth}>
                            <Field style={{marginBottom:20}} 
                                component={TextField}
                                name="designation"
                                value={values.designation || ''}
                                type="text"
                                label="Designation"
                            />
                        </FormControl>
                      </Grid>
                      <Grid item>
                        <FormControl className={mstyles.formWidth}>
                            <Field style={{marginBottom:20}}
                                component={TextField}
                                name="job_descr"
                                value={values.job_descr || ''}
                                type="text"
                                label="Job Description"
                            />
                        </FormControl>
                      </Grid>                     
                      <Grid item>
                        <FormControl style={{width:450}}>
                            <Field style={{marginBottom:20}}
                                component={TextField}
                                name="why_interested"
                                value={values.why_interested || ''}
                                type="text"
                                label="Why are you interested in the Masters Degree programme?"
                            />
                        </FormControl>
                      </Grid>
                      <Grid item>
                        <FormControl style={{width:450}}>
                            <Field style={{marginBottom:20}}
                                component={TextField}
                                name="expectation_on_completion"
                                value={values.expectation_on_completion || ''}
                                type="email"
                                label="What are your expectations on completion of the programme? "
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
      </Grid>
     
    </Grid>
    
    </>
  );
}