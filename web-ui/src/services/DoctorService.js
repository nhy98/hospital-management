
import axios from "axios";
import api from "../helpers/api";

async function getAllDoctors(token){
  
  var response = await axios({
    method: "GET",
    url: `${api.DOCTORS}`,
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

async function getDoctorsByHospitalId(id,token){
  
  var response = await axios({
    method: "GET",
    url: `${api.DOCTORS_BY_HOSPITAL}/${id}`,
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
async function getDoctorById(id,token){
  
  var response = await axios({
    method: "GET",
    url: `${api.DOCTOR}/${id}`,
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

async function getDoctorsByName(name,token){
  
  var response = await axios({
    method: "GET",
    url: `${api.DOCTOR}/name/${name}`,
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

async function updateDoctorInfo(data, token){
  var response = await axios({
    method: "PUT",
    url: `${api.DOCTOR}`,
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

const DoctorService = {
    getAllDoctors,
    getDoctorsByHospitalId,
    getDoctorById,
    getDoctorsByName,
    updateDoctorInfo
  };
  
  export default DoctorService;
