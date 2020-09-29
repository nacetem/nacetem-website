// import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Head from 'next/head'
import styles from '../styles/site.module.css'
import TransitionsModal from '../lib/fmodal'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core/styles';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import BottomMenu from './bottom-navigation'
import Drawer from '@material-ui/core/Drawer';
import HomeIcon from '@material-ui/icons/Home';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import mstyles from '../styles/carousel.module.css'
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import DoneIcon from '@material-ui/icons/Done';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import DescriptionIcon from '@material-ui/icons/Description';
import Link from 'next/link'
import ButtonBase from '@material-ui/core/ButtonBase';
import SchoolIcon from '@material-ui/icons/School';
import BuildIcon from '@material-ui/icons/Build';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  myflex: {
    flex:1,
  },
  titleIcon:{
    fontSize:50,
    color:'maroon',
    alignItems:'centre'
  },
  news:{
    display:'flex',
    flexGrow: 1,
    flexFlow: 'row wrap',
    padding:10,
    justifyContent:'center',
  },
  newsItem:{
    margin:10
  },
  m:{
    marginLeft:20,
    marginTop:20,
  },
  mt:{
    marginTop:20,
  },
  fright: {
    float:"right",
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
    
}));
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar({props}) {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [policyRes, setpolicyRes] = React.useState(null);
  const [capacity, setcapacity] = React.useState(null);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  
  const open = Boolean(anchorEl);
  const handleToggle = () => setOpenDrawer(!openDrawer);
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };
  const handleCapacity = (event) => {
    setcapacity(event.currentTarget);
  };
  const handleCloseCapacity = () => {
    setcapacity(null);
  };
  const handlePolicyRes = (event) => {
    setpolicyRes(event.currentTarget);
  };
  const handleClosePolicyRes = () => {
    setpolicyRes(null);
  };
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (<React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar style={{backgroundColor:"white", color:"maroon"}} className={mstyles.anchor}>
          <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon onClick={handleToggle}/>
          </IconButton>
          <img src="logo.png" alt="logo" with="50" height="50" className={classes.menuButton}/>
            <Typography variant="h6" className={classes.myflex}>
              NACETEM
            </Typography>
            <div>
            
            <Button color="inherit">
              <Link href="/">
                <a>
                  <Tooltip title="Home">
                    <HomeIcon/>
                  </Tooltip>
                </a>
              </Link>
            </Button>
            <Button color="inherit">
              <Link href="/about" color="inherit"><a className={styles.btn}>About Us</a></Link>
            </Button>
            
            <Button aria-controls="simple-menu" color="inherit" aria-haspopup="true" onClick={handlePolicyRes}>
              Policy Research
              </Button>
              <Menu 
                id="simple-menu"
                anchorEl={policyRes}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(policyRes)}
                onClose={handleClosePolicyRes}
              >
                <MenuItem onClick={handleClose} style={{color:"maroon"}}><TrendingUpIcon/>&nbsp;Ongoing Project</MenuItem>
                <MenuItem onClick={handleClose} style={{color:"maroon"}}><CheckCircleOutlineIcon/>&nbsp;Completed Project</MenuItem>
                <MenuItem onClick={handleClose} style={{color:"maroon"}}><SignalCellularAltIcon/>&nbsp;STI Indicator</MenuItem>
                <MenuItem onClick={handleClose} style={{color:"maroon"}}><DescriptionIcon />&nbsp;Publication</MenuItem>
              </Menu>
              <Button color="inherit">G-STIC</Button>
              <Button aria-controls="simple-menu" color="inherit" aria-haspopup="true" onClick={handleCapacity}>
              Capacity Building
              </Button>
              <Menu 
                id="simple-menu"
                anchorEl={capacity}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(capacity)}
                onClose={handleCloseCapacity}
              >
                <MenuItem onClick={handleClose} style={{color:"maroon"}}>
                  <Avatar alt="mtech jpg" src="images/mtech.jpg" className={classes.large} />
                  {/* <SchoolIcon /> */}
                  &nbsp;<Button color="inherit">
                    <Link href="/mtech" color="inherit">
                      <a className={styles.btn}>Masters in Technology Management</a>
                    </Link>
                  </Button>
                  
                </MenuItem>
                  <Divider variant="inset" component="li" />
                <MenuItem onClick={handleClose} style={{color:"maroon"}}>
                <Avatar alt="pgd jpg" src="images/pgd_img1.jpg" className={classes.large} />
                {/* <SchoolIcon /> */}
                &nbsp;<Button color="inherit">
                    <Link href="/pgd" color="inherit">
                      <a className={styles.btn}> Post Gradute Diploma</a>
                    </Link>
                  </Button>
               
                </MenuItem >
                  <Divider variant="inset" component="li" />
                <MenuItem onClick={handleClose} style={{color:"maroon"}}>
                  {/* <BuildIcon /> */}
                  <Avatar src="images/capacity2.png" className={classes.large} />

                  &nbsp;2019 Capacity Development Programme</MenuItem>
              </Menu>
              <Button color="inherit">Upcomings</Button>
              <Button color="inherit">Contact Us</Button>

              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Tooltip title="User Account">
                <AccountCircle />
                </Tooltip>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>             
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      
    </React.Fragment>
  );
}
