
import axios from "axios";
import {
    getHospitals,
    setHospitals
} from "../actions/HospitalAction";
import React, { useState,useCallback } from 'react';
import {useSelector,useDispatch} from 'react-redux'

import api from "../helpers/api";
import store from "../store/store"

async function getAllHospitals(token){
  
  var response = await axios({
    method: "GET",
    url: `${api.HOSPITALS}`,
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

async function getHospitalById(id,token){
  
  console.log(api.HOSPITAL+id+" urlllll")
  var response = await axios({
    method: "GET",
    url: `${api.HOSPITAL}/${id}`,
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

async function getHospitalsByName(name,token){
  
  var response = await axios({
    method: "GET",
    url: `${api.HOSPITAL}/name/${name}`,
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


const HospitalService = {
  getAllHospitals,
  getHospitalById,
  getHospitalsByName
};

export default HospitalService;
