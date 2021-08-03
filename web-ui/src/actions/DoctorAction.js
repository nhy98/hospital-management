import DoctorService from "../services/DoctorService"

export function getDoctors(token) {
    return async (dispatch) => {
      try{
        console.log("call api not done")
        const data = await DoctorService.getAllDoctors(token)
        dispatch(setDoctors(data))
        console.log("call api done")

      }
      catch(error){
        console.log(error)
      }
    };
  }

  export function setDoctorsCurrent(data){
    return {type:"SET_LIST_DOCTORS_CURRENT",data};
  }
  
  export function getDoctorsByHospitalId(id,token) {
    return async (dispatch) => {
      try{
        console.log("call api not done")
        const data = await DoctorService.getDoctorsByHospitalId(id,token)
        dispatch(setDoctors(data))
        console.log("call api done")

      }
      catch(error){
        console.log(error)
      }
    };
  }
export function setDoctors(data){
  const maxPage = Math.ceil(data.length / 10)
    const current = data.slice(0, 10);
    let dataJson = {
      data:data,
      page: maxPage,
      current: current
    }
    return {type:"SET_LIST_DOCTORS",dataJson};
}
export function setDoctorName(data){
  return {type:"SET_DOCTOR_NAME",data};
}
export function getDoctorsByName(name,token) {
  return async (dispatch) => {
    try{
      console.log("call api not done")
      const data = await DoctorService.getDoctorsByName(name,token)
      dispatch(setDoctors(data))
      console.log("call api done")

    }
    catch(error){
      console.log(error)
    }
  };
}
export function getDoctorById(id,token) {
  return async (dispatch) => {
    try{
      console.log("call api not done")
      const data = await DoctorService.getDoctorById(id,token)
      dispatch(setDoctor(data))
      console.log("call api done")

    }
    catch(error){
      console.log(error)
    }
  };
}
export function setDoctor(data){
  return {type:"SET_A_DOCTOR",data};
}

export function updateDoctorInfo(data,token) {
  return async (dispatch) => {
    try{
      const data = await DoctorService.updateDoctorInfo(data, token)

    }
    catch(error){
      console.log(error)
    }
  };
}