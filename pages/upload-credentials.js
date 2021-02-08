import { Button, LinearProgress } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import mstyles from '../styles/uploadCredentials.module.css'
import { Paper } from '@material-ui/core';
import DashboardSidebar from './dashboard-sidebar'
import ElevateAppBar from '../components/header'
import Head from 'next/head'
import Typography from '@material-ui/core/Typography';
import Dropzone from 'react-dropzone';
import {useStateValue} from '../components/course-reg/state-provider'
import axios from 'axios'
import {API_URL} from '../utils/constants'
import React, { useState, useRef } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { useRouter } from 'next/router'
import Alert from '@material-ui/lab/Alert';


export default function UploadsCredentials() {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const [{loggedIn, user_id, student_id}, dispatch] = useStateValue();
  const [file, setFile] = useState(null); // state for storing actual image
  const [previewSrc, setPreviewSrc] = useState(''); // state for storing previewImage
  const [errorMsg, setErrorMsg] = useState('');
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images
  const dropRef = useRef(); // React ref for managing the hover state of droppable area 
  const router = useRouter()
  const { vertical, horizontal, open } = state;
  const handleClose = () => {
    setState({ ...state, open: false });
    router.push('/experience')
  };
  const onDrop = (files) => {
  const [uploadedFile] = files;
    setFile(uploadedFile);  const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
  };

  const updateBorder = (dragState) => {
    if (dragState === 'over') {
      dropRef.current.style.border = '2px solid #000';
    } else if (dragState === 'leave') {
      dropRef.current.style.border = '2px dashed #e9ebeb';
    }
  };
  const handleOnSubmit = async (event) => {
    event.preventDefault(); 
    console.log("On submit called") 
    try {
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('user_id', user_id);
        setErrorMsg('');
        const result = await axios.post(`${API_URL}/credentials`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'x-access-token': localStorage.getItem('token')
          }
        });
        result.data?  setState({ ...state, open: true }): null

      } else {
        setErrorMsg('Please select a file to add.');
      }
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };
 return <>
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
          <b> Saved successfully. Continueing to Job Experience</b>
          </Alert>
        </Snackbar>
        <Typography variant="h4" gutterBottom>
            Upload Credentials
        </Typography>
        <Grid container direction="column" justify="space-evenly" alignItems="center" style={{marginTop:20}}>
        <Paper>
        <form encType="multipart/form-data" className={mstyles.searchForm} onSubmit={handleOnSubmit}>
          <div className={mstyles.uploadSection}>
              <Dropzone onDrop={onDrop} onDragEnter={() => updateBorder('over')}
                onDragLeave={() => updateBorder('leave')}> 
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps({ className: 'drop-zone' })} ref={dropRef}>
                    <input {...getInputProps()} />
                    <h2 className={mstyles.dropZone}><b>Drag and drop a file OR click here to select a file</b></h2>
                    {file && (
                      <div>
                        <strong>Selected file:</strong>
                        {file.name}
                      </div>
                    )}
                  </div>
                )}
              </Dropzone>
              {previewSrc ? (
                isPreviewAvailable ? (
                  <div className={mstyles.imagePreview}>
                    <img className={mstyles.previewImage} src={previewSrc} alt="Preview" />
                  </div>
                ) : (
                  <div className={mstyles.previewMessage}>
                    <p>No preview available for this file</p>
                  </div>
                )
              ) : (
                <div className={mstyles.previewMessage}>
                  <p>Image preview will be shown here after selection</p>
                </div>
              )}
          </div>
            <Button
                variant="contained"
                color="primary"
                type = "submit"
                style={{margin:20 }}
                >
                   Upload 
            </Button>
          </form>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={2}>
        
      </Grid>
    </Grid>
 
  
</>
}




  