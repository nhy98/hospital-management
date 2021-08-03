import MedicalReportService from '../services/MedicalReportService';

export function getReportsByCode(code,token) {
    return async (dispatch) => {
      try{
        const data = await MedicalReportService.getReportsByCode(code,token)
        dispatch(setReports(data))
  
      }
      catch(error){
        console.log(error)
      }
    };
  }

  export function setReports(data){
    return {type:"SET_LIST_REPORTS",data};
}