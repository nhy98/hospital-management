import axios from 'axios';
import api from '../helpers/api';
import qs from 'qs';

async function doctorLogin(username, password) {
  let param = {
    username: username,
    password: password
  };
  var response = await axios({
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    url: `${api.AUTHORIZE}`,
    data: qs.stringify(param)
  });
  if (response.status === 200 && response.data.statusCode === 200) {
    return response.data;
  } else {
    return null;
  }
}

async function patientLogin() {
  let param = {
    username: 'member',
    password: 'member'
  };
  var response = await axios({
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    url: `${api.AUTHORIZE}`,
    data: qs.stringify(param)
  });
  if (response.status === 200 && response.data.statusCode === 200) {
    return response.data;
  } else {
    return null;
  }
}

async function logout() {}

async function updateDoctorInfo(id, token){
  var response = await axios({
    method: "PUT",
    url: `${api.DOCTOR}/${id}`,
    headers: { Authorization: `Bearer ${token}` }
  })
  if (response.status === 200) {
    const { data } = response.data; //aesCryptoJs.decrypt(response.data.data, xKey);
    
    console.log(data);
    return data;

  } else if (response.status === 204) {
    console.log("no content");
    return null
  }
}
const LoginService = {
  doctorLogin,
  patientLogin,
  logout,
  updateDoctorInfo
};

export default LoginService;
