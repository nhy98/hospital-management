import ReviewService from "../services/ReviewService"


  export function getReviewsByDoctorId(id,token) {
    return async (dispatch) => {
      try{
        console.log("call api not done")
        const data = await ReviewService.getReviewByDoctorId(id,token)
        dispatch(setReviews(data))
        console.log("call api done")

      }
      catch(error){
        console.log(error)
      }
    };
  }
  export function getAllReviews(token) {
    return async (dispatch) => {
      try{
        console.log("call api not done")
        const data = await ReviewService.getAllReviews(token)
        dispatch(setReviews(data))
        console.log("call api done")

      }
      catch(error){
        console.log(error)
      }
    };
  }
  export function createReview(review,token){
    return async (dispatch) => {
        try{
          console.log("call api not done")
          const data = await ReviewService.createAReview(review,token)
            dispatch(setReview(data))
          console.log("call api done")
  
        }
        catch(error){
          console.log(error)
        }
      };
  }
export function setReviews(data){
    return {type:"SET_LIST_REVIEWS_BY_DOCTOR",data};
}
export function setReview(data){
    return {type:"SET_A_REVIEW",data};
}
