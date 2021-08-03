
var initialState = {
    listDoctors:[
    ],
    listDoctorsCurrent:[
    ],
    doctor:{
      id:0,
      address:"",
      age:0,
      mobile:"",
      email:"",
      fullname:"",
      information:"",
      username:"",
      password:"",
      userType:2,
      avatar:"",
      hospital:{
        id:0,
        address:"",
        hospitalName:"",
        website:"",
        descripton:"",
        imageUrl:""
      }
    },
    doctorName:"a",
    maxPage:1
  }
  
  
  const DoctorReducer = (state = initialState, action) => {
    
      switch (action.type) {
        case 'SET_LIST_DOCTORS':
          return Object.assign({}, state, {
            listDoctors: action.dataJson.data,
            listDoctorsCurrent:action.dataJson.current,
            maxPage: action.dataJson.page
          });
          case 'SET_LIST_DOCTORS_CURRENT':
          return Object.assign({}, state, {
            listDoctorsCurrent: action.data
          });
          case 'SET_A_DOCTOR':
          return Object.assign({}, state, {
            doctor: action.data
          });
          case 'SET_DOCTOR_NAME':
          return Object.assign({}, state, {
            doctorName: action.data
          });
        case 'GET_LIST_DOCTORS':
          return state
        default:
          return state
      }
    }
    
    export default DoctorReducer