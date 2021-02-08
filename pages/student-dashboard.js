
import ElevateAppBar from '../components/header'
import Head from 'next/head'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

export default function StudentDashboard() {
    return <>
        <ElevateAppBar/>
        <Head>
            <title>Student Dashboard (NACETEM)</title>
        </Head>
        <Grid item container direction="row" >
            <Grid item xs={12} lg={2}>
                            
            </Grid>
            <Grid item xs={12} lg={8}>
                <Paper style={{margin:20, padding:30}}>
                <Alert severity="info">
                    <Typography variant="h6" gutterBottom>
                       Your application is successfully submitted. You will be mailed if your admission is successful
                    </Typography>
                </Alert>
                    
                </Paper>
            </Grid>
            <Grid item xs={12} lg={2}>

            </Grid>
        </Grid>
    </>

}