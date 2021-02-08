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
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { useRouter } from 'next/router'
import {useStateValue} from '../components/course-reg/state-provider'
import LinearProgress from "@material-ui/core/LinearProgress";


export default function Preferences() {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  React.useEffect(() => {
    getStudents()
    
  }, []);
  
  const [programType, setprogramType] = React.useState('')
  const [students, setStudents] = React.useState({});
  const [error, setError] = React.useState(false);
  const [{loggedIn, user_id, student_id}, dispatch] = useStateValue();
  const progListAcada = [ 'Abuja', 'Ile-Ife']
  const progListPgd = ['Abuja', 'Bayelsa', 'Engun', 'Ile-Ife', 'Kano', 'Lagos' ]
  const router = useRouter()
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
    router.push('/upload-photo')
  };

  return (<>
    
    <ElevateAppBar/>
    
    <Head>
        <title>Application Form (NACETEM)</title>
    </Head>
    <Grid item container direction="row" >
      <Grid item xs={12} lg={2}>
        <DashboardSidebar/>
      </Grid>
      <Grid item xs={12} lg={8} style={{marginLeft:30}}>
      <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} 
      autoHideDuration={4000} onClose={handleClose} key={vertical + horizontal}>
          <Alert severity="success">
          <b> Saved successfully. Continueing to upload photograph</b>
          </Alert>
        </Snackbar>
      <Typography variant="h4" gutterBottom>
           Preferences
        </Typography>
        {error? <Alert severity="error">
           Something went wrong
          </Alert>: null}
        <Formik
        enableReinitialize = {true}
        initialValues={{
          studyCentre: students.studyCentre? students.studyCentre :'',
          preferred: students.preferred? students.preferred: '',
        }} 
        validationSchema={Yup.object({
          studyCentre: Yup.string()
          .oneOf(
            ['Ile Ife', 'Abuja'],
            'You must select a study centre'
          )
          .required('Required'),
          preferred: Yup.string()
          .oneOf(
            ['Professional', 'Academic'],
            'Preferred Master’s Degree Programme'
          )
          .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          axios.put(`${API_URL}/students/${student_id}`, {
            step: 'preference',
            studyCentre: values.studyCentre,
            preferred: values.preferred,
          },{headers:{'x-access-token':localStorage.getItem('token')}})
          .then(res=>{
            if(res.data){
              setState({ ...state, open: true });
          }
          })
          .catch(err =>setError(err));
          setSubmitting(false);
        }}
      >
        {({ submitForm, isSubmitting, values, setFieldValue, handleChange }) => (
          <Form>
              <Paper>
              {isSubmitting? <LinearProgress color="secondary" />: null}
                <Grid container direction="column" justify="space-evenly" alignItems="center" style={{marginTop:20}}>
                  <Grid container direction="row" justify="space-evenly" alignItems="center" style={{paddingTop:20}}>
                  <FormControl className={mstyles.formWidth}>
                          <InputLabel id="select-preferred">Preferred Master’s Degree Programme </InputLabel>
                          <Field name="preferred" component={Select}  value={values.preferred} 
                          onChange = {
                             (e) => {
                                handleChange(e);
                                switch(e.target.value){
                                case 'Academic':
                                  return setFieldValue('studyCentre', setprogramType('acada')) 
                                case 'Professional':
                                  return setFieldValue('studyCentre', setprogramType('prof'))
                                case 'pgd':
                                  return setFieldValue('studyCentre', setprogramType('pgd'))
                              }
                            }
                            }
                            >
                            <MenuItem value={'Pgd'}>Post Graduate Diploma In Technology Management</MenuItem>
                            <MenuItem value={'Academic'}>Master Technology Management(Academic)</MenuItem>
                            <MenuItem value={'Professional'}>Master Technology Management(Professional)</MenuItem>
                            
                          </Field>
                      </FormControl><br/>
                      <FormControl className={mstyles.formWidth}>
                          <InputLabel id="select-studyCentre">Please indicate your preferred study centre </InputLabel>
                          <Field component={Select} name="studyCentre" value={values.studyCentre}>
                          {values.studyCentre? <MenuItem value={values.studyCentre}>{values.studyCentre}</MenuItem>:
                          (programType === 'acada' ? <MenuItem value={'Abuja'}>{'Abuja'}</MenuItem> :
                            programType === 'prof' ? progListAcada.map(prog => <MenuItem value={prog}>{prog}</MenuItem>):
                            programType === 'pgd' ? progListPgd.map(prog => <MenuItem value={prog}>{prog}</MenuItem>):
                              null)
                            }
                          </Field>
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