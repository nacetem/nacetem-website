import ReserachHeader from '../components/policy-reasearch-header'
import Footer from '../components/footer'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import RDList from '../components/rdindicator-list'
import InnovationList from '../components/inovation-indicator-list'


export default function CompletedProject(){
    return <>    
    <ReserachHeader header_icon_src="images/indicator_img.png" header_title="STI Indicators"/>
    <Grid container>
            <Grid item style={{ padding:50, marginTop:40, textAlign: "justify", textJustify: "inter-word" }}>
                <Typography variant="body1" gutterBottom>
                Science,  technology  and  innovation  (STI)  indicators  play  a  fundamental  role  of  providing  scientific  evidence  for formulating national development strategies. However, in most African countries, most policies on STI are not based on scientific facts either because they are unavailable or where they exist, unreliable. This led to the conceptualization of STI Indicators project in 2005 by NACETEM which became continental following its integration with the AU-NEPAD African Science, Technology and Innovation Indicators (ASTII) initiative in 2007. This is in furtherance to NACETEM's mandate of “establishing, maintaining and providing access to databanks on STI research outputs and facilitating activities towards their commercial exploitation.”  This  made the  Federal  Government  in  2007 to  mandate  NACETEM to  serve as the implementation agency.
                </Typography>
                <Typography variant="body1" gutterBottom>
                The overall goal is to develop indicators that will be used to advice the Minister of Science and Technology and other policymakers on STI issues similar to macro-economic indicators used by the Minister of Finance. Specifically, the objectives of the STI Indicators project are to monitor, evaluate, and forecast Nigeria's performance in STI as well as benchmark against set targets. It is also used to assess Nigeria's international competitiveness in STI. These indicators will ultimately facilitate evidence-based policymaking and assist government to remove guess work from governance. In doing this, NACETEM, uses methodology of international best practices primarily from the Organisation for Economic Co-operation and Development (OECD) while at the same time balancing with local demands and priorities.                </Typography>
                <Typography variant="body1" gutterBottom>
                The project was implemented among 35 African countries in the second phase in 2011. NACETEM has therefore completed two rounds of the Surveys in 2008 and 2011 respectively and the outcomes integrated into government policies such as the 2012 National STI Policy. Also, the outcomes of previous exercises have been integrated as Nigeria's statistics in international databases on R&D and Innovation. These include the UNESCO Statistics on R&D and the African Innovation Outlook published by the AU-NEPAD and the African Observatory on Science, Technology and Innovation (AOSTI).                </Typography>
                <Typography variant="h5" style={{marginTop:20, marginBottom:20}}>
                R&amp;D Indicators
                </Typography>
                <RDList/>
                <Typography variant="h5" style={{marginTop:20, marginBottom:20}}>
                Innovation Indicators
                </Typography>
                <InnovationList/>
            </Grid>
        </Grid>
    <Footer/>
    </>
}


