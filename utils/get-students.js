import axios from 'axios'
import {API_URL} from './constants'
const getStudents = (student_id) => {
    axios
      .get(`${API_URL}/students/${student_id}`, {
          headers: {'x-access-token': localStorage.getItem('token')}
        })
      .then(res=> res.data)
      .catch(err => console.log(err))  
  }
export default getStudents