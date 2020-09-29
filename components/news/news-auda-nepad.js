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
    width:"100%",
    objectFit: "fill",
  },
  
});

export default function NewsAudaNepad() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {/* <CardMedia
          image="images/auda_nepad.jpg"
          title="AUDA-NEPAD NACETEM COLLABORATION"
        /> */}
        
        <img src="images/auda_nepad.jpg" className={classes.media}/> 
      
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            AUDA-NEPAD
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          AUDA-NEPAD NIGERIA Engages NACETEM To Carry Out 2nd Peer Review Of The
           Country’s Socio-economic Development
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary" href="http://citymirrornews.com/news/2020/24/auda-nepad-nigeria-engages-nacetem-to-carry-out-2nd-peer-review-of-the-countrys-socio-economic-development/">
          Learn More
        </Button>
        <Button size="small" color="primary">
          Share
        </Button>
        
      </CardActions>
    </Card>
  );
}
