import React from 'react'
import Slider from './carousel'
import { makeStyles } from '@material-ui/core/styles';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import { Paper } from '@material-ui/core';
import FbPage from './fb-page';
import {ProfileDarkTheme} from './tw-page'
import NacetemAisr from './news/nacetem-aisr'
import NewsAudaNepad from './news/news-auda-nepad'
import Gstic from './news/gstic'
import Mtech from './capacity-building/mtech'
import Pgd from './capacity-building/pgd'
import ShortTermCourses from './capacity-building/short-term-courses'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ElevateAppBar from './header'
import BottomMenu from './bottom-navigation'



export default function Main(){
  const useStyles = makeStyles(() => ({
    container: {
      display: 'flex', /* or inline-flex */
      '& > *': {
          // margin: theme.spacing(5),
          // width: theme.spacing(60),
          // height: theme.spacing(60),
      },
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '800',
      maxHeight: '300',
      marginLeft: 'auto',
      marginRight: 'auto',
      position:'relative'
    },
    content: {
      position: 'absolute', /* Position the background text */
      bottom: 0, /* At the bottom. Use top:0 to append it to the top */
      background: '#d2a679', /* Fallback color */
      background: 'rgba(0, 0, 0, 0.5)', /* Black background with 0.5 opacity */
      color: '#f1f1f1', /* Grey text */
      width: '100%', /* Full width */
      padding: '20px', /* Some padding */
    },
    libimage:{
      width:'100%',
      height:300,
      objectFit:'cover'
    }
  })
  )
  const classes = useStyles(); 
        return(<><ElevateAppBar/>
      <Grid container direction="row" justify="space-between">
        <div style={{backgroundColor:"#f8f2ec", width:"100%"}}>
          <Slider/>
        </div>
      </Grid>  
      <Grid container direction="column" justify="space-between" style={{marginTop:30}}>
        <Paper elevation={0} style={{padding:20}}>
              {/* <h1><AnnouncementIcon fontSize="inherit"/>Latest News</h1> */}
              <Grid container>
                <Typography variant="h5" component="h5" gutterBottom >
                  Latest News             
                </Typography>
              </Grid>
              <Grid container direction="row" justify="space-between" spacing={2}>
                <Grid item lg={8} >
                  <Grid item container direction="row" justify="flex-start" flexGrow= "1" spacing={2}>
                    <Grid item ><Gstic/></Grid>
                    <Grid item><NewsAudaNepad/></Grid>
                    <Grid item><NacetemAisr/></Grid>
                    <Grid item><NacetemAisr/></Grid>
                  </Grid>
                </Grid>
                <Grid item lg={4}>
                  <Grid item container direction="column" justify="center" alignItems="flex-end">
                    <Grid item >
                      <FbPage/>
                    </Grid>
                    <Grid item >
                      <ProfileDarkTheme/>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
                {/* <Paper className={classes.newsItem}><ProfileDarkTheme/></Paper> */}
        </Paper>    
      </Grid>
      <Grid container direction="column" justify="space-between" flexGrow= "1" style={{marginTop:30}}>
        <Paper elevation={2}>
          <Grid container direction="column" style={{padding:20}}>
            <Grid container>
              <Grid item>
                <Typography variant="h5" component="h5" gutterBottom>
                    Our elibrary              
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="column" flexGrow= "1">
              <Grid item>
                <div className={classes.container}>
                  <img src="images/slide1bg.jpg" alt="library img" className={classes.libimage}/>
                  <Typography variant="h5" gutterBottom className={classes.content}> 
                    Check out our e-library system
                    at <Button variant="contained" style={{color:"maroon"}} href="nacetemlibrary.com">nacetemlibrary.com</Button>
                  </Typography>
                  
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Paper> 
      </Grid>
      <Grid container direction="row" justify="space-between" flexGrow= "1" style={{marginTop:30}}>
        <Paper elevation={0}>
          <Grid container direction="row" justify="space-between" flexGrow= "1" style={{padding:20}}>
            <Grid container>
              <Typography variant="h5" component="h5" gutterBottom >
                Capacity Building            
              </Typography>
            </Grid>
            {/* <Paper className={classes.paper}>xs=6 sm=3</Paper> 
            xs={12} lg={4} xl={4}*/}

            <Grid container direction="row" justify="space-between" flexGrow= "1" >
              <Grid item><Mtech/></Grid> 
              <Grid item><Pgd/> </Grid>
              <Grid item><ShortTermCourses/></Grid>
              </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item style={{marginTop:30}}>
        <BottomMenu/>
      </Grid>
        </>
    )
}