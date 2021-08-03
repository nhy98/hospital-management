
var initialState = {
  listHospitals:[
  ],
  listHospitalsCurrent:[
  ],
  hospital:{
    id:0,
    address:"",
    hospitalName:"",
    website:""
  },
  hospitalName:"a",
  maxPage: 1
}


const HospitalReducer = (state = initialState, action) => {
  
    switch (action.type) {
      case 'SET_LIST_HOSPITALS':
        return Object.assign({}, state, {
          listHospitals: action.dataJson.data,
          maxPage: action.dataJson.page,
          listHospitalsCurrent:action.dataJson.current
        });
        case 'SET_LIST_HOSPITALS_CURRENT':
          return Object.assign({}, state, {
            listHospitalsCurrent: action.data,
          });
      case 'SET_HOSPITAL':
        return Object.assign({}, state, {
          hospital: action.data
        });
        case 'SET_HOSPITAL_NAME':
          return Object.assign({}, state, {
            hospitalName: action.data
          });
      case 'GET_LIST_HOSPITALS':
        return state
      default:
        return state
    }
  }
  
  export default HospitalReducer