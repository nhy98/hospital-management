import axios from 'axios';
import api from '../helpers/api';
import qs from 'qs';

async function getDoctorSchedule(doctorID, token) {
  var response = await axios({
    method: 'GET',
    url: `${api.SCHEDULE}/account/${doctorID}`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  if (response.status === 200) {
    const { data } = response.data; //aesCryptoJs.decrypt(response.data.data, xKey);
    return data;
  } else if (response.status === 204) {
    console.log('no content');
    return null;
  }
}

async function updateDoctorSchedule(data, token) {
  var response = await axios({
    method: 'PUT',
    url: `${api.SCHEDULE}`,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': `application/json`
    }, 
    data: data
  });
  if (response.status === 200) {
    // const { code } = response.code; //aesCryptoJs.decrypt(response.data.data, xKey);
    return response.data.code;
  } else if (response.status === 204) {
    console.log('no content');
    return null;
  }
}

const ScheduleService = {
  getDoctorSchedule,
  updateDoctorSchedule
};

export default ScheduleService;
