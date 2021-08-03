import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Divider, Grid, TextField } from '@material-ui/core';
import { getAppointmetDetail } from '../../../../actions/AppointmentAction';
import { useSelector, useDispatch } from 'react-redux';

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
  },
  notchedOutline: {
    borderWidth: '0',
    borderBottomWidth: '1px',
    borderRadius: '0',
    borderBottomColor: '#6600cc !important'
  },
  displayForm: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const UserAppointment = props => {
  const { className, id, ...rest } = props;
  const classes = useStyles();

  const dispatch = useDispatch()
  const token = useSelector(state => state.LoginReducer.guestToken)

  useEffect(()=> {dispatch(getAppointmetDetail(id,token))}, []);

  const appointment = useSelector(
    state => state.AppointmentReducer.appointmentDetail
  );
  console.log('appointmen   ' + appointment);
  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form autoComplete="off">
        <Divider />
        <CardContent>
          <Grid container className={classes.displayForm} spacing={3}>
            <Grid item xs={6}>
              <TextField
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
                size="medium"
                label="Full name"
                margin="dense"
                value={appointment?.username}
                variant="outlined"
                InputProps={{
                  readOnly: true
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
                label="Email address"
                margin="dense"
                value={appointment?.email}
                variant="outlined"
                InputProps={{
                  readOnly: true
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
                label="Phone"
                margin="dense"
                value={appointment?.mobile}
                variant="outlined"
                InputProps={{
                  readOnly: true
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
                label="Day of birth"
                margin="dense"
                value={appointment?.dob}
                variant="outlined"
                InputProps={{
                  readOnly: true
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
                label="Address"
                margin="dense"
                value={appointment?.address}
                variant="outlined"
                InputProps={{
                  readOnly: true
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </form>
    </Card>
  );
};

UserAppointment.propTypes = {
  className: PropTypes.string
};

export default UserAppointment;
