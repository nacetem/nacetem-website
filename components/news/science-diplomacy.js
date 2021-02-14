import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import maincss from '../../styles/main.module.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ScienceDiplomacy() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="images/science_diplomacy.jpg"
          title="Science Diplomacy"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2">
          Science Policy
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" >
          National Workshop on Science Diplomacy
          </Typography>
          <Typography gutterBottom variant="body1">
          Venue: Zoom<br/>
          Date: Tue 9th and Wed 10th, March 2021
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="#">
          Learn More
        </Button>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
