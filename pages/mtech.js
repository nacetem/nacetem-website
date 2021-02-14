import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head'
import { Paper } from '@material-ui/core';
import ElevateAppBar from '../components/header'
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import BottomMenu from '../components/bottom-navigation'
import Link from 'next/link'
import maincss from '../styles/main.module.css'
import Hidden from '@material-ui/core/Hidden';
import Draw from '../components/drawer'


export default function Mtech(){
    return<>
        <Hidden only={['md', 'lg', 'xl']}>
          <Draw/>
        </Hidden>

        <Hidden only={['xs', 'sm']}>
          <ElevateAppBar/>
        </Hidden>
        <Head><title>Master Technology Management (NACETEM)</title></Head>
        <Typography variant="body1" component="h5" style={{backgroundColor:'maroon', color:'#fff', width:300, padding:10, marginTop:10, marginBottom:7}}>
        Masters in Technology Management   
        </Typography>
        <Paper elevation={2} style={{padding:15, margin:20, textAlign:'justify'}}>
            <Grid item container direction="row" justify="space-between">
                <Grid item xs={12} lg={1}>

                </Grid>
                <Grid item xs={12} lg={5}>
                    <img src='images/audience1.png' alt='capacity building audience' style={{objectFit:'contain', maxWidth:'100%', height:'auto', padding: 20}} />
                </Grid>
                <Grid item xs={12} lg={5}>
                    <h2 style={{initialLetter:3}}>
                        National Centre for Technology Management in collaborattion with &nbsp; 
                    <a variant="outlined" href="https://www.futminna.edu.ng/" style={{wordSpacing: 1, textDecoration:'underline', color:'maroon'}}>
                        Federal University of Technology(FUTMINNA)
                    </a>&nbsp; 
                    offers Professional Masters in Technology Management
                    </h2>
                    <Typography variant="body1" style={{initialLetter:3}}>
                    Applications are invited from suitably qualified candidates for 
                    admission into full-time and part-timeMasters degrees programme at 
                    Federal University of Technology Minna in Collaboration  with NACETEM for 2018/2019 Academic Session. 
                    <h4 class="text-danger">
                    Programmes on Offer
                    </h4> 
                    <p>
                        I. Masters in Technology Management (Professional) - Part-time<br/>
                        ii. Masters of Technology in Technology Management (Academic) - Full-time <br/> 
                    </p>
                    <Button variant="outlined" startIcon={<GetAppIcon color='inherit' style={{color:'maroon'}}/>}>
                        <a href="/Application_Forms_Masters.pdf" download style={{color:'maroon'}}> Download form </a>  
                    </Button>
                    <Link href="/sign-up">
                        <a>
                        Register
                        </a>
                    </Link>

            </Typography>
                </Grid>
                <Grid item xs={12} lg={1}>
                    
                </Grid>
            </Grid>
        </Paper>
        
        <Paper elevation={2} style={{padding:15, margin:20, textAlign:'justify'}}>
            <Grid item container direction="row" justify="space-between">
                <Grid item xs={12} lg={1}>

                </Grid>
                
                <Grid item xs={12} lg={5}>
                    
                    <Typography variant="body1" style={{initialLetter:3}}>                   
                    <h4 class="text-danger">
                        General Requirements
                    </h4>
                    <p>
                        Candidates must possess 5’O level credits in Sciences and/or Social Sciences including
                        Mathematics and English and fulfill any of the underlisted criteria:
                        <ul>
                            <li>
                                B.Tech Hons. Degree of FUTMinna or any other univeristy recognised by senate oFUTMinna.
                            </li>
                            <li> 
                                B.Sc. Hons degree with a minimum of second class lower division in engineeringtechnology,
                                science and social sciences. 
                            </li>
                            <li> 
                                NACETEM’s Postgradutae Diploma (PGD) in Technology Management (not lower than 50%). 
                            </li>
                        </ul>
                    </p>
                
                <p>The Programme Fee is N450,000 payable in 3 instalments.</p>
                <Button variant="outlined" startIcon={<GetAppIcon color='inherit' style={{color:'maroon'}}/>}>
                        <a href="/Application_Forms_Masters.pdf" download style={{color:'maroon'}}> Download form </a>  
                </Button>
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={5}>
                    <img src='images/audience2.png' alt='capacity building audience'style={{objectFit:'contain', maxWidth:'100%', height:'auto', padding: 20}} />
                </Grid>
                <Grid item xs={12} lg={1}>
                    
                </Grid>
            </Grid>
        </Paper>
        <Paper elevation={2} style={{padding:15, margin:20, textAlign:'justify'}}>
            <Grid item container direction="row" justify="space-between">
                <Grid item xs={12} lg={1}>

                </Grid>
                <Grid item xs={12} lg={5}>
                    <img src='images/audience3.png' alt='capacity building audience' style={{objectFit:'contain',maxWidth:'100%', height:'auto', padding: 20}}/>
                </Grid>
                <Grid item xs={12} lg={5}>
                    
                    <Typography variant="body1" style={{initialLetter:3}}>                   
                    <h4 class="text-danger">Mode of Application</h4>
                    <p> 
                        <ul>
                            <li>Download application form from 
                            <Button variant="outlined">
                        <a href="/Application_Forms_Masters.pdf" download style={{color:'maroon'}}> here </a>  
                    </Button>.</li>
                            <li>
                                Duly completed application form should be submitted to NACETEM Hqtrs. at Ile-Ife, North-
                                Central Office in Abuja and South-West Offfice in Lagos. </li>
                            <li>
                                The application fee of <b>N10,000.00</b> is payable in cash on submission of the application form at our designated offices. </li>
                        </ul>
                    </p>

                    <h4  class="text-danger">Additional Information</h4>
                    <p>
                        Applicants will be notified of the status of their applications by e-mail/SMS. Admission letters will be sent via e-mail to successful applicants. <br/>
                         {/* <b>Closing Date: 8th of June, 2018</b>  */}
                    </p>
                    
                    <h4  class="text-danger">For Further Enquiries</h4>
                    <p class="text-succe">
                        For further enquiries, please call: Ile-Ife: Oshodi - 08036829710, Lagos: Ogidan - 08034773321, Abuja: Jude - 08128018221, Bayelsa: Akin - 08033858567, Enugu: Young - 08033096760
                    </p>
                    <Button variant="outlined" startIcon={<GetAppIcon color='inherit' style={{color:'maroon'}}/>}>
                        <a href="/Application_Forms_Masters.pdf" download style={{color:'maroon'}}> Download form </a>  
                    </Button>
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={1}>
                    
                </Grid>
            </Grid>
        </Paper>
        <Grid item style={{marginTop:30}}>
        <BottomMenu/>
      </Grid>
    </>
}