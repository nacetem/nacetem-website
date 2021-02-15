import ReserachHeader from '../components/policy-reasearch-header'
import Footer from '../components/footer'
import CompletedList from '../components/complered-list'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


export default function CompletedProject(){
    return <>    
        <ReserachHeader header_icon_src="images/completed_img.png" header_title="Completed Projects"/>
        <Grid container>
            <Grid item style={{ padding:50, marginTop:40, textAlign: "justify", textJustify: "inter-word" }}>
                <Typography variant="body1">
                    Policy research in STI management at NACETEM is aimed at providing sound policy advice based on
                    quality research evidences to policy makers in order to remove guesswork or opinion-driven 
                    actions from governance. Of prominent importance to achieving this goal is NACETEM's ability 
                    to: generate reliable and trustworthy evidence; improve usability of evidence; effectively 
                    disseminate evidence and provide wide access to evidence. NACETEM has recorded considerable 
                    achievements in policy research in STI Management, the highlight of which was the anchoring 
                    of 2009-2011  Policy review and the subsequent organisation of the first international conference
                    on evidence-informed policy making in collaboration with INASP and Wellcome Trust UK. 
                    About 40 policy research projects including masters and PhD studies on topical national 
                    issues have been completed by our research faculty in the last 10 years. The outcomes of policy 
                    projects have been published in many scholarly journals, book-chapters,  edited books and monographs
                    and a readily accessible at our library domiciled at the NACETEM headquarters.
                </Typography>
                <Typography variant="h5" style={{marginTop:20, marginBottom:20}}>
                    Completed policy research projects (2015-2019):
                </Typography>
                <CompletedList/>
            </Grid>
        </Grid>
        <Footer/>
    </>
}
