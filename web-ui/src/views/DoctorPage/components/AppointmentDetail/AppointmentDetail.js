import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Divider,
  Grid,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateAppointment,
  getAppointmetOfDoctor,
  setUpdateStatusDefault
} from '../../../../actions/AppointmentAction';
const useStyles = makeStyles(() => ({
  root: {},
  decline: {
    backgroundColor: '#fc1a39',
    '&:hover': {
      backgroundColor: '#fb4242'
    }
  },
  accept: {
    backgroundColor: '#6600cc',
    '&:hover': {
      backgroundColor: '#7f00ff'
    }
  },
  hide: {
    display: 'none'
  },
  show: {
    display: 'block'
  }
}));

const AppointmentDetail = props => {
  const { className, isdeclinable, isdeclined, ...rest } = props;
  const classes = useStyles();

  const [values, setValues] = useState({
    declinetext: '',
    isDeclined: props.isdeclined,
    isDeclinable: props.isdeclinable
  });

  const dispatch = useDispatch();
  const token = useSelector(state => state.LoginReducer.doctorToken);
  const doctorInfo = useSelector(state => state.LoginReducer.doctorData);
  useEffect(() => {
    if (values.isDeclinable !== isdeclinable) {
      setValues({
        ...values,
        isDeclined: isdeclined,
        isDeclinable: isdeclinable
      });
    }
  }, [props]);

  // hàm xử lí khi đóng popup
  const handleClose = event => {
    setValues({
      ...values,
      isDeclined: false,
      isDeclinable: true,
      declinetext: ''
    });
    dispatch(getAppointmetOfDoctor(doctorInfo.id, token));
    // props.handleclose();
  };
  //hàm xử lí nhập liệu
  const handleChange = event => {
    if (event.target.value)
      setValues({
        ...values,
        isDeclinable: true,
        declinetext: event.target.value
      });
    else {
      setValues({
        ...values,
        isDeclinable: false,
        declinetext: event.target.value
      });
    }
  };
  //hàm xử lí khi ấn button decline
  const handleDecline = event => {
    if (values.declinetext === '')
      setValues({
        ...values,
        isDeclined: true,
        isDeclinable: false
      });
    else {
      let data = props.appointment;
      data.state = 2;
      dispatch(updateAppointment(data, token));
      handleClose();
    }
    //do decline
  };
  //hàm xử lí khi approve
  const handleApprove = event => {
    setValues({
      ...values,
      isDeclined: false,
      isDeclinable: true,
      declinetext: ''
    });
    handleClose();
  };

  const body = (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form autoComplete="off">
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Full name"
                margin="dense"
                value={props.appointment?.username}
                variant="outlined"
                InputProps={{
                  readOnly: true
                }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Day of birth"
                margin="dense"
                value={props.appointment?.dob}
                variant="outlined"
                InputProps={{
                  readOnly: true
                }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email address"
                margin="dense"
                value={
                  props.appointment?.email 
                }
                variant="outlined"
                InputProps={{
                  readOnly: true
                }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone"
                margin="dense"
                value={
                  props.appointment?.mobile 
                }
                variant="outlined"
                InputProps={{
                  readOnly: true
                }}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Address"
                margin="dense"
                value={
                  props.appointment.address 
                }
                variant="outlined"
                InputProps={{
                  readOnly: true
                }}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Reason"
                margin="dense"
                value={
                  props.appointment.reason 
                }
                variant="outlined"
                InputProps={{
                  readOnly: true
                }}
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
              className={values.isDeclined ? classes.show : classes.hide}>
              <TextField
                fullWidth
                onChange={handleChange}
                label="Why decline?"
                margin="dense"
                variant="outlined"
                required={values.isDeclined}
                name="declinetext"
                helperText="Provide a specific reason, then decline"
                value={values.declinetext}
              />
            </Grid>
          </Grid>
        </CardContent>
      </form>
    </Card>
  );
  function ButtonAction({ ispending }) {
    if (ispending)
      return (
        <DialogActions>
          <Button
            className={classes.accept}
            onClick={handleApprove}
            variant="contained"
            color="primary">
            Approve
          </Button>
          <Button onClick={handleClose} variant="contained">
            Cancel
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.decline}
            onClick={handleDecline}
            disabled={!values.isDeclinable}>
            Decline
          </Button>
        </DialogActions>
      );
    else return null;
  }
  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Appointment</DialogTitle>
      <DialogContent>{body}</DialogContent>
      <ButtonAction ispending={props.ispending}></ButtonAction>
    </Dialog>
  );
};

AppointmentDetail.propTypes = {
  className: PropTypes.string
};

export default AppointmentDetail;
