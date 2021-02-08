
import axios from 'axios';
import {API_URL} from '../utils/constants'
import {useStateValue} from '../components/course-reg/state-provider'

export default getStudents = async () => {
    const [{loggedIn, user_id, student_id}, dispatch] = useStateValue();
    const [students, setStudents] = useState([]);
    const [errorStd, setErrorStd] = useState(''); 

    try {
      const { data } = await axios.get(`${API_URL}/students/${student_id}`, {
          headers: {
               'x-access-token': localStorage.getItem('token')
          }
        });
        errorStd('');
        setStudents(data);
        console(data)
    } catch (error) {
      error.response && setErrorStd(error.response.data);
    }
  }; 