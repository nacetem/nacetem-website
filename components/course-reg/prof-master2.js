import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Button from '@material-ui/core/Button';

export default function ProfessionalMaster(){
    const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [session, setsession] = React.useState([]);
  const [menuSession, setMenuSession] = React.useState('');
  React.useEffect(()=>{
    getSession()
  },[])
  // React.useCallback(()=><AdminMain session = {menuSession}/>,[menuSession])
  // const forceUpdate = React.useCallback(() => setMenuSession({}), []);
  
  const classes = useStyles();
  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
  const handleSession = (e) => {
    console.log('e.target.value: ',e.target.value)
    setMenuSession(e.target.value)
    console.log('menuSession: ',menuSession)
    console.log('typeof menuSession: ',typeof menuSession)
    setAnchorEl(null);
    };
  const handleClose = ()=>setAnchorEl(null);
  const getSession = () => {
      axios
        .get(`${API_URL}/academics`, {
            headers: {'x-access-token': localStorage.getItem('token')}
          })
        .then(res=>setsession(res.data))
        .catch(err => console.log(err))  
    }

      return <>

    <Button 
        aria-controls="Select-Session"
        endIcon={<ArrowDropDownIcon />}
        color="primary" aria-haspopup="true" 
        onClick={handleClick}>
        Select Session
    </Button>
    <Menu
    id="simple-menu"
    anchorEl={anchorEl}
    keepMounted
    open={Boolean(anchorEl)}
    onClose={handleClose}
    >
    {/* 20202021 20212022 */}
    {session? session.map((sess, index) => <MenuItem key={sess.id} value={sess.session} onClick={e=>handleSession(e, index)}>{sess.session}</MenuItem>): null}
    </Menu>
    </>
}