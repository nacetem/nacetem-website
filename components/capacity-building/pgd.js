import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  boxShadow: {boxShadow: '6px 6px 6px black',},
});

export default function Pgd() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="images/pgd_img1.jpg"
          title="Postgraduate Diploma Course in Technology Management"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6" className={classes.boxShadow}>
            PGD Technology Management
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Applications are invited from suitably qualified candidates for admission into one year
           part-time Postgraduate Diploma Course in Technology Management at Ile Ife, 
           Lagos Study Centre,
           Abuja Study Centre,
           Bayelsa Study Centre,
           Enugu Study Centre,
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary">
          Learn More
        </Button>
        <Button size="small" color="primary">
          Share
        </Button>
       
      </CardActions>
    </Card>
  );
}
