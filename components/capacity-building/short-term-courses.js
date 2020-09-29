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

export default function ShortTermCourses() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="images/slide1bg.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6" className={classes.boxShadow}>
            Short Term Courses
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          NACETEM offers highly practical insights into current issues in STI management 
          and global development in combination with a learning methodology specifically 
          designed to meet the 21st century challenges. Organisation are demanding 
          leaders/experts 
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
