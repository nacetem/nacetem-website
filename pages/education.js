import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button } from '@material-ui/core';
import { TextField, Select } from 'formik-material-ui';
import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper } from '@material-ui/core';
import DashboardSidebar from './dashboard-sidebar'
import ElevateAppBar from '../components/header'
import Head from 'next/head'
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import mstyles from '../styles/preferences.module.css'
import axios from 'axios'
import {API_URL} from '../utils/constants'
import {useStateValue} from '../components/course-reg/state-provider'
import { useRouter } from 'next/router'
import LinearProgress from "@material-ui/core/LinearProgress";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';



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
        router.push('/upload-credentials')
      };
    const matchEngMath = (grade) => {
        switch(grade){
          case grade == 5 :
            return 'A'
          case grade == 4 :
            return 'B'
          case grade == 3 :
            return 'C'
          case grade == 2 :
            return 'D'
          case grade == 1 :
            return 'E'
          case grade == 0 :
            return 'F'
            default:
              return grade
        }
      }
      
      const matchSci = (grade) => {
        switch(grade){
          case grade == 3 :
            return 'Sciences (Pure)'
          case grade == 2 :
            return 'Social Sciences'
          case grade == 1 :
            return 'Arts'
          default:
            return grade
        }
      }
      const matchNoSitting = (grade) => {
        switch(grade){
          case grade == 3 :
            return 1
          case grade == 2 :
            return 2
          case grade == 1 :
            return 3
          default:
            return grade
        }
      }
      const menu_items =  ['Agricultural', 
      'Biology', 
      'Chemistry',     
      'Christian Religious Studies', 
      'Civic Education', 
      'Commerce',
      'Economics', 
      'English Language',
      'Financial Accounting', 
      'Further Mathematics',
      'General Mathematics', 
      'Geography',    
      'Government', 
      'Hausa', 
      'Igbo', 
      'Islamic Studies',     
      'Literature-in-English',
      'Physics', 
      'Science', 
      'Yoruba',]      
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
          <b> Saved successfully. Continueing to Upload Credentials</b>
          </Alert>
        </Snackbar>
      <Typography variant="h4" gutterBottom>
            Educational Backgound Details
        </Typography>
        <Formik
        enableReinitialize = {true}
        initialValues={{
            institution1: students.institution1 || '',
            qualification1: students.qualification1 || '',
            qualificationDate1: students.qualificationDate1 || '',
            institution2: students.institution2 || '',
            qualification2: students.qualification2 || '',
            qualificationDate2: students.qualificationDate2 || '',
            institution3: students.institution3 || '',
            qualification3: students.qualification3 || '',
            qualificationDate3: students.qualificationDate3 || '',
            institution4: students.institution4 || '',
            qualification4: students.qualification4 || '',
            qualificationDate4: students.qualificationDate4 || '',
            institution5: students.institution5 || '',
            qualification5: students.qualification5 || '',
            qualificationDate5: students.qualificationDate5 || '',
            scienceornot: matchSci(students.scienceornot) || '',
            general_mathematics: matchEngMath(students.general_mathematics) || '',
            english_language: matchEngMath(students.english_language) || '',
            noofsittings: matchNoSitting(students.noofsittings) || '',
        }}
        validationSchema={Yup.object({
            institution1: Yup.string()
          .required('Institution is required'),
          qualification1: Yup.string()
          .required('Qualification is Required'),
          qualificationDate1: Yup.string()
          .required('Date of qualification is Required'),
        //   scienceornot: Yup.string()
        //   .oneOf(
        //     ['Sciences (Pure)', 'Social Sciences', 'Arts'],
        //     'Science or not'
        //   )
        //   .required('Required'),
        //   general_mathematics: Yup.string()
        //   .oneOf(
        //     ['A', 'B', 'C', 'D', 'E', 'F'],
        //     'general mathematics'
        //   )
        //   .required('Required'),
        //   english_language: Yup.string()
        //   .oneOf(
        //     ['A', 'B', 'C', 'D', 'E', 'F'],
        //     'english language'
        //   )
        //   .required('Required'),
        //   noofsittings: Yup.string()
        //   .oneOf(
        //     [1, 2, 3],
        //     'no of sittings'
        //   )
        //   .required('Required'),
      
        })}
        onSubmit={(values, { setSubmitting }) => {
            axios.put(`${API_URL}/students/${student_id}`, {
                step: 'education',
                institution1: values.institution1,
                qualification1: values.qualification1,
                qualificationDate1: values.qualificationDate1,
                institution2: values.institution2,
                qualification2: values.qualification2,
                qualificationDate2: values.qualificationDate2,
                institution3: values.institution3,
                qualification3: values.qualification3,
                qualificationDate3: values.qualificationDate3,
                institution4: values.institution4,
                qualification4: values.qualification4,
                qualificationDate4: values.qualificationDate4,
                institution5: values.institution5,
                qualification5: values.qualification5,
                qualificationDate5: values.qualificationDate5,
                scienceornot: values.scienceornot,
                general_mathematics: values.general_mathematics,
                english_language: values.english_language,
                noofsittings: values.noofsittings,
              },{headers:{'x-access-token':localStorage.getItem('token')}})
              .then(res=>{
                if(res.data){
                    setState({ ...state, open: true });
              }
              })
              .catch(err => console.log(err));    
        }}
      >
        {({ submitForm, isSubmitting, values }) => (
          <Form>
              <Paper style={{marginBottom:20, padding:20}}>
              {isSubmitting? <LinearProgress color="secondary" />: null}
                <Grid container direction="column" justify="space-evenly" alignItems="center" style={{marginTop:20}}>
                        <Grid item>
                            <Typography variant="h6" gutterBottom>
                                WAEC / GCE / NECO Info:
                            </Typography>
                        </Grid>
                <Grid container justify="space-evenly" alignItems="center" style={{marginTop:20}}>
                        <Grid item>
                            <FormControl className={mstyles.formWidth}>
                            <InputLabel id="select-scienceornot">Class of WAEC / GCE / NECO </InputLabel>
                            <Field style={{marginBottom:20}} component={Select} name="scienceornot" value={values.scienceornot}>
                                <MenuItem value={3}>Sciences (Pure)</MenuItem>
                                <MenuItem value={2}>Social Sciences</MenuItem>
                                <MenuItem value={1}>Arts</MenuItem>
                            </Field>
                            </FormControl>
                        </Grid>
                        
                        <Grid item>
                            <FormControl className={mstyles.formWidth}>
                            <InputLabel id="select-noofsittings">Number of sittings for the exam(s) </InputLabel>
                            <Field style={{marginBottom:20}} component={Select} name="noofsittings" value={values.noofsittings}>
                                <MenuItem value={3}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={1}>3</MenuItem>
                            </Field>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl className={mstyles.formWidth}>
                                <InputLabel id="select-maths">Mathematics Grade Obtained</InputLabel>
                                <Field style={{marginBottom:20}} component={Select} name="general_mathematics" value={values.general_mathematics}>
                                    <MenuItem value={5}>A</MenuItem>
                                    <MenuItem value={4}>B</MenuItem>
                                    <MenuItem value={3}>C</MenuItem>
                                    <MenuItem value={2}>D</MenuItem>
                                    <MenuItem value={1}>E</MenuItem>
                                    <MenuItem value={0}>F</MenuItem>
                                </Field>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl className={mstyles.formWidth}>
                                <InputLabel id="select-eng">English Grade Obtained </InputLabel>
                                <Field style={{marginBottom:20}} component={Select} name="english_language" value={values.english_language}>
                                    <MenuItem value={5}>A</MenuItem>
                                    <MenuItem value={4}>B</MenuItem>
                                    <MenuItem value={3}>C</MenuItem>
                                    <MenuItem value={2}>D</MenuItem>
                                    <MenuItem value={1}>E</MenuItem>
                                    <MenuItem value={0}>F</MenuItem>
                                </Field>
                            </FormControl>
                        </Grid>
                        
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" gutterBottom style={{marginTop:20}}>
                                Insttitution Attended Info:
                            </Typography>
                        </Grid>
                  <Grid container direction="row" justify="space-evenly" alignItems="center" style={{paddingTop:20}}>
                        
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center"><b>Institution Attended</b></TableCell>
                                    <TableCell align="center"><b>Qualifications Obtained</b></TableCell>
                                    <TableCell align="center"><b>Obtained Date</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <FormControl className={mstyles.formWidthTbl}>
                                            <Field style={{marginBottom:20}}
                                                component={TextField}
                                                name="institution1"
                                                value={values.institution1 || ''}
                                                type="text"
                                                label="Enter institution (required)"
                                                />
                                        </FormControl>
                                    </TableCell>
                                    <TableCell align="center">
                                        <FormControl className={mstyles.formWidthTbl}>
                                            <Field style={{marginBottom:20}}
                                                component={TextField}
                                                name="qualification1"
                                                value={values.qualification1 || ''}
                                                type="text"
                                                label="Enter qualification (required)"
                                                />
                                        </FormControl>
                                    </TableCell>
                                    <TableCell align="center">
                                        <FormControl className={mstyles.formWidthTbl}>
                                            <Field style={{marginBottom:20}}
                                                component={TextField}
                                                name="qualificationDate1"
                                                value={values.qualificationDate1 || ''}
                                                type="date"
                                                label="Enter date"
                                                InputLabelProps={{
                                                    shrink: true,
                                                  }}
                                                />
                                        </FormControl>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <FormControl className={mstyles.formWidthTbl}>
                                            <Field style={{marginBottom:20}}
                                                component={TextField}
                                                name="institution2"
                                                value={values.institution2 || ''}
                                                type="text"
                                                label="Enter institution (optional)"
                                                />
                                        </FormControl>
                                    </TableCell>
                                    <TableCell align="center">
                                        <FormControl className={mstyles.formWidthTbl}>
                                            <Field style={{marginBottom:20}}
                                                component={TextField}
                                                name="qualification2"
                                                value={values.qualification2 || ''}
                                                type="text"
                                                label="Enter qualification (optional)"
                                                />
                                        </FormControl>
                                    </TableCell>
                                    <TableCell align="center">
                                        <FormControl className={mstyles.formWidthTbl}>
                                            <Field style={{marginBottom:20}}
                                                component={TextField}
                                                name="qualificationDate2"
                                                value={values.qualificationDate2 || ''}
                                                type="date"
                                                label="Enter date"
                                                InputLabelProps={{
                                                    shrink: true,
                                                  }}
                                                />
                                        </FormControl>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <FormControl className={mstyles.formWidthTbl}>
                                            <Field style={{marginBottom:20}}
                                                component={TextField}
                                                name="institution3"
                                                value={values.institution3 || ''}
                                                type="text"
                                                label="Enter institution (optional)"
                                                />
                                        </FormControl>
                                    </TableCell>
                                    <TableCell align="center">
                                        <FormControl className={mstyles.formWidthTbl}>
                                            <Field style={{marginBottom:20}}
                                                component={TextField}
                                                name="qualification3"
                                                value={values.qualification3 || ''}
                                                type="text"
                                                label="Enter qualification (optional)"
                                                />
                                        </FormControl>
                                    </TableCell>
                                    <TableCell align="center">
                                        <FormControl className={mstyles.formWidthTbl}>
                                            <Field style={{marginBottom:20}}
                                                component={TextField}
                                                name="qualificationDate3"
                                                value={values.qualificationDate3 || ''}
                                                type="date"
                                                label="Enter date"
                                                InputLabelProps={{
                                                    shrink: true,
                                                  }}
                                                />
                                        </FormControl>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <FormControl className={mstyles.formWidthTbl}>
                                            <Field style={{marginBottom:20}}
                                                component={TextField}
                                                name="institution4"
                                                value={values.institution4 || ''}
                                                type="text"
                                                label="Enter institution (optional)"
                                                />
                                        </FormControl>
                                    </TableCell>
                                    <TableCell align="center">
                                        <FormControl className={mstyles.formWidthTbl}>
                                            <Field style={{marginBottom:20}}
                                                component={TextField}
                                                name="qualification4"
                                                value={values.qualification4 || ''}
                                                type="text"
                                                label="Enter qualification (optional)"
                                                />
                                        </FormControl>
                                    </TableCell>
                                    <TableCell align="center">
                                        <FormControl className={mstyles.formWidthTbl}>
                                            <Field style={{marginBottom:20}}
                                                component={TextField}
                                                name="qualificationDate4"
                                                value={values.qualificationDate4 || ''}
                                                type="date"
                                                label="Enter date"
                                                InputLabelProps={{
                                                    shrink: true,
                                                  }}
                                                />
                                        </FormControl>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <FormControl className={mstyles.formWidthTbl}>
                                            <Field style={{marginBottom:20}}
                                                component={TextField}
                                                name="institution5"
                                                value={values.institution5 || ''}
                                                type="text"
                                                label="Enter institution (optional)"
                                                />
                                        </FormControl>
                                    </TableCell>
                                    <TableCell align="center">
                                        <FormControl className={mstyles.formWidthTbl}>
                                            <Field style={{marginBottom:20}}
                                                component={TextField}
                                                name="qualification5"
                                                value={values.qualification5 || ''}
                                                type="text"
                                                label="Enter qualification (optional)"
                                                />
                                        </FormControl>
                                    </TableCell>
                                    <TableCell align="center">
                                        <FormControl className={mstyles.formWidthTbl}>
                                            <Field style={{marginBottom:20}}
                                                component={TextField}
                                                name="qualificationDate5"
                                                value={values.qualificationDate5 || ''}
                                                type="date"
                                                label="Enter date"
                                                InputLabelProps={{
                                                    shrink: true,
                                                  }}
                                                />
                                        </FormControl>
                                    </TableCell>
                                </TableRow>
                                
                            </TableBody>
                        </Table>
                        </TableContainer>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <Button
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    onClick={submitForm}
                    style={{margin:20 }}
                    >
                        Save and Countinue
                        
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