import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CompletedList() {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={3}>
      <List component="nav" aria-label="list of on-going projects">
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="The Supply of High Quality Entrepreneurs in Developing Countries: evidence from Nigeria” (funded by the Private Enterprise Development in Low-Income Countries (PEDL) project of the Centre for Economic Policy Research (CEPR), UK) 2014 - 2016" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Doing Research in Nigeria: Assessing Social Science Research Systems in a Global Perspective' (funded by the Global Development Network (GDN), New Delhi, India) 2018-2019" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Technology Capability and Innovation in Machine and Spare Parts Fabrication Industry in South-Western Nigeria" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary=" Female Acquisition of TVET and its Impact on Socio-economic Development in Nigeria " />
        </ListItem>
      </List>
    </Paper>
  );
}
