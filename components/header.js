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
import { useRouter } from 'next/router'
import {useStateValue} from './course-reg/state-provider'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import maincss from '../styles/main.module.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';


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
  const [more, setMore] = React.useState(null);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const router = useRouter()
  const [{loggedIn}, dispatch] = useStateValue();
  
  const open = Boolean(anchorEl);
  const handleToggle = () => setOpenDrawer(!openDrawer);
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };
  const handleMore = (event) => {
    setMore(event.currentTarget);
  };
  const handleCapacity = (event) => {
    setcapacity(event.currentTarget);
  };
  const handleCloseCapacity = () => {
    setcapacity(null);
  };
  const handleCloseMore = () => {
    setMore(null);
  };
  const handlePolicyRes = (event) => {
    setpolicyRes(event.currentTarget);
  };
  const handleClosePolicyRes = () => {
    setpolicyRes(null);
  };
  
  const Items = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handlSignOut = () => {
    localStorage.removeItem('token');
    dispatch({type:'LOGGEDOUT', auth:false})
    router.push('/signin')
    setAnchorEl(null);
  };
  const handleSignUp = ()=>{
    router.push('/sign-up')
  }
  const handleAdmin = ()=>{
    router.push('/admin-dashboard')
  }
  
  const handleProfile = ()=>{
    router.push('/profile')
    setAnchorEl(null);
  }
  
      
  return (<React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar style={{backgroundColor:"white", color:"maroon", paddingTop:10}}>
          <Toolbar>
            <Grid container >
              <Grid item xs={12} lg={1}>
                <Link href="/">
                  <a><img src="logo.png" className={maincss.rotate} alt="logo" with="100" height="100"/></a>
                </Link>
              </Grid> 
              <Grid item xs={12} lg={3}>         
               <Link href="/" > 
                <a><h2>National Centre for  <br/>Technology Management  <br/> (NACETEM)</h2></a>
               </Link>
               </Grid> 
               <Grid item xs={12} lg={3}>
                
               </Grid>
               <Grid item xs={12} lg={5}>
               <div >
                  <div className={maincss.social}>
                      <IconButton color="primary" aria-label="upload picture" component="span">
                        <FacebookIcon/>
                      </IconButton>
                      <IconButton color="primary" aria-label="upload picture" component="span">
                        <TwitterIcon/>
                      </IconButton>
                      <IconButton color="default" aria-label="upload picture" component="span">
                        <ContactPhoneIcon/>
                      </IconButton>
                  </div>
                  <Button color="inherit">
                    <Link href="/">
                      <a>
                        <Tooltip title="Home">
                          <HomeIcon/>
                        </Tooltip>
                      </a>
                    </Link>
                  </Button>
                  <Button aria-controls="simple-menu" color="inherit" aria-haspopup="true" onClick={handlePolicyRes}>
                    <img src="/images/research_img.png" height="30" width="30" alt=""/>Policy Research
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
                      <MenuItem style={{color:"maroon"}}>
                        <Avatar alt=" " src="images/on_going_img.png" className={classes.large} />&nbsp;
                        <Link href="/on-going-projects">
                          <a>Ongoing Project</a>
                        </Link>
                      </MenuItem>
                      <MenuItem style={{color:"maroon"}}>
                        <Avatar alt=" " src="images/completed_img2.jpg" className={classes.large} />&nbsp;
                        <Link href="/completed-projects">
                          <a>Completed Project</a>
                        </Link>
                        </MenuItem>
                      <MenuItem style={{color:"maroon"}}>
                        <Avatar alt=" " src="images/indicator_img.png" className={classes.large} />&nbsp;
                        <Link href="/sti-indicators">
                          <a>STI Indicator</a>
                        </Link>
                        </MenuItem>
                      <MenuItem style={{color:"maroon"}}>
                        <Avatar alt=" " src="images/publication_img.png" className={classes.large} />&nbsp;
                        <Link href="/publications">
                          <a>Publication</a>
                        </Link>
                        </MenuItem>
                    </Menu>
                    
                    <Button aria-controls="simple-menu" color="inherit" aria-haspopup="true" onClick={handleCapacity}>
                    <img src="/images/capacity_building_img.png" height="30" width="30" alt=""/> Capacity Building
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

                        &nbsp;Capacity Development Programme</MenuItem>
                    </Menu>

                  <Button aria-controls="simple-menu" color="inherit" aria-haspopup="true" onClick={handleMore}>
                    <Tooltip title="More">
                      <MenuIcon/>
                    </Tooltip>
                    <Tooltip title="More">
                    <ExpandMoreIcon/>
                    </Tooltip>
                  </Button>
                  <Menu 
                    id="simple-menu"
                    anchorEl={more}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(more)}
                    onClose={handleCloseMore}
                  >
                    <MenuItem onClick={handleClose} style={{color:"maroon"}}>
                      <Avatar alt="mtech jpg" src="images/about_img.jpg" className={classes.large} />
                      {/* <SchoolIcon /> */}
                      &nbsp; 
                      <Button color="inherit">
                        <Link href="/about" color="inherit"><a className={styles.btn}>About Us</a></Link>
                      </Button>
                      
                    </MenuItem>
                      <Divider variant="inset" component="li" />
                    <MenuItem onClick={handleClose} style={{color:"maroon"}}>
                    <Avatar alt="pgd jpg" src="images/upcomings_img.png" className={classes.large} />
                    {/* <SchoolIcon /> */}
                    &nbsp;<Button color="inherit">
                        <Link href="/upcomings" color="inherit">
                          <a className={styles.btn}> Upcomings</a>
                        </Link>
                      </Button>
                  
                    </MenuItem >
                      <Divider variant="inset" component="li" />
                    <MenuItem onClick={handleClose} style={{color:"maroon"}}>
                      {/* <BuildIcon /> */}
                      <Avatar src="images/contact_img.jpg" className={classes.large} />

                      &nbsp;<Button color="inherit"><Link href="/contact" color="inherit">
                          <a className={styles.btn}> Contact Us</a>
                        </Link></Button>
                      </MenuItem>
                  </Menu>
                  
                  
                  
                    
                  {/* <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={Items}
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
                    <MenuItem onClick={handleProfile}><PersonOutlineIcon/>&nbsp;Profile</MenuItem>
                    <MenuItem onClick={handlSignOut}><VpnKeyIcon/>&nbsp;{loggedIn? 'Sign Out': 'Sign In'}</MenuItem>
                    <MenuItem onClick={handleSignUp}><PersonAddIcon/>&nbsp;Sign Up</MenuItem>
                    <MenuItem onClick={handleAdmin}><PersonAddIcon/>&nbsp;Admin</MenuItem>
                  </Menu>              */}
                </div>
                  </Grid>
                </Grid>
              </Toolbar>
              
        </AppBar>
        
      </ElevationScroll>
      {/* <Toolbar />
       */}
    </React.Fragment>
  );
}
