import Grid from '@material-ui/core/Grid';
import ElevateAppBar from '../components/header'
import maincss from '../styles/main.module.css'

export default function ReserachHeader(props){ 
      return (<>
        <ElevateAppBar/>
        <div className={maincss.container}>
            <img src="images/bg-brown.jpg" alt="library img" className={ maincss.zoominoutheaderstyle}/>
            <Grid container direction="row" justify="flex-start" alignItems="center" className={maincss.content}> 
              <Grid item>< img src={props.header_icon_src} alt="" height="80" width="110"/></Grid>
              <Grid item className={maincss.fontStyle}>{props.header_title}</Grid>
            </Grid>
        </div>
      </>)
    
}

