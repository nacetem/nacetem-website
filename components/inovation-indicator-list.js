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

export default function InnovationList() {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={3}>
      <List component="nav" aria-label="list of on-going projects">
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="The innovation survey on the other hand collects data on the state of innovation of Nigerian enterprises within a reference  period.  Issues  such  as  types  of  innovations, innovation activities, barriers to innovation, government support for innovation and intellectual property rights are measured, among other issues. It is undertaken in two key sectors  of  the  economy:  manufacturing  and  services. Some of the established Innovation Indicators include:" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Innovation Intensity" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Top Innovation Collaboration Partners" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Top Motivation for Innovation" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Top Obstacles to Innovation" />
        </ListItem>
      </List>
    </Paper>
  );
}
