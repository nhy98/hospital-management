import ScheduleService from '../services/ScheduleService';

export function getDoctorSchedule(id, token) {
  return async dispatch => {
    try {
      const data = await ScheduleService.getDoctorSchedule(id, token);
      dispatch(setDoctorSchedule(data));
    } catch (error) {
      console.log(error);
    }
  };
}
export function setDoctorSchedule(data) {
  return { type: 'SET_DOCTOR_SCHEDULE', data };
}

export function updateDoctorSchedule(schedule, token) {
  return async dispatch => {
    try {
      const data = await ScheduleService.updateDoctorSchedule(schedule, token);
      dispatch(setUpdateStatus(data));
    } catch (error) {
      console.log(error);
    }
  };
}
export function setUpdateStatus(data) {
  return { type: 'SET_UPDATE_STATUS', data };
}

export function setUpdateStatusDefault(data) {
  return { type: 'SET_UPDATE_STATUS_DEFAULT', data };
}