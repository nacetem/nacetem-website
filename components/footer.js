import footercss from '../styles/footer.module.css'
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import EmailIcon from '@material-ui/icons/Email';
import BarChartIcon from '@material-ui/icons/BarChart';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PopContact from './pop-contact'


export default function Footer(){
    return (<>
    <Grid container direction="row" justify="cespace-betweennter" alignItems="center" className={footercss.footer_style} >
        <Grid item container direction="column" xs={12} sm={12} md={4} lg={4} xl={4}>
            <Grid item style={{marginBottom:15}}>
                <Chip icon={<EmailIcon />} label="Our Webmail" href="https://webmail.nacetem.gov.ng" clickable color="primary"/>
            </Grid>
            <Grid item style={{marginBottom:15}}>
                <Chip icon={<BarChartIcon />} label="STI Indicators" href="/sti-indicators" clickable component="a" clickable color="primary"/>
            </Grid>
            <Grid item style={{marginBottom:15}}>
                <Chip icon={<TrendingUpIcon />} label="On-Going Projects" href="/on-going-projects" clickable component="a" clickable color="secondary"/>
            </Grid>
        </Grid>

        <Grid item container direction="column" xs={12} sm={12} md={4} lg={4} xl={4}>
            <Grid item>
                <IconButton color="primary" aria-label="facebook link" component="span">
                    <a target = "_blank" href="https://web.facebook.com/National-Centre-for-Technology-Management-NACETEM-300067793354315">
                    <FacebookIcon/>
                    </a>
                </IconButton>
                <IconButton color="primary" aria-label="twitter link" component="span">
                    <a target = "_blank"  href="https://twitter.com/nacetem_ngr?lang=en">
                    <TwitterIcon/>
                    </a>
                </IconButton>
                <PopContact/>      
            </Grid>
        </Grid>

        <Grid item container direction="column" xs={12} sm={12} md={4} lg={4} xl={4}>
            <Grid item>
                <Chip label="Publications" component="a" href="#" clickable />
            </Grid>
        </Grid>

    </Grid>
    </>)
}
