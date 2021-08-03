import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles,withStyles} from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  TableSortLabel,
  Typography
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import HospitalIcon from '@material-ui/icons/LocalHospital'
import PersonIcon from '@material-ui/icons/Person';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ReceiptIcon from '@material-ui/icons/Receipt';

import mockData from './data';
import { StatusBullet } from 'components';

const WhiteTextTypography = withStyles({
  root: {
    color: '#FFFFFF',
  }
})(Typography);
const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0,
    paddingTop: 20
  },
  inner: {
    minWidth: 800
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end'
  },
  displayFlex:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center"
  },
  displayColumn:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    margin: "10px",
    width:"250px",
    height:"250px"
  },
  icon:{
    color:'white',
    width:'40px',
    height:'40px',
    marginBottom:'10px'

  },
}));

const statusColors = {
  delivered: 'success',
  pending: 'info',
  refunded: 'danger'
};

const LatestOrders = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [orders] = useState(mockData);

  return (
    <Card {...rest} className={clsx(classes.root, className)} style={{background:"#c7b2d4"}}>
      <CardHeader
        title={<WhiteTextTypography align="center" gutterBottom variant="h1">
        WHAT WE CAN DO
      </WhiteTextTypography>}
        align="center"
      />
      <Divider/>
      <CardContent className={classes.content}>
        <div className={classes.displayFlex}>
          <div className={classes.displayColumn}>
            <PersonIcon className={classes.icon}/>
            <WhiteTextTypography align="center" gutterBottom variant="h3">
              Find Doctors
            </WhiteTextTypography>
            <WhiteTextTypography align="center" gutterBottom variant="h5">
              You can easily find a doctor in any hospitals registered in our system.
              Moreover, you can see their information such as: Experience, Specialization, Roles, Educatiton, etc.
              
            </WhiteTextTypography>
          </div>
         
          <div className={classes.displayColumn}>
            <HospitalIcon className={classes.icon}/>
            <WhiteTextTypography align="center" gutterBottom variant="h3">
            Find Hospitals
            </WhiteTextTypography>
            <WhiteTextTypography align="center" gutterBottom variant="h5">
              You can easily find any hospials registered in our system.
              Moreover, you can see their information such as: Services, Organization, History, Contact, etc.
              
            </WhiteTextTypography>
          </div>
          <div className={classes.displayColumn}>
            <DashboardIcon className={classes.icon}/>
            <WhiteTextTypography align="center" gutterBottom variant="h3">
            Review Doctors
            </WhiteTextTypography>
            <WhiteTextTypography align="center" gutterBottom variant="h5">
              After visiting the hospital and making the medical examinatiton, you can go to our website
              to review your doctor.
              Those reviews can help others people to make more right decision in choosing hospital as well as doctor
              for their health
            </WhiteTextTypography>
          </div>
          <div className={classes.displayColumn}>
            <ReceiptIcon className={classes.icon}/>
            <WhiteTextTypography align="center" gutterBottom variant="h3">
              Make Appoinments
            </WhiteTextTypography>
            <WhiteTextTypography align="center" gutterBottom variant="h5">
              Take a look in our website , find your desired hospital and doctor then make your appointment
              with her/him.
              You can check our guideline at the bottom of this website for more details about the way to make appointment
            </WhiteTextTypography>
          </div>
          <div className={classes.displayColumn}>
            <HospitalIcon className={classes.icon}/>
            <WhiteTextTypography align="center" gutterBottom variant="h3">
              Medical Record
            </WhiteTextTypography>
            <WhiteTextTypography align="center" gutterBottom variant="h5">
            After visiting the hospital and making the medical examinatiton, you can go to our website
              to check your medical record.
              The doctor will post your record in our system, then you can use your record code which will be provided by email
              to look up your medical record
            </WhiteTextTypography>
          </div>
        </div>
      </CardContent>
      
    </Card>
  );
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
