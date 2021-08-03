import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';
import "react-datepicker/dist/react-datepicker.css";
import { Typography } from '@material-ui/core';
import { AppointmentScheduleTable } from '../AppointmentScheduleTable';


const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  displayFlex:{
      display:'flex',
      justifyContent:'center',
      paddingTop: 20+'px'
  },
  name: {
    marginTop: theme.spacing(1)
  }
}));

const AppointmentGuide = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
     
        <CardHeader
          subheader="You can follow guide to make your appointment with desired doctor"
          title="DOCTOR WORKING TIME"
        />
        <Divider />
        <CardContent>
            
          <Grid
            container
            spacing={3}
            className={classes.displayFlex}
          >
              <AppointmentScheduleTable  />
            <div>
                <Typography
                    className={classes.name}
                    variant="h4"
                    align='center'
                    color='textSecondary'
                >
                    How to make an appointment
                </Typography>
            <img
                src="/images/guide.png"
            />
            </div>
            
          </Grid>
        </CardContent>
        
    </Card>
  );
};

AppointmentGuide.propTypes = {
  className: PropTypes.string
};

export default AppointmentGuide;
