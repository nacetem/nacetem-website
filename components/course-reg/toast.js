import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Toast(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Snackbar open={props.openToast} autoHideDuration={8000} onClose={props.handleCloseToast}>
        <Alert onClose={props.handleCloseToast} severity="success">
          {props.excelFeedBack}
        </Alert>
      </Snackbar>
    </div>
  );
}
