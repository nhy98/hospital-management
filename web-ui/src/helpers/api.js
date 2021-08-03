// --------------API CONFIG -----------------------------------------
const API_LINK = 'http://localhost:8080';

const API_PATH = `${API_LINK}/api`;

const API_VERSION = 'v1';
const API = `${API_PATH}/${API_VERSION}`;

// --------------AUTHORIZE-------------------------------------------
const AUTHORIZE = `${API}/auth/login`;

// --------------HOSPITAL-------------------------------------------
const HOSPITALS = `${API}/hospital/all`;
const HOSPITAL = `${API}/hospital`;

// --------------DOCTOR-------------------------------------------
const DOCTORS = `${API}/account/user-type/2`;
const DOCTOR = `${API}/account`;
const DOCTORS_BY_HOSPITAL = `${API}/account/hospital`;

// --------------REVIEW-------------------------------------------

const REVIEWS_BY_DOCTOR = `${API}/review/account`;
const CREATE_REVIEW = `${API}/review`;
const REVIEWS = `${API}/review/all`;

// --------------SCHEDULE-------------------------------------------
const SCHEDULE = `${API}/schedule`;
// --------------APPOINTMENT-------------------------------------------
const APPOINTMENT = `${API}/appointment`;
// const CREATE_APPOINTMENT = `${API}/appointment`;
// --------------MEDICAL_REPORT-------------------------------------------
const MEDICAL_REPORT = `${API}/medical-record`;
const SEND_EMAIL = `${API}/appointment/mail`;

// ------------LIST API ----------------------------------------------
const api = {
  AUTHORIZE,
  HOSPITALS,
  DOCTORS,
  HOSPITAL,
  DOCTORS_BY_HOSPITAL,
  DOCTOR,
  REVIEWS_BY_DOCTOR,
  CREATE_REVIEW,
  SCHEDULE,
  APPOINTMENT,
  REVIEWS,
  MEDICAL_REPORT,
  SEND_EMAIL
};

export default api;
