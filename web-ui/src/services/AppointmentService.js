import axios from 'axios';
import api from '../helpers/api';
import qs from 'qs';

async function getAppointmetOfDoctor(doctorID, token) {
  var response = await axios({
    method: 'GET',
    url: `${api.APPOINTMENT}/account/${doctorID}`,
    headers: { Authorization: `Bearer ${token}` }
  });
  if (response.status === 200) {
    const { data } = response.data; //aesCryptoJs.decrypt(response.data.data, xKey);
    return data;
  } else if (response.status === 204) {
    console.log('no content');
    return null;
  }
}
async function getAppointmetDetail(appointmentID, token) {
  var response = await axios({
    method: 'GET',
    url: `${api.APPOINTMENT}/${appointmentID}`,
    headers: { Authorization: `Bearer ${token}` }
  });
  if (response.status === 200) {
    const { data } = response.data; //aesCryptoJs.decrypt(response.data.data, xKey);
    return data;
  } else if (response.status === 204) {
    return null;
  }
}

async function createAppointment(appointment,token) {
  
  var response = await axios({
    method: 'POST',
    url: `${api.APPOINTMENT}`,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': `application/json`
    },
    data: appointment
  });
  if (response.status === 200) {
    const { data } = response.data; //aesCryptoJs.decrypt(response.data.data, xKey);
    console.log('reponse get users  ===== ');
    console.log(response);
    console.log('data =================== ');
    console.log(data);
    return data;
  } else if (response.status === 204) {
    console.log('no content');
    return null;
  }
}

async function updateAppointment(updateData, token) {
  var response = await axios({
    method: 'PUT',
    url: `${api.APPOINTMENT}`,
    headers: { Authorization: `Bearer ${token}` },
    data: updateData
  });
  if (response.status === 200) {
    var response2 = await axios({
      method: 'POST',
      url: `${api.SEND_EMAIL}`,
      headers: { Authorization: `Bearer ${token}` },
      data: {
        email:updateData.email,
        code:"2"
      }
    });
    return response.data.code;

  } else if (response.status === 204) {
    return null;
  }
}


const AppointmentService = {
  getAppointmetOfDoctor,
  getAppointmetDetail,
  createAppointment,
  updateAppointment
};

export default AppointmentService;
