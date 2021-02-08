import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function OngoingList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="list of on-going projects">
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="National Research and Development Survey (2016 - 2018)" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="National Business Innovation Survey (2016-2018)" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="National Informal Sector Innovation Survey (Pilot Survey)" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Technology Audit of Selected Economic Sectors in Nigeria" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Assessment of the Capabilities and Potentials of the Federal Ministry of Science &amp; Technology and its Agencies" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="The  Design  and  Impact  of  an  Apprenticeship-based  Entrepreneurship  Intervention  in  Nigeria  (Sponsor:  IDRC Collaborator: OAU-CGSPS)" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Building a Competitive and Socially Inclusive Local Pharmaceutical Manufacturing in West Africa: The Nigerian Case Study (Sponsored by ACTS-Kenya)
" />
        </ListItem>
      </List>
    </div>
  );
}
