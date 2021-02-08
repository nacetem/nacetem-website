import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Tooltip from '@material-ui/core/Tooltip';
import FilterListIcon from '@material-ui/icons/FilterList';
import Paper from '@material-ui/core/Paper';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import RankedTable from './ranked-table'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
////////////////////
export default function Ranked(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <div>
        <IconButton color="secondary" aria-label="Rank for admission" onClick={handleClickOpen}>
            <Tooltip title="Rank for admission">
              <FilterListIcon />
            </Tooltip>
          </IconButton>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Button edge="end" autoFocus color="inherit" onClick={handleClose}>
              <ArrowBackIcon/>&nbsp;&nbsp;Go Back
            </Button>
          </Toolbar>
        </AppBar>
            <div style={{margin:30, padding:10}}>
                <RankedTable ranked={props.ranked} />                
            </div>
      </Dialog>
    </div>
  );
}
