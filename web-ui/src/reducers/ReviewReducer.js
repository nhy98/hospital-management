
var initialState = {
    listReviews:[
    ],
    review:{
        contents: "aaaaaaaaaaaaaaaaa",
        tags: "1",
        createdDate: null,
        rate: 1,
        account: {
            id: 2,
            address: "",
            age: "",
            mobile: "",
            email: "",
            fullname: "",
            information: "",
            username: "",
            password: "",
            userType: 0,
            avatar: 1,
            hospital: null
        }
    }
  }
  
  
  const ReviewReducer = (state = initialState, action) => {
    
      switch (action.type) {
        case 'SET_LIST_REVIEWS_BY_DOCTOR':
          return Object.assign({}, state, {
            listReviews: action.data
          });
          case 'SET_A_REVIEW':
          return Object.assign({}, state, {
            review: action.data
          });
        case 'GET_LIST_REVIEWS':
          return state
        default:
          return state
      }
    }
    
    export default ReviewReducer