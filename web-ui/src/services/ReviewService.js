import axios from "axios";
import api from "../helpers/api";

async function getReviewByDoctorId(id,token){
  
  var response = await axios({
    method: "GET",
    url: `${api.REVIEWS_BY_DOCTOR}/${id}`,
    headers: { Authorization: `Bearer ${token}` }
  })
  if (response.status === 200) {
    const { data } = response.data; //aesCryptoJs.decrypt(response.data.data, xKey);
    console.log("reponse get users  ===== ");
    console.log(response);
    console.log("data =================== ");
    console.log(data);
    return data;

  } else if (response.status === 204) {
    console.log("no content");
    return null
  }
}
async function createAReview(review,token){
    
    var response = await axios({
      method: "POST",
      url: `${api.CREATE_REVIEW}`,
      headers: { 
          Authorization: `Bearer ${token}`, 
          'Content-Type': `application/json`
        },
      data:review
    })
    if (response.status === 200) {
      const { data } = response.data; //aesCryptoJs.decrypt(response.data.data, xKey);
      console.log("reponse get users  ===== ");
      console.log(response);
      console.log("data =================== ");
      console.log(data);
      return data;
  
    } else if (response.status === 204) {
      console.log("no content");
      return null
    }
  }
  async function getAllReviews(token){
    
    var response = await axios({
      method: "GET",
      url: `${api.REVIEWS}`,
      headers: { Authorization: `Bearer ${token}` }
    })
    if (response.status === 200) {
      const { data } = response.data; //aesCryptoJs.decrypt(response.data.data, xKey);
      console.log("reponse get users  ===== ");
      console.log(response);
      console.log("data =================== ");
      console.log(data);
      return data;
  
    } else if (response.status === 204) {
      console.log("no content");
      return null
    }
  }
const ReviewService = {
    getReviewByDoctorId,
    createAReview,
    getAllReviews
  };
  
  export default ReviewService;