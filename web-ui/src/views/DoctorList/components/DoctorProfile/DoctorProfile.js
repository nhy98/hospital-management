import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles,withStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
  LinearProgress,
  Grid
} from '@material-ui/core';

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);
const useStyles = makeStyles(theme => ({
  root: {},
  details: {
    display: 'flex'
  },
  avatar: {
    marginLeft: 'auto',
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
  progress: {
    marginTop: theme.spacing(2)
  },
  uploadButton: {
    marginRight: theme.spacing(2)
  },
  cardFooter:{
    background: '#6600cc',
  },
  
}));

const DoctorProfile = props => {
  const { className,doctor, ...rest } = props;

  const classes = useStyles();

  const user = {
    name: 'Shen Zhi',
    city: 'Los Angeles',
    country: 'USA',
    timezone: 'GTM-7',
    avatar: '/images/avatars/avatar_11.png'
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div className={classes.details}>
          <div>
            <Typography
              gutterBottom
              variant="h2"
            >
              {doctor.fullname}
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              Office: {doctor.address}
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              Hospital: {doctor.hospital.hospitalName}
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              Position: {doctor.hospital.hospitalName}
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              Specialization: {doctor.hospital.hospitalName}
            </Typography>
          </div>
          <Avatar
            className={classes.avatar}
            src={doctor.avatar}
          />
        </div>
        <div className={classes.progress}>
          <Typography variant="body1">Doctor Ratings: 70%</Typography>
          <LinearProgress
            value={70}
            variant="determinate"
          />
        </div>
      </CardContent>
      <Divider />
      <CardActions className={classes.cardFooter}>
      <Grid
          container
          justify="center"
          direction="column"
        >
          <WhiteTextTypography
          align="center"
          variant="body2"
        >
          Address: {doctor.address}
        </WhiteTextTypography>
        <WhiteTextTypography
          align="center"
          variant="body2"
        >
          Hotline: {doctor.mobile}
        </WhiteTextTypography>
        
        </Grid>
      </CardActions>
    </Card>
  );
};

DoctorProfile.propTypes = {
  className: PropTypes.string
};

export default DoctorProfile;
