import React from 'react';
import download from 'downloadjs';
import axios from 'axios';
import {API_URL} from '../utils/constants'
import {useStateValue} from '../components/course-reg/state-provider'
import IconButton from '@material-ui/core/IconButton';
import GetAppIcon from '@material-ui/icons/GetApp';
import { Paper } from '@material-ui/core';
import ElevateAppBar from '../components/header'
import Head from 'next/head'
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import { FormatListNumberedRtl } from '@material-ui/icons';


const Profile = () => {
  const [{loggedIn, user_id, student_id}, dispatch] = useStateValue();
  const [filesList, setFilesList] = React.useState([]);
  const [errorMsg, setErrorMsg] = React.useState('');  
  const [students, setStudents] = React.useState({});
  const [errorStd, setErrorStd] = React.useState('');  
  const [downloadProgress, setdownloadProgress] = React.useState(false);
  
  React.useEffect(() => {
    getStudents();
    getFilesList();
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

  const getFilesList = async () => {
    try {
      const { data } = await axios.post(`${API_URL}/usercredentials`, {user_id}, {
          headers: {
            'x-access-token': localStorage.getItem('token')
          }
        });
      setErrorMsg('');
      setFilesList(data);
      console.log(data)
    } catch (error) {
      error.response && setErrorMsg(error.response.data);
    }
  }; 

  const downloadFile = async (id, path, mimetype) => {
    setdownloadProgress(true)
    try {
      downloadProgress ? <LinearProgress />: null

      const result = await axios.get(`${API_URL}/download/${id}`, {
        responseType: 'blob'
      }, {
        headers: { 'x-access-token': localStorage.getItem('token')
        }
      });
      const split = path.split('/');
      const filename = split[split.length - 1];
      setErrorMsg('');
      result.data? download(result.data, filename, mimetype): null;
      setdownloadProgress(false)
       return;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg('Error while downloading file. Try again later');
      }
    }
  };
  return <>
    <ElevateAppBar/>
    <Head>
        <title>Course Registration Profile (NACETEM)</title>
    </Head>
    
    <Grid item container direction="row" >
      <Grid item xs={12} lg={2}>
        
      </Grid>
      <Grid item container xs={12} lg={8} style={{margin:30}}>
        <Paper>
          <Grid item xs={12} lg={4}>
          <p style={{padding:20}}>
            <p>Surname: <b>{students.surname}</b></p>
            <p>Middle Name: <b>{students.mname}</b></p>
            <p>First Name: <b>{students.fname}</b></p>
            <p>Study Centre: <b>{students.studyCentre}</b></p>
            <p>Preferred Master: <b>{students.preferred}</b></p>
            <p>Date of Birth: <b>{students.dob}</b></p>
            <p>Gender: <b>{students.gender}</b></p>
            <p>Religion: <b>{students.religion}</b></p>
            <p>Marital Status: <b>{students.maritalStatus}</b></p>
            <p>Home Address: <b>{students.home_add}</b></p>
            <p>Postal Address: <b>{students.postal_add}</b></p>
            <p>Personal Phone: <b>{students.personal_phone}</b></p>
            <p>Email: <b>{students.email}</b></p>
          </p>
          </Grid>
          <Grid item xs={12} lg={4}>
            <h2>Credentials</h2><hr/>
          <ol>
              {filesList.length > 0 ? (
                  filesList.map(({ credential_id, file_path, file_mimetype }) => (
                      <li>
                          <a
                          href="#/"
                          onClick={() =>
                              downloadFile(credential_id, file_path, file_mimetype)
                          }
                          >{file_path}
                            <IconButton color="primary" aria-label="file path">
                              <GetAppIcon />
                            </IconButton>
                            
                          </a>
                      </li>
                      
                  )
                  )
              ) : (
                  
                  <p> No files found. Please add some.</p>
              )
              }
          </ol>
          </Grid>
          </Paper>
      </Grid>
      <Grid item xs={12} lg={2}>
        
      </Grid>
    </Grid>
    :<h3>No profile data is availabele</h3>
  
  </>
}

export default Profile

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }