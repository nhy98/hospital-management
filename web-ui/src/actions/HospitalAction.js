import HospitalService from "../services/HospitalService"
import HospitalReducer from "reducers/HospitalReducer";

export function getHospitals(token) {
    return async (dispatch) => {
      try{
        console.log("call api not done")
        const data = await HospitalService.getAllHospitals(token)
        dispatch(setHospitals(data))
        console.log("call api done")

      }
      catch(error){
        console.log(error)
      }
    };
  }
export function setHospitals(data){
    const maxPage = Math.ceil(data.length / 6)
    const current = data.slice(0, 6);
    let dataJson = {
      data:data,
      page: maxPage,
      current: current
    }
    return {type:"SET_LIST_HOSPITALS",dataJson};
}
export function setHospitalName(data){
  return {type:"SET_HOSPITAL_NAME",data};
}
export function setHospitalsCurrent(data){
  return {type:"SET_LIST_HOSPITALS_CURRENT",data};
}

export function getHospitalById(id,token) {
  return async (dispatch) => {
    try{
      console.log("call api not done")
      const data = await HospitalService.getHospitalById(id,token)
      dispatch(setHospital(data))
      console.log("call api done")

    }
    catch(error){
      console.log(error)
    }
  };
}
export function getHospitalByName(name,token) {
  return async (dispatch) => {
    try{
      console.log("call api not done")
      const data = await HospitalService.getHospitalsByName(name,token)
      dispatch(setHospitals(data))
      console.log("call api done")

    }
    catch(error){
      console.log(error)
    }
  };
}
export function setHospital(data){
  return {type:"SET_HOSPITAL",data};
}