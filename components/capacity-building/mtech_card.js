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
import Link from 'next/link'


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  boxShadow: {boxShadow: '6px 6px 6px black',},
});

export default function Mtech() {
  const classes = useStyles();
  return (
    
    <div className={maincss.mtech}>
        <img src='images/mtech.jpg' alt='Master of tech img' className={maincss.newsTopImage}/>
        <div className={maincss.newsContent}>
           <Typography gutterBottom variant="h6" component="h6">
             Master Technology Management
           </Typography>
           <Typography variant="body2" color="textSecondary" component="p">
              Applications are invited from suitably qualified candidates for admission 
              into full-time and part-time Masters degrees programme at Federal University
              of Technology Minna in Collaboration  with NACETEM for 2018/2019 Academic Session. 
           </Typography>
        </div>
        <div className={maincss.newsFooter} >
          <Button size="small" color="primary">
          <Link href="/mtech" color="inherit">
              <a>Learn More</a>
            </Link>
          </Button>
          <Button size="small" color="primary">
            Share
          </Button>
        </div>
    </div>
     //<Card className={classes.root}>
    //   <CardActionArea>
    //     <CardMedia
    //       className={classes.media}
    //       image="images/mtech.jpg"
    //       title="Masters degrees programme in Technology Management"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h6" component="h6" className={classes.boxShadow}>
    //         Master Technology Management
    //       </Typography>
    //       <Typography variant="body2" color="textSecondary" component="p">
    //       Applications are invited from suitably qualified candidates for admission 
    //       into full-time and part-time Masters degrees programme at Federal University
    //        of Technology Minna in Collaboration  with NACETEM for 2018/2019 Academic Session. 

    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions>
    //     <Button size="small" color="primary">
    //       Learn More
    //     </Button>
    //     <Button size="small" color="primary">
    //       Share
    //     </Button>
    //   </CardActions>
    // </Card>
  );
}
