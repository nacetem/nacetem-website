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
import Alert from '@material-ui/lab/Alert';
import Router from 'next/router'
import axios from 'axios'
import {API_URL} from '../utils/constants'
import {useStateValue} from '../components/course-reg/state-provider'
import { useRouter } from 'next/router'
import Snackbar from '@material-ui/core/Snackbar';



export default function Personal() {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const [{loggedIn, user_id, student_id}, dispatch] = useStateValue();
  const router = useRouter()
  const [students, setStudents] = React.useState({});
  React.useEffect(() => {
    getStudents()
  }, []);
  const { vertical, horizontal, open } = state;

  const getStudents = () => {
    axios
      .get(`${API_URL}/students/${student_id}`, {
          headers: {'x-access-token': localStorage.getItem('token')}
        })
      .then(
        (res)=>{setStudents(res.data)})
      .catch(err => console.log(err))  
  }

  const handleClose = () => {
    setState({ ...state, open: false });
    router.push('/contact')
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
          <b> Saved successfully. Continueing to Personal Contact</b>
          </Alert>
        </Snackbar>
      <Typography variant="h4" gutterBottom>
            Personal Details
        </Typography>
        <Formik
        enableReinitialize = {true}
        initialValues={{
          surname: students.surname || '',
          mname: students.mname ||  '',
          fname : students.fname ||  '',
          dob : students.dob || '',
          gender : students.gender || '',
          religion: students.religion ||  '',
          maritalStatus: students.maritalStatus ||  '',
          state_origin: students.state_origin ||  '',
        }} 
        validationSchema={Yup.object({
          surname: Yup.string('Enter your surname')
          .required('Surname is required'),
          mname: Yup.string('Enter your middle name')
          .required('Middle name is Required'),
          fname: Yup.string('Enter your first name')
          .required('First name is Required'),
          dob: Yup.string('Enter your date of birth')
          .required('Date of birth is Required'),
          gender: Yup.string('Select your gender')
          .required('Your gender is Required'),
          state_origin: Yup.string('Select your state of origin')
          .required('Your state of origin is Required'),
          religion: Yup.string('Select your religion')
          .required('Your religion is Required'),
          maritalStatus: Yup.string('Enter your marital status')
          .required('Your marital status is Required'),
          
        })}
        onSubmit={(values, { setSubmitting }) => {
          axios.put(`${API_URL}/students/${student_id}`, {
            step: 'personal',
            surname: values.surname,
            mname: values.mname,
            fname: values.fname,
            dob: values.dob,
            gender: values.gender,
            religion: values.religion,
            maritalStatus: values.maritalStatus,
            state_origin: values.state_origin,
          },{headers:{'x-access-token':localStorage.getItem('token')}})
          .then(res=>{
            if(res.data){
              setState({ ...state, open: true });
           
            console.log(res.data)
          }
          })
          .catch(err => console.log(err));
          setSubmitting(false);
        //   redirect('/upload-photo') 
          router.push("/personal");    
        }}
      >
        {({ submitForm, isSubmitting, values }) => (
          <Form>
              <Paper >
              {isSubmitting? <LinearProgress color="secondary" />: null}

                <Grid container direction="column" justify="space-evenly" alignItems="center" style={{marginTop:20}}>
                  <Grid container direction="row" justify="space-evenly" alignItems="center" style={{paddingTop:20}}>
                        <Grid item>
                            <FormControl className={mstyles.formWidth}>
                                <Field style={{marginBottom:20}}
                                    component={TextField}
                                    name="surname"
                                    value={values.surname || ''}
                                    type="text"
                                    label="Surname"
                                    />
                            </FormControl>
                        </Grid>
                      <Grid item>
                        <FormControl className={mstyles.formWidth}>
                            <Field style={{marginBottom:20}} 
                                component={TextField}
                                name="mname"
                                value={values.mname}
                                type="text"
                                label="Middle Name"
                            />
                        </FormControl>
                      </Grid>
                      <Grid item>
                        <FormControl className={mstyles.formWidth}>
                            <Field style={{marginBottom:20}}
                                component={TextField}
                                name="fname"
                                value={values.fname}
                                type="text"
                                label="First Name"
                            />
                        </FormControl>
                      </Grid>
                      <Grid item>
                        <FormControl className={mstyles.formWidth}>
                            <Field style={{marginBottom:20}}
                                component={TextField}
                                name="dob"
                                value={values.dob}
                                type="date"
                                label="Date of Birth"
                                InputLabelProps={{
                                    shrink: true,
                                  }}
                            />
                        </FormControl>
                      </Grid>
                      <Grid item>
                        <FormControl className={mstyles.formWidth}>
                            <InputLabel id="select-sex">Gender </InputLabel>
                            <Field style={{marginBottom:20}} component={Select} name="gender" value={values.gender}>
                                <MenuItem value={'Male'}>Male</MenuItem>
                                <MenuItem value={'Female'}>Female</MenuItem>
                            </Field>
                        </FormControl>
                      </Grid>
                      <Grid item>
                        <FormControl className={mstyles.formWidth}>
                            <InputLabel id="state_origin">State of Origin </InputLabel>
                            <Field style={{marginBottom:20}} component={Select} name="state_origin" value={values.state_origin}>
                                <MenuItem value={'Abia'}>Abia</MenuItem>
                                <MenuItem value={'Adamawa'}>Adamawa</MenuItem>
                                <MenuItem value={'Akwa Ibom'}>Akwa Ibom</MenuItem>
                                <MenuItem value={'Anambra'}>Anambra</MenuItem>
                                <MenuItem value={'Bauchi'}>Bauchi</MenuItem>
                                <MenuItem value={'Bayelsa'}>Bayelsa</MenuItem>
                                <MenuItem value={'Benue'}>Benue</MenuItem>
                                <MenuItem value={'Borno'}>Borno</MenuItem>
                                <MenuItem value={'Cross River'}>Cross River</MenuItem>
                                <MenuItem value={'Delta'}>Delta</MenuItem>
                                <MenuItem value={'Ebonyi'}>Ebonyi</MenuItem>
                                <MenuItem value={'Edo'}>Edo</MenuItem>
                                <MenuItem value={'Ekiti'}>Ekiti</MenuItem>
                                <MenuItem value={'Enugu'}>Enugu</MenuItem>
                                <MenuItem value={'Gombe'}>Gombe</MenuItem>
                                <MenuItem value={'Imo'}>Imo</MenuItem>
                                <MenuItem value={'Jigawa'}>Jigawa</MenuItem>
                                <MenuItem value={'Kaduna'}>Kaduna</MenuItem>
                                <MenuItem value={'Kano'}>Kano</MenuItem>
                                <MenuItem value={'Katsina'}>Katsina</MenuItem>
                                <MenuItem value={'Kebbi'}>Kebbi</MenuItem>
                                <MenuItem value={'Kogi'}>Kogi</MenuItem>
                                <MenuItem value={'Kwara'}>Kwara</MenuItem>
                                <MenuItem value={'Lagos'}>Lagos</MenuItem>
                                <MenuItem value={'Nasarawa'}>Nasarawa</MenuItem>
                                <MenuItem value={'Niger'}>Adamawa</MenuItem>
                                <MenuItem value={'Ogun'}>Ogun</MenuItem>
                                <MenuItem value={'Ondo'}>Ondo</MenuItem>
                                <MenuItem value={'Osun'}>Osun</MenuItem>
                                <MenuItem value={'Oyo'}>Oyo</MenuItem>
                                <MenuItem value={'Plateau'}>Plateau</MenuItem>
                                <MenuItem value={'Rivers'}>Rivers</MenuItem>
                                <MenuItem value={'Sokoto'}>Sokoto</MenuItem>
                                <MenuItem value={'Taraba'}>Taraba</MenuItem>
                                <MenuItem value={'Yobe'}>Yobe</MenuItem>
                                <MenuItem value={'Zamfara'}>Zamfara</MenuItem>
                            </Field>
                        </FormControl>
                      </Grid>
                      <Grid item>
                        <FormControl className={mstyles.formWidth}>
                            <InputLabel id="select-religion">Religion </InputLabel>
                            <Field style={{marginBottom:20}} component={Select} name="religion" value={values.religion}>
                                <MenuItem value={'Christianity'}>Christianity</MenuItem>
                                <MenuItem value={'Islam'}>Islam</MenuItem>
                                <MenuItem value={'Others'}>Others</MenuItem>
                            </Field>
                        </FormControl>
                      </Grid>
                      <Grid item>
                        <FormControl className={mstyles.formWidth}>
                            <Field style={{marginBottom:20}}
                                component={TextField}
                                name="maritalStatus"
                                value={values.maritalStatus}
                                type="text"
                                label="Material Status"
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