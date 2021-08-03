
import { combineReducers } from "redux";
import HospitalReducer from "./HospitalReducer";
import DoctorReducer from "./DoctorReducer";
import LoginReducer from "./LoginReducer";
import ReviewReducer from "./ReviewReducer";
import ScheduleReducer from "./ScheduleReducer";
import AppointmentReducer from "./AppointmentReducer";
import MedicalReportReducer from "./MedicalReportReducer";
const rootReducer = combineReducers({
  HospitalReducer,
  DoctorReducer,
  LoginReducer,
  ReviewReducer,
  ScheduleReducer,
  AppointmentReducer,
  MedicalReportReducer
});

export default rootReducer;
