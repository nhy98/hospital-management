import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { AppointmentDetails,AppointmentGuide,UserAppointment } from './components';
import { Divider, Drawer } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  divider: {
    margin: theme.spacing(2, 4)
  },
}));

const Appointment = () => {
  const classes = useStyles();
  const [isDone,setIsDone] = useState(false)
  const [appointmentId,setAppointmentId] = useState(0)
  const handleSetDone = (id) => {
    setAppointmentId(id)
    setIsDone(true);
  };
  return (

    <React.Fragment className={classes.root}>
    {isDone
      ? <UserAppointment id={appointmentId}  />
      : <AppointmentDetails handleViewAppointment={handleSetDone}  />
    }
              <AppointmentGuide style={{marginTop: 50 + 'px'}}  />

  </React.Fragment>
    // <div className={classes.root}>
    //   <Grid
    //     container
    //     spacing={4}
    //   >


    //   </Grid>
    // </div>
  );
};

export default Appointment;
