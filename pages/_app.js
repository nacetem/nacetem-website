import '../styles/globals.css'
// import {StateProvider} from '../components/course-reg/state-provider'

// const initialState = {
//   loggedIn: false,
//   user_id: '',
//   student_id: '',
//   submit_status: false,
// }

// function reducer(state, action){
//   switch(action.type){
//     case 'LOGGEDIN':
//      return {...state, loggedIn:true, user_id: action.payload.user_id, student_id: action.payload.student_id}
//     case 'LOGGEDOUT':
//       return {...state, loggedIn:false}
//     case 'SUBMITTED':
//       return {...state, submit_status: action.payload.submit_status}
// 		default:
// 			return state;
//   }
// }

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
