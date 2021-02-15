import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head'
import { Paper } from '@material-ui/core';
import ElevateAppBar from '../components/header'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import VisibilityIcon from '@material-ui/icons/Visibility';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import Footer from '../components/footer'



export default function About(){
    return<><ElevateAppBar/>
    <Head>
        <title>About (NACETEM)</title>
      </Head>
        <Grid container direction="column" justify="space-between">
            <Grid item container direction="row" >
                <Grid item xs={12} lg={2}>
                    
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Typography variant="body1" component="h5" style={{backgroundColor:'maroon', color:'#fff', width:300, padding:10, marginTop:10, marginBottom:7}}>
                        From the DG/CEO's Desk      
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={4}>
                    
                </Grid>
            </Grid>
            
            <Grid item container direction="row" >
                <Grid item xs={12} lg={2}>
                    
                </Grid>
                <Grid item contaner direction='column' xs={12} lg={2}>
                    <Grid>
                        <img src='images/dg2.png' alt='gd ceo image'/>
                    </Grid>
                    <Grid>
                        <Typography variant="body2" gutterBottom>
                            <b>Engineer Professor Okechukwu F. Ukwuoma FNSChE, FIIA, MNSE, KSM
                            Director General/Chief Executive Officer</b>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Paper elevation={4} style={{padding:15, margin:10, textAlign:'justify'}}>
                        <Typography variant="body1" gutterBottom style={{initialLetter:3}}>
                            Advances in science and technology are being recorded at a dizzying
                            speed in our world today, and with the pivotal role of technology 
                            in development, there is an increasing need for technology management. 
                            Technology management entails planning, development, use and diffusion of 
                            technology as well as its application to the industry and its impacts on the social, 
                            economic, cultural, political and geographical environment of a nation. Any firm, 
                            industry or nation that places a premium on technology management sets itself up 
                            for rapid growth and development. With our nation's current drive to be a major player
                            in the global economy due to its human and natural endowments, as  well  as  the  country's
                            commitment  to  the  2030  Agenda  for  Sustainable Development, the need for an aggressive
                            approach towards science and technology-driven development is more urgent than before. 
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            This  urgency is what makes NACETEM critical  to  Nigeria's development  
                            through science and technology.  To this end, NACETEM has developed several 
                            cutting-edge programmes  anchored  on  the  tripod  of  capacity  building, 
                            policy  research  and consultancy in the areas of Science, Technology and 
                            Innovation (STI) management. We therefore invite you to carefully go through 
                            this information brochure to avail yourself of what we do and how we do it as a
                            knowledge support institution with a view to benefiting from our wealth of experience
                            in STI management for sustainable development.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} lg={2}>
                    
                </Grid>
            </Grid>
            <Grid item xs={12} lg={12}>
                <Typography variant="body1" component="h5" style={{backgroundColor:'maroon', color:'#fff', width:300, padding:10, marginTop:10, marginBottom:7}}>
                    Our History      
                </Typography>
            </Grid>
            <Grid item container direction="row" >
                <Grid item xs={12} lg={2}>
                    
                </Grid>
                <Grid item contaner direction='column' xs={12} lg={2}>
                    
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Paper elevation={4} style={{padding:15, margin:10, textAlign:'justify'}}>
                        <Typography variant="body1" gutterBottom style={{initialLetter:3}}>
                            The National Centre for Technology Management (NACETEM) originated following a
                             recommendation of the 2nd Conference of Ministers responsible for Application
                              of Science and Technology to the socio-econimic establishment of Africa 
                              (CASTAFRICA II, 1987). They called for the develoopment and harmonization 
                              of human resources needed to promote, project and propagate technology management in Africa.
                        </Typography>
                        <Typography variant="body1" gutterBottom style={{initialLetter:3}}>
                            Consequently, NACETEM was established in September 1992 but commenced 
                            operations in January 1993, headed by a Drector, with the headquarters
                            located within the campus of the Obafemni Awolowo University (OAU), 
                            Ile-Ife, Osun state. This was to allow it leverage on the huge human 
                            resources, especially in Technology Management, available at the University.
                        </Typography>
                        <Typography variant="body1" gutterBottom style={{initialLetter:3}}>
                            In November 2005, following reforms of the National Science, Technology
                            and Innovation (STI) system by the Federal Government of Nigeria,
                            the original mandates of NACETEM were streamlined and re-structured
                            to cover activities in the West African sub-region and beyond the the 
                            merger of former Regional Programme for Technology Management (REPTEM) with NACETEM.
                            </Typography>
                        <Typography variant="body1" gutterBottom style={{initialLetter:3}}>
                            NACETEM was thereafter elevated to the status of a full agency headed
                            by a Director General/Chief Executive Officer. Consequently, REPTEM,
                            located in Lagos, was re-designated as the NACETEM South West Zonal office.
                            Five other zonal offices of the Centre have been established and have been 
                            in full operation in Abuja (North Central), Bayelsa (South South),
                                Kano (North West), Enugu (South East) and Yola (North East).
                        </Typography>
                        <Typography variant="body1" gutterBottom style={{initialLetter:3}}>
                            Today, NACETEM as an Agency of the Federal Ministry of Science and Technology,
                             is vested with the mandate of training and developing middle-to-high level 
                             manpower and conducting policy research in the areas of Science, Technology 
                             and Innovation (STI) management for all tiers of government and the private 
                             sector. It provides the knowledge support and constitutes the software 
                             component of the nation’s Science, Technology and Innovation (STI) System.
                        </Typography>
                        
                    </Paper>
                </Grid>
                <Grid item xs={12}  lg={2}>
                    
                </Grid>
            </Grid>
            <Grid item xs={12} lg={12}>
                <Typography variant="body1" component="h5" style={{backgroundColor:'maroon', color:'#fff', width:300, padding:10, marginTop:10, marginBottom:7}}>
                   Our Mandate     
                </Typography>
            </Grid>
            <Grid item container direction="row" >
                <Grid item xs={12} lg={2}>
                    
                </Grid>
                <Grid item contaner direction='column' xs={4} lg={2}>
                    
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Paper elevation={4} style={{padding:15, margin:10, textAlign:'justify'}}>
                        <Typography variant="body1" gutterBottom style={{initialLetter:3}}><StarBorderIcon style={{ color:'maroon'}}/>
                        &nbsp;
                            To serve as a TRAINING CENTRE for the development of high level manpower
                             in the Science, Technology and Innovation (STI) management to all tiers 
                             of government and the private sector ;
                        </Typography>
                        <Typography variant="body1" gutterBottom style={{initialLetter:3}}><StarBorderIcon style={{ color:'maroon'}}/>
                        &nbsp;
                            To conduct POLICY RESEARCH, evaluation and review with a view 
                            to providing sound policy advice for dynamic technology-driven,
                             knowledge-based development;
                        </Typography>  
                        <Typography variant="body1" gutterBottom style={{initialLetter:3}}><StarBorderIcon style={{ color:'maroon'}}/>
                        &nbsp;
                            To design and run postgraduate course/programmes in STI management
                             in conjunction with appropriate with appropriate established 
                             institution home or/and abroad;
                        </Typography>
                        <Typography variant="body1" gutterBottom style={{initialLetter:3}}><StarBorderIcon style={{ color:'maroon'}}/>
                        &nbsp;
                            To establish, maintain and provide relevant databases on STI 
                            engagements, as well as providing access to databanks on STI research
                             outputs to facilitate activities towards commercial exploitation;
                        </Typography>
                        <Typography variant="body1" gutterBottom style={{initialLetter:3}}><StarBorderIcon style={{ color:'maroon'}}/>
                        &nbsp;
                            To assist the various governments (Federal, State and Local) in the 
                            country in STI policy formulation and strategies for utilising such for development and
                        </Typography>
                        <Typography variant="body1" gutterBottom style={{initialLetter:3}}><StarBorderIcon style={{ color:'maroon'}}/>
                        &nbsp;
                            To collaborate with other countries especially African countries in
                             STI training, policy research and consultancy.
                        </Typography>
                        
                    </Paper>
                </Grid>
                <Grid item xs={12} lg={2}>
                    
                </Grid>
                <Grid item xs={12} lg={12}>
                <Typography variant="body1" component="h5" style={{backgroundColor:'maroon', color:'#fff', width:300, padding:10, marginTop:10, marginBottom:7}}>
                    Our Vision      
                </Typography>
            </Grid>
            <Grid item container direction="row" >
                <Grid item xs={12} lg={2}>
                    
                </Grid>
                <Grid item contaner direction='column' xs={12} lg={2}>
                    
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Paper elevation={4} style={{padding:15, margin:10, textAlign:'justify'}}>
                        <Typography variant="body1" gutterBottom style={{initialLetter:3}}>
                            <VisibilityIcon style={{color:'maroon', fontSize:40}}/>&nbsp;
                        “To be an internationally recognised centre of excellence in science, 
                        technology and innovation management for sustainable development.”
                        </Typography>                        
                    </Paper>
                </Grid>
                <Grid item  lg={2}>
                    
                </Grid>
            </Grid>
            <Grid item xs={12} lg={12}>
                <Typography variant="body1" component="h5" style={{backgroundColor:'maroon', color:'#fff', width:300, padding:10, marginTop:10, marginBottom:7}}>
                    Our Mission      
                </Typography>
            </Grid>
            <Grid item container direction="row" >
                <Grid item xs={12} lg={2}>
                    
                </Grid>
                <Grid item contaner direction='column' xs={4} lg={2}>
                    
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Paper elevation={4} style={{padding:15, margin:10, textAlign:'justify'}}>
                        <Typography variant="body1" gutterBottom style={{initialLetter:3}}>
                            <LoyaltyIcon style={{color:'maroon', fontSize:40}}/>&nbsp;
                        “To play a leading role in the build-up of expertise for effective management of science, 
                        technology and innovation management and to actively engage in policy research, 
                        design, evaluation and review”.
                        </Typography>
                        
                        
                    </Paper>
                </Grid>
                <Grid item xs={12} lg={2}>
                    
                </Grid>
            </Grid>
            </Grid>
        </Grid>
        <Grid item style={{marginTop:30}}>
        <Footer/>
      </Grid>
    </>
}