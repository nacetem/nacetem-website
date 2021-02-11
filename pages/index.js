import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Main from './../components/main'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
  skmarginxx:{
    margin: theme.spacing(9),
  }
  
}))
export default function Home() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    // window.addEventListener('load', setLoading(true))
    setLoading(false)
    return () => {
          // Clean up ......
          setLoading(false)     
        };
      }, [loading, setLoading]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (<Container maxWidth="lg">
          {loading ? 
        
        <Grid container direction="row" justify="space-between">
          <Grid container direction="column" justify="space-between">
            <Grid container direction="row" justify="space-between" style={{margin:20}}>
              <Grid item> 
                <Skeleton variant="circle" width={40} height={40} />
              </Grid>
              <Grid item> 
                <Skeleton variant="text" width={800} />
              </Grid>
            </Grid>
            <Grid item>
              <Skeleton variant="rect"   height={400} style={{margin:20}}/>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="space-between">
            <Grid item> 
              <Skeleton variant="rect" width={300} height={200} style={{margin:20}}/>
            </Grid>
            <Grid item>
              <Skeleton variant="rect" width={300} height={200} style={{margin:20}} />
            </Grid>
            <Grid item>
              <Skeleton variant="rect" width={300} height={200} style={{margin:20}} />
            </Grid>
          </Grid>
        </Grid> : <Main/>
        }
    </Container>
    )
}
