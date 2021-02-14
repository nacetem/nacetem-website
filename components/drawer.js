import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PopContact from './pop-contact'
import HomeIcon from '@material-ui/icons/Home';
import Link from 'next/link'
import Tooltip from '@material-ui/core/Tooltip';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function Draw(){
  const [openDrawer, setopenDrawer]= React.useState(false)
  const handleOpenDrawer = ()=> setopenDrawer(true);
  const handleToggle = ()=> setopenDrawer(false);
  const [policyRes, setpolicyRes] = React.useState(null);
  const [capacity, setcapacity] = React.useState(null);
  const [, setMore] = React.useState(null);
  const [, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
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
  return <>
        <AppBar position="static" style={{backgroundColor:"maroon"}}>
          <IconButton color="inherit"  aria-label="display menu" component="span" onClick={handleOpenDrawer}>
            <MenuIcon />&nbsp;N A C E T E M
          </IconButton>
        </AppBar>  
        <Drawer
          open={openDrawer}
          onClose={handleToggle}
          width={200}>
          <Grid container direction="row" justify="space-between" alignItems="center" style={{padding:20, backgroundColor:'#e6e6e6'}}>
            <Grid item>
              <IconButton color="primary" aria-label="facebook link" component="span" onClick={handleClose}>
                <a target = "_blank" href="https://web.facebook.com/National-Centre-for-Technology-Management-NACETEM-300067793354315">
                  <FacebookIcon/>
                </a>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton color="primary" aria-label="twitter link" component="span" onClick={handleClose}>
                <a target = "_blank"  href="https://twitter.com/nacetem_ngr?lang=en">
                  <TwitterIcon/>
                </a>
              </IconButton>
            </Grid>
            <Grid item><PopContact/></Grid>
          </Grid >
          <Button color="inherit">
            <Link href="/">
              <a>
                <Tooltip title="Home">
                  <HomeIcon/>
                </Tooltip>
              </a>
            </Link>
          </Button>
          <MenuItem>
          <Button aria-controls="simple-menu" style={{color:'maroon'}} aria-haspopup="true" onClick={handlePolicyRes}>
            <img src="/images/research_img.png" height="35" width="35" alt=""/>&nbsp;&nbsp;Policy Research
          </Button>
          </MenuItem>
          <Divider variant="inset"/>
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
                    <Avatar alt=" " src="images/on_going_img.png"/>&nbsp;
                    <Link href="/on-going-projects">
                      <a>Ongoing Project</a>
                    </Link>
                  </MenuItem>
                  <MenuItem style={{color:"maroon"}}>
                    <Avatar alt=" " src="images/completed_img2.jpg"/>&nbsp;
                    <Link href="/completed-projects">
                      <a>Completed Project</a>
                    </Link>
                    </MenuItem>
                  <MenuItem style={{color:"maroon"}}>
                    <Avatar alt=" " src="images/indicator_img.png"/>&nbsp;
                    <Link href="/sti-indicators">
                      <a>STI Indicator</a>
                    </Link>
                    </MenuItem>
                  {/* <MenuItem style={{color:"maroon"}}>
                    <Avatar alt=" " src="images/publication_img.png"/>&nbsp;
                    <Link href="/publications">
                      <a>Publication</a>
                    </Link>
                  </MenuItem> */}
                </Menu>
                <Button aria-controls="simple-menu" style={{color:'maroon'}} aria-haspopup="true" onClick={handleCapacity}>
                <img src="/images/capacity_building_img.png" height="40" width="40" alt=""/> &nbsp;&nbsp;Capacity Building
                </Button>
                <Divider variant="inset"/>
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
                    <Avatar alt="mtech jpg" src="images/mtech.jpg" />
                    {/* <SchoolIcon /> */}
                    &nbsp;<Button color="inherit">
                      <Link href="/mtech" color="inherit">
                        <a >Masters in Technology Management</a>
                      </Link>
                    </Button>
                    
                  </MenuItem>
                    <Divider variant="inset"/>
                  <MenuItem onClick={handleClose} style={{color:"maroon"}}>
                  <Avatar alt="pgd jpg" src="images/pgd_img1.jpg" />
                  {/* <SchoolIcon /> */}
                  &nbsp;<Button color="inherit">
                      <Link href="/pgd" color="inherit">
                        <a> Post Gradute Diploma</a>
                      </Link>
                    </Button>
                
                  </MenuItem >
                    <Divider variant="inset" component="li" />
                  <MenuItem onClick={handleClose} style={{color:"maroon"}}>
                    {/* <BuildIcon /> */}
                    <Avatar src="images/capacity2.png" />

                    &nbsp;Capacity Development Programme
                </MenuItem>
                </Menu>
                <MenuItem onClick={handleClose} style={{color:"maroon"}}>                     
                  <Avatar alt="mtech jpg" src="images/about_img.jpg" style={{ display:'inline'}}/>
                  &nbsp; &nbsp;
                  <Button color="inherit">
                  <Link href="/about" color="inherit"><a>ABOUT US</a></Link>
                  </Button>
                </MenuItem>
                <Divider variant="inset"  />
                <MenuItem onClick={handleClose} style={{color:"maroon"}}>
                <Avatar alt="pgd jpg" src="images/upcomings_img.png" />
                {/* <SchoolIcon /> */}
                &nbsp;&nbsp;<Button color="inherit">
                    <Link href="/upcomings" color="inherit">
                      <a> Upcomings</a>
                    </Link>
                  </Button>
              
                </MenuItem >
                  <Divider variant="inset" />
                <MenuItem onClick={handleClose} style={{color:"maroon"}}>
                  {/* <BuildIcon /> */}
                  <Avatar src="images/contact_img.jpg" />

                  &nbsp;<Button color="inherit"><Link href="/contact" color="inherit">
                      <a> Contact Us</a>
                    </Link></Button>
                  </MenuItem>
              
        </Drawer>
      </>
}
       