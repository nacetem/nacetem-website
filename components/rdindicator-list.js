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

export default function RDList() {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={3}>
      <List component="nav" aria-label="list of on-going projects">
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Research and Experimental Development (R&amp;D) Survey; and Innovation Survey. The R&amp;D survey collects data on R&amp;D activities performed  IN-HOUSE  in  Nigeria  within  a reference year. It is undertaken as a census of all R&amp;D institutions  in  four  key  sectors  of  the  economy: Government  (Research  Institutes),  Higher  Education, Business and Private non-profit. The survey collects data on R&amp;D inputs: personnel and expenditure and outputs – publications, patents, etc.  Some of the established R&amp;D Indicators include:" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Gross Expenditure on R&amp;D (GERD)" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="GERD as a Percentage of GDP (R&amp;D Intensity)" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Researchers per Million Population" />
        </ListItem>
      </List>
    </Paper>
  );
}
