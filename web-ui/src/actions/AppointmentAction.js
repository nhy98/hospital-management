import AppointmentService from '../services/AppointmentService';

export function getAppointmetOfDoctor(id, token) {
  return async dispatch => {
    try {
      const data = await AppointmentService.getAppointmetOfDoctor(id, token);
      dispatch(setDoctorAppointment(data));
    } catch (error) {
      console.log(error);
    }
  };
}
export function setDoctorAppointment(data) {
  return { type: 'SET_DOCTOR_APPOINTMENT', data };
}

export function getAppointmetDetail(appointmentID,token) {
    return async dispatch => {
      try {
        const data = await AppointmentService.getAppointmetDetail(appointmentID,token);
        dispatch(setAppointmentDetail(data));
      } catch (error) {
        console.log(error);
      }
    };
  }
  export function setAppointmentDetail(data) {
    return { type: 'SET_APPOINTMENT_DETAIL', data };
  }
  export function createAppointment(appointment,token){
    return async (dispatch) => {
        try{
          console.log("call api not done")
          const data = await AppointmentService.createAppointment(appointment,token)
          dispatch(setAppointmentDetail(data))
          console.log("call api done")
          return data
        }
        catch(error){
          console.log(error)
        }
      };
  }

  export function updateAppointment(dataUpdate, token){
    return async (dispatch) => {
        try{
          const data = await AppointmentService.updateAppointment(dataUpdate, token)
          dispatch(setUpdateStatus(data));
          return data
        }
        catch(error){
          console.log(error)
        }
      };
  }

  export function setUpdateStatus(data) {
    return { type: 'SET_UPDATE_STATUS', data };
  }
  
  export function setUpdateStatusDefault(data) {
    return { type: 'SET_UPDATE_STATUS_DEFAULT', data };
  }
