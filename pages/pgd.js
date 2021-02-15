import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head'
import { Paper } from '@material-ui/core';
import ElevateAppBar from '../components/header'
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import Footer from '../components/footer'
import Table from '@material-ui/core/Table';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import Draw from '../components/drawer'
import Hidden from '@material-ui/core/Hidden';


export default function Mtech(){
    return<>
        <Hidden only={['md', 'lg', 'xl']}>
          <Draw/>
        </Hidden>

        <Hidden only={['xs', 'sm']}>
          <ElevateAppBar/>
        </Hidden>
        <Head><title>Postgradute Diploma in Technology Management (NACETEM)</title></Head>
        <Typography variant="body1" component="h5" style={{backgroundColor:'maroon', color:'#fff', width:300, padding:10, marginTop:10, marginBottom:7}}>
            Postgradute Diploma in Technology Management
        </Typography>
        <Paper elevation={2} style={{padding:15, margin:20, textAlign:'justify'}}>
            <Grid item container direction="row" justify="space-between">
                <Grid item xs={12} lg={1}>

                </Grid>
                <Grid item xs={12} lg={5}>
                    <img src='images/audience1.png' alt='capacity building audience' style={{objectFit:'contain', maxWidth:'100%', height:'auto', padding: 20}} />
                </Grid>
                <Grid item xs={12} lg={5}>
                    
                    <Typography variant="body1" style={{initialLetter:3}}>
                    Applications are invited from suitably qualified candidates for admission into one year
                    part-time Postgraduate Diploma Course in Technology Management at:
                    <ul>
                        <li>Ile Ife</li>
                        <li> Lagos Study Centre</li>
                        <li> Abuja Study Centre</li>
                        <li> Bayelsa Study Centre</li>
                        <li> Enugu Study Centre</li>
                    </ul> 
                    <Button variant="outlined" startIcon={<GetAppIcon color='inherit' style={{color:'maroon'}}/>}>
                        <a href="/Application_Forms_PGD.pdf" download style={{color:'maroon'}}> Download form </a>  
                    </Button>
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
                    <p>
                        <h4>The Course will specifically:</h4>
                        <ul style={{listStyleType: 'none'}}>
                        <li>
                            i. develop in students a deep understanding of how S&T can be harnessed for economic
                            development.
                        </li>
                        <li>
                            ii. enable students to comprehend the role of technology within the framework of
                            business strategy and objectives.
                        </li>
                        <li>
                            iii. develop in students skills to manage innovation and change in various sectors of the
                            economy.
                        </li>
                        </ul>
                    </p>
                
                    <h4 class="text-danger">
                        Requirements for the Programme
                    </h4>
                    <p>
                        Candidates applying for admission should possess B.Sc. or HND in any discipline in
                        Science, Technology or one of the Social Sciences. Candidates with degrees or HND in
                        the Humanities, with considerable and relevant industrial or managerial experience may
                        be considered.
                    </p>
                    <h4 class="text-danger">Mode of Application</h4>
                        Interested applicant should obtain application form from the zonal office/study centre
                            nearest to them or from  
                            <Button variant="outlined">
                                <a href="/Application_Forms_PGD.pdf" download style={{color:'maroon'}}> here </a>  
                            </Button>
                    <h4 class="text-danger" >Application Fee: N10000</h4>
                    <p>This is payable in cash at all our study centres.</p>
                    <Button variant="outlined" startIcon={<GetAppIcon color='inherit' style={{color:'maroon'}}/>}>
                        <a href="/Application_Forms_PGD.pdf" download style={{color:'maroon'}}> Download form </a>  
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
                    <p>For further enquiries, please call: Ile-Ife: Funke - 08066066923, 
                    Lagos: Ogidan - 08034773321, Abuja: Jude - 08128018221, Bayelsa: Akin - 08033858567, Enugu: Young - 08033096760</p>
                    
                    <Button variant="outlined" startIcon={<GetAppIcon color='inherit' style={{color:'maroon'}}/>}>
                        <a href="/Application_Forms_Masters.pdf" download style={{color:'maroon'}}> Download form </a>  
                    </Button>
                    
                    </Typography>
                    
                </Grid>
                <Grid item xs={12} lg={1}>
                    
                </Grid>
            </Grid>
        </Paper>
        <Paper elevation={2} style={{padding:15, margin:20}}>
            <Grid item container direction="row" justify="space-between">
                
                <Grid item xs={12} lg={1}>
                    <ContactPhoneIcon/>                
                    </Grid>
                <Grid item xs={12} lg={11}>
                    
                    
                    <Table responsive striped bordered hover variant="dark"> 
                        <tbody>
                            <tr>
                                <td style={{padding:10}}><b>NACETEM HQ Office</b><br/>
                                    P.M.B 012, Obafemi Awolowo University,
                                    Ile-Ife, Osun State,
                                    Nigeria.
                                    Tel.: 08066066923
                                </td>
                                <td style={{padding:10}}>
                                <b>NACETEM SW Office</b><br/>
                                    9, Kofo Abayomi Street,
                                    Victoria Island, Lagos
                                    Tel.: 07027624006
                                </td>
                                <td style={{padding:10}}>
                                <b>NACETEM NC Office</b><br/>
                                    3, Dunukofia Street,
                                    Area 11, Garki-Abuja
                                    Tel.: 097-831-224
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </td>
                                <td style={{padding:10}}>
                                <b>NACETEM SS Office</b><br/>
                                    Niger Delta University,
                                    Ammasoma, Bayelsa
                                    Tel.: 08034730466
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                </td>
                                <td style={{padding:10}}>
                                <b>NACETEM SE Office</b><br/>
                                    4, Coal City Garden
                                    Okpara Avenue, Enugu
                                    Tel.: 08023226312
                                </td>
                                <td style={{padding:10}}>
                                <b>NACETEM NW Office</b><br/>
                                    8th Floor, Federal Sec.
                                    1, Murtala Mohammed Way
                                    Katsina Road, Kano
                                    Tel.: 08033885526
                                </td>
                                <td style={{padding:10}}>
                                <b>NACETEM NE Office</b><br/>
                                    Pre-Degree Block
                                    MAUTECH
                                    Yola, Adamawa State
                                </td>
                            </tr>         
                        </tbody>
                    </Table>
                </Grid>
                
            </Grid>
        </Paper>
        <Grid item style={{marginTop:30}}>
        <Footer/>
      </Grid>
    </>
}