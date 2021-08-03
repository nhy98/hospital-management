import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid
} from '@material-ui/core';
import { AppointmentList } from '../AppointmentList';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 16
  },
  cardTitle: {
    fontSize: 18
  }
}));

const DoctorAppointment = props => {
  const { className, doctor, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    appointments: props.appointments
  });
  const handleApproveAppointment = event =>{
    props.handleApproveAppointment()
  }
  useEffect(() => {
    if (props.appointments !== undefined) {
      setValues({
        ...values,
        appointments: props.appointments
      });
    }
  }, [props]);
  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader
        classes={{ title: classes.cardTitle }}
        title="Appointments"></CardHeader>
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <Card>
              <CardHeader title="Pending"></CardHeader>
              <Divider />
              <CardContent>
                <AppointmentList ispending={true} data={values.appointments?.pending} handleApproveAppointment={handleApproveAppointment}></AppointmentList>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} xs={12}>
            <Card>
              <CardHeader title="Approved"></CardHeader>
              <Divider />
              <CardContent>
                <AppointmentList ispending={false} data={values.appointments?.accepted}></AppointmentList>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} xs={12}>
            <Card>
              <CardHeader title="Declined"></CardHeader>
              <Divider />
              <CardContent>
                <AppointmentList ispending={false} data={values.appointments?.declined}></AppointmentList>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

DoctorAppointment.propTypes = {
  className: PropTypes.string
};

export default DoctorAppointment;
