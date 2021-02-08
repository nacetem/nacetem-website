import ReserachHeader from '../components/policy-reasearch-header'
import Footer from '../components/footer'

export default function CompletedProject(){
    return <>    
        <ReserachHeader header_icon_src="images/publication_img.png" header_title="Publications"/>
        <div style={{width:200, height:200, padding:30, margin:"auto"}}>
        <img src="/images/under_construction.jpg" alt="under construction"  />
        </div>
        <Footer/>
        </>
}