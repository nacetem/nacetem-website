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

export default function Gstic() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="images/gstic1.png"
          title="Contemplative Reptile"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2">
          G-STIC
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" >
          Digital technologies are becoming increasingly important in all sectors of society, and this is not just 
        happening because of COVID-19. Digital technologies are simply indispensable in developing solutions to 
        change our consumption and production patterns, and building the cornerstone of a sustainable society.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="http://link.gstic.org/ls/click?upn=SkiY1GmmdIAP7j-2FyjnNkE2p-2B80kdZ-2FmqoVfTJXgHrXmd-2BTRMaZt-2Bsft8N4Ubu1UU3De0pqkQ7A2qYLlKvx2JvyidPbdZOkstmAuID-2BKAuLcSHSDfJSN9v-2BlRKtp30jP65-2FH5H5jAWNBnpjDRD7ElJD2l83a-2BFsvgxeVSs5mHpoICPZdMsBN0ygHuYHetyBjYsE7xHhrwWzZTFLwhFZGNs5ANXEEDafxyS3NnbUk4-2BxY-3D5t2P_qlv21h-2FhqCy24-2B0X4FU0DDS02y9SsuCXBahge3-2F0-2F-2BfYG5j-2BV-2FNEoCk2PgpbJVuNibfymcGc5gc5aWVV-2FL-2Bcn6153zZAeR7R6jO7VrXesLEp2c8ofWmMTx8Gly715Ddmoh5ol0a3fRL4uU0XYQ5-2Br64czN5-2F0csjlo4RcZYs5ZtRS9RbvfG17uU0Tr00o-2BZPN5IID11iKWAgVSIWOxJU1GhiGDo5zqgyqkWU2hDvMNm57e5svXL-2BuPICK0W5TQlEhh3WaGS-2B2tDz3-2B6vS-2BzMRoJoqR24UmOlSD8kmqQMjohf1Bm9GjExzu8K9B2A5vrzT0bTmRhauL87bSM8Xfym-2FuV-2BDYwwCLyZymhUGxJZbpW9Nor-2BzI3-2BMFkN6qx-2Fb6WU4ahCct1-2FyxPKRZgvoXW6d6qhKy9VcSwTlnKDHUkHXaMjs48J-2BZTPssDOuH2-2FdwiP4x4rC4fVaojBeFjtSzjWaQ-3D-3D">
          Learn More
        </Button>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
