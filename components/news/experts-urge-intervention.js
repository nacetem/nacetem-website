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

export default function ExpertsUrgeIntervention() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {/* <CardMedia
          image="images/auda_nepad.jpg"
          title="AUDA-NEPAD NACETEM COLLABORATION"
        /> */}
        
        <img src="images/dg_expert_urge_interventn.jpg" className={classes.media}/> 
      
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
          Experts urge intervention
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Experts urge intervention for Nigeria’s fragile innovation system
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary" href="https://m.guardian.ng/business-services/experts-urge-intervention-for-nigerias-fragile-innovation-system/amp/?fbclid=IwAR3C4rrinkdQSuKs3FN8WlOStdlmLJdD_PiL9Pp4qFWu8mG7Kwz8powjL7k">
          Learn More
        </Button>
        <Button size="small" color="primary">
          Share
        </Button>
        
      </CardActions>
    </Card>
  );
}
