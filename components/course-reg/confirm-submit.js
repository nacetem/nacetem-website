import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

export default function ConfirmSubmit(props) {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleSubmit}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Final Application Form Submission?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Once you submit you cannot see this page again. Are you sure you want to submit finally? 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleSubmit} color="primary" startIcon={<ThumbUpIcon />}>
            Confirm Submittion
          </Button>
          &nbsp;  &nbsp; &nbsp;
          <Button onClick={props.handleCancel} color="primary" autoFocus startIcon={<CancelOutlinedIcon />}> 
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
