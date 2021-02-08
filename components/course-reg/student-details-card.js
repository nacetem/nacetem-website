import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import download from 'downloadjs';
import axios from 'axios'
import {API_URL} from '../../utils/constants'
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },

  media: {
    height: 260,
    width: "100%",
    objectFit: "contain",
    // paddingTop: '56.25%', // 16:9,
  },
  
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[200],
  },
}));

export default function StudentCard(props) {
  const [checked, setChecked] = React.useState(true);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');
  const [loading, setLoading] = React.useState(false); 
  const handleChange = (event) => {
    setChecked(event.target.checked);
  }; 
  const downloadFile = async (id, path, mimetype) => {
  setLoading(true)
  
    try {
      const result = await axios.get(`${API_URL}/preview/${id}`, {
        responseType: 'blob'
      }, {
        headers: { 'x-access-token': localStorage.getItem('token')
        }
      });
      const split = path.split('/');
      const filename = split[split.length - 1];
      setErrorMsg('');
      result.data? download(result.data, filename, mimetype): null
      setLoading(false)
       return;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg('Error while downloading file. Try again later');
      }
    }
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
      
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
             <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        
        title={props.fname}
        subheader="subheader here"
      />
      <CardMedia
        className={classes.media}
        image="images/profile2.png"
        title="Sutdent Passport"
      />
      <CardContent>
        <Grid container>
          <Grid item>
            <div style={{margin:10}}>
              <Typography variant="body" color="textSecondary" component="p">
              <small>First Name:</small><br/>
                <b>{props.fname}</b>
              </Typography>
            </div>
          </Grid>

          <Grid item>
            <div style={{margin:10}}>
              <Typography variant="body" color="textSecondary" component="p">
              <small>Middle Name:</small><br/>
                <b>{props.mname}</b>
              </Typography>
            </div>
          </Grid>

          <Grid item>
            <div style={{margin:10}}>
              <Typography variant="body2" color="textSecondary" component="p">
                <small>Last Name:</small><br/>
                <b>{props.surname}</b>
              </Typography>
            </div>
          </Grid>
        </Grid>
        
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
        <IconButton aria-label="Download photograph" onClick={() => downloadFile(props.student_id, props.photo_path, props.photo_mimetype)}>
        {loading? <CircularProgress size={68}/> : null}
        <Tooltip title="Download photograph">
          <CloudDownloadIcon />
          </Tooltip>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Admission Status:</Typography>
          <Typography paragraph>
           ... processing
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
