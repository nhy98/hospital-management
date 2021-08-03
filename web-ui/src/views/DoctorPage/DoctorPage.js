import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { DoctorInfo, DoctorSchedule, DoctorAppointment } from './components';
import { useSelector, useDispatch } from 'react-redux';
import { getDoctorSchedule } from '../../actions/ScheduleAction';
import { getAppointmetOfDoctor } from '../../actions/AppointmentAction';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  grid: {
    display: 'block'
  }
}));

const DoctorPage = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const doctorInfo = useSelector(state => state.LoginReducer.doctorData);
  const token = useSelector(state => state.LoginReducer.doctorToken);
  const schedule = useSelector(state => state.ScheduleReducer.schedule);
  const appointments = useSelector(
    state => state.AppointmentReducer.appointments
  );

  useEffect(() => {
    dispatch(getDoctorSchedule(doctorInfo.id, token));
    dispatch(getAppointmetOfDoctor(doctorInfo.id, token));
  }, []);

  const [values, setValues] = useState({
    fullname: doctorInfo?.fullname,
    hospital: doctorInfo?.hospital,
    email: doctorInfo?.email,
    mobile: doctorInfo?.mobile,
    workingPosition: doctorInfo?.workingPosition,
    specialization: doctorInfo?.specialization,
    isEdit: false,
    helpertext: '',
    errorFirstName: false,
    errorLastName: false,
    errorPhone: false,
    errorEmail: false
  });
  //hàm xử lí khi thay đổi input value
  const handleChange = event => {
    if (!event.target.value) {
      switch (event.target.name) {
        case 'fullname':
          setValues({
            ...values,
            [event.target.name]: event.target.value,
            errorFirstName: true
          });
          break;
        case 'hospital':
          setValues({
            ...values,
            [event.target.name]: event.target.value,
            errorLastName: true
          });
          break;
        case 'mobile':
          setValues({
            ...values,
            [event.target.name]: event.target.value,
            errorPhone: true
          });
          break;
        case 'email':
          setValues({
            ...values,
            [event.target.name]: event.target.value,
            errorEmail: true
          });
          break;
        default:
          break;
      }
    } else {
      switch (event.target.name) {
        case 'fullname':
          setValues({
            ...values,
            [event.target.name]: event.target.value,
            errorFirstName: false
          });
          break;
        case 'hospital':
          setValues({
            ...values,
            [event.target.name]: event.target.value,
            errorLastName: false
          });
          break;
        case 'mobile':
          const re = /^[0-9\b]+$/;
          if (event.target.value === '' || re.test(event.target.value)) {
            setValues({
              ...values,
              [event.target.name]: event.target.value,
              errorPhone: false
            });
          }
          break;
        case 'email':
          setValues({
            ...values,
            [event.target.name]: event.target.value,
            errorEmail: false
          });
          break;
        default:
          setValues({
            ...values,
            [event.target.name]: event.target.value
          });
          break;
      }
    }
  };
  const saveInfo = (event, id) => {
    
    setValues({
      ...values,
      isEdit: false,
      helpertext: ''
    });
  };
  const handleApproveAppointment = event =>{
    dispatch(getAppointmetOfDoctor(doctorInfo.id, token));
  }
  const editInfomation = event => {
    setValues({
      ...values,
      isEdit: true,
      helpertext: 'Plese specify this infomation'
    });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={4} classes={{ root: classes.grid }}>
        <DoctorInfo
          values={values}
          handleChange={handleChange}
          saveInfo={saveInfo}
          editInfomation={editInfomation}
        />
        <DoctorSchedule schedule={schedule} />
        <DoctorAppointment appointments={appointments} />
      </Grid>
    </div>
  );
};

export default DoctorPage;
