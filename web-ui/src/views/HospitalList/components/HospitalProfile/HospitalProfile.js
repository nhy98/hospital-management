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
import { Facebook as FacebookIcon, Twitter as TwitterIcon, Website as WebsiteIcon } from 'icons';

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
  socialIcon: {
    marginRight: theme.spacing(1)
  },
}));

const AccountProfile = props => {
  const { className,hospital, ...rest } = props;

  var websites = hospital.website.split(",")

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
              {hospital.hospitalName}
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              {hospital.email}
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              <WebsiteIcon className={classes.socialIcon} />
              {websites[0]}
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              <FacebookIcon className={classes.socialIcon} />
              {websites[1]}
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              <TwitterIcon className={classes.socialIcon} />
              {websites[2]}
            </Typography>
          </div>
          <Avatar
            className={classes.avatar}
            src={hospital.imageUrl}
          />
        </div>
        <div className={classes.progress}>
          <Typography variant="body1">Hospital Ratings: 70%</Typography>
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
          Address: {hospital.address}
        </WhiteTextTypography>
        <WhiteTextTypography
          align="center"
          variant="body2"
        >
          Hotline: {hospital.hotline}
        </WhiteTextTypography>
          {/* <Grid
            className={classes.statsItem}
            item
          >
            <GetAppIcon className={classes.statsIcon} />
            <WhiteTextTypography
              display="inline"
              variant="body2"
              onClick={event => handleViewDetail(event, hospital.id)}
              // onClick={handleViewDetail}
            >
                            View Detail
            </WhiteTextTypography>
          </Grid> */}
        </Grid>
      </CardActions>
    </Card>
  );
};

AccountProfile.propTypes = {
  className: PropTypes.string
};

export default AccountProfile;
