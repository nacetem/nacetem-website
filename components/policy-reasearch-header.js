import Grid from '@material-ui/core/Grid';
import ElevateAppBar from '../components/header'
import maincss from '../styles/main.module.css'
import Hidden from '@material-ui/core/Hidden';
import Draw from './drawer'

export default function ReserachHeader(props){ 
      return (<>
        <Hidden only={[ 'md', 'lg', 'xl']}>
          <Draw/>
        </Hidden>
        <Hidden only={['xs', 'sm']}>
          <ElevateAppBar/>
        </Hidden>
        <Grid container className={maincss.container}>
            <img src="images/bg-brown.jpg" alt=" " className={ maincss.zoominoutheaderstyle}/>
            <Grid container direction="row" justify="center" className={maincss.content}> 
              <Grid item container alignItems="center" justify="center">
                <img src={props.header_icon_src} alt="" height="80" width="100"/>
                <span className={maincss.fontStyle}>{props.header_title}</span>
              </Grid>
              {/* <Grid item className={maincss.fontStyle}>{props.header_title}</Grid> */}
            </Grid>
        </Grid>
      </>)
    
}

