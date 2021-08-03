import axios from 'axios';
import api from '../helpers/api';

async function getReportsByCode(code,token){
    
    var response = await axios({
      method: "GET",
      url: `${api.MEDICAL_REPORT}/code/${code}`,
      headers: { Authorization: `Bearer ${token}` }
    })
    if (response.status === 200) {
      const { data } = response.data; 
      return data;
  
    } else if (response.status === 204) {
      console.log("no content");
      return null
    }
  }
const MedicalReportService = {
    getReportsByCode
};

export default MedicalReportService;
