import AdminDashboard from '../components/course-reg/admin-dashboard'
import PreferredProgramme from '../components/course-reg/preferred-programme'

export default function ProfessionalMaster(){
    return <>{<AdminDashboard> 
        <PreferredProgramme 
            preferred={'Pgd'}
            title={'Post Graduate Diploma in Technology Management'}
        /> 
        </AdminDashboard>}
        </>
}