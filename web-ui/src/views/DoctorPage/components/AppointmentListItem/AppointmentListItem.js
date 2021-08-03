import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  ListItem,
  ListItemText,
  Typography,
  Button,
  Snackbar
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import HealingIcon from '@material-ui/icons/Healing';
import { AppointmentDetail } from '../AppointmentDetail';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateAppointment,
  getAppointmetOfDoctor,
  setUpdateStatusDefault
} from '../../../../actions/AppointmentAction';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: 'inline'
  },
  btnAction: {
    display: 'flex'
  },
  decline: {
    backgroundColor: '#fc1a39',
    '&:hover': {
      backgroundColor: '#fb4242'
    }
  },
  accept: {
    marginRight: 8,
    backgroundColor: '#6600cc',
    '&:hover': {
      backgroundColor: '#7f00ff'
    }
  },
  listItem: {
    cursor: 'pointer'
  }
}));

const AppointmentListItem = props => {
  const { className, appointment, ...rest } = props;

  const classes = useStyles();
  const horizontal = 'center';
  const vertical = 'top';
  const dispatch = useDispatch();
  const token = useSelector(state => state.LoginReducer.doctorToken);
  const doctorInfo = useSelector(state => state.LoginReducer.doctorInfo);
  const statusCode = useSelector(state => state.AppointmentReducer.statusCode);
  const [values, setValues] = useState({
    isHover: false,
    isOpen: false,
    isDeclined: false,
    isDeclinable: true,
    updateSucces: null,
  });
  useEffect(() => {
    if (statusCode !== null ) {
      notify(statusCode);
    }
  }, [statusCode]);
  //hàm xử lí khi hover chuột
  const mouseEnter = event => {
    setValues({
      ...values,
      isHover: true
    });
  };
  //hàm xử lí khi hover chuột
  const mouseLeave = event => {
    setValues({
      ...values,
      isHover: false,
    });
  };

  const openDetailPopup = event => {
    setValues({
      ...values,
      isOpen: true,
    });
  };
  const openDetailPopupDeclined = event => {
    setValues({
      ...values,
      isOpen: true,
      isDeclined: true,
      isDeclinable: false
    });
  };
  const approveAppointment = event => {
    let data = props.appointment;
    data.state = 1;
    dispatch(updateAppointment(data, token));
  };
  const handleClose = event => {
    setValues({
      ...values,
      isOpen: false,
      isDeclined: false,
      isDeclinable: true
    });
  };
  const notify = code => {
    if (code === 1)
      setValues({
        ...values,
        updateSucces: true,
      });
    else
      setValues({
        ...values,
        updateSucces: false,
      });
    dispatch(setUpdateStatusDefault(null));
    
  };
  //hàm xử lí khi toast ẩn đi
  const handleToastClose = () => {
    if (values.updateSucces === true)
      setValues({
        ...values,
        updateSucces: null,
      });
    if (values.updateSucces === false)
      setValues({
        ...values,
        updateSucces: null,
      });
      dispatch(getAppointmetOfDoctor(doctorInfo.id, token));
  };
  function ButtonAction({ isHover }) {
    if (isHover && props.ispending)
      return (
        <div className={classes.btnAction}>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            className={classes.accept}
            startIcon={<LocalHospitalIcon />}
            onClick={approveAppointment}>
            Approve
          </Button>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            className={classes.decline}
            startIcon={<HealingIcon />}
            onClick={openDetailPopupDeclined}>
            Decline
          </Button>
        </div>
      );
    else return null;
  }

  const UpdateToast = ({ update }) => {
    if (update === true)
      return (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={update}
          autoHideDuration={1500}
          onClose={handleToastClose}>
          <Alert variant="filled" severity="success">
            Update schedule successfully!
          </Alert>
        </Snackbar>
      );
    else if (update === false)
      return (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={!update}
          autoHideDuration={1500}
          onClose={handleToastClose}>
          <Alert variant="filled" severity="error">
            Something wrong! Please check again
          </Alert>
        </Snackbar>
      );
    else return null;
  };
  return (
    <div>
      <UpdateToast update={values.updateSucces}></UpdateToast>
      <ListItem
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className={classes.listItem}>
        <ListItemText
          onClick={openDetailPopup}
          primary={props.appointment?.account.fullname}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary">
                {props.appointment?.reason}
              </Typography>
            </React.Fragment>
          }
        />
        <ButtonAction isHover={values.isHover}></ButtonAction>
      </ListItem>
      <AppointmentDetail
        open={values.isOpen}
        handleclose={handleClose}
        appointment={props?.appointment}
        isdeclined={values.isDeclined}
        isdeclinable={values.isDeclinable}
        ispending={props.ispending}></AppointmentDetail>
    </div>
  );
};

AppointmentListItem.propTypes = {
  className: PropTypes.string
};

export default AppointmentListItem;
