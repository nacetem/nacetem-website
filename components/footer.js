import footercss from '../styles/footer.module.css'
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import EmailIcon from '@material-ui/icons/Email';
import BarChartIcon from '@material-ui/icons/BarChart';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';


export default function Footer(){
    return (<>
    <Grid container direction="row" justify="cespace-betweennter" alignItems="center" className={footercss.footer_style} >
        <Grid item container direction="column" xs={12} sm={12} md={4} lg={4} xl={4}>
            <Grid item style={{margin:15}}>
                <Chip icon={<EmailIcon />} label="Our Webmail" href="nacetem.gov.ng/webmail" clickable color="primary"/>
            </Grid>
            <Grid item style={{margin:15}}>
                <Chip icon={<BarChartIcon />} label="STI Indicators" component="a" href="#chip" clickable color="primary"/>
            </Grid>
            <Grid item style={{margin:15}}>
                <Chip icon={<TrendingUpIcon />} label="On-Going Projects" component="a" href="#chip" clickable color="secondary"/>
            </Grid>
        </Grid>

        <Grid item container xs={12} sm={12} md={4} lg={4} xl={4}>
            
        </Grid>

        <Grid item container xs={12} sm={12} md={4} lg={4} xl={4}>
            <Chip label="Publications" component="a" href="#chip" clickable />
        </Grid>

    </Grid>
    </>)
}
