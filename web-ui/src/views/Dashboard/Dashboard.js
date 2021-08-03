import React, { useEffect } from 'react';
import { makeStyles,withStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { getGuestToken } from '../../actions/LoginAction';
import {
  Budget,
  TotalUsers,
  TasksProgress,
  TotalProfit,
  LatestSales,
  UsersByDevice,
  LatestProducts,
  LatestOrders,
  SlideShow,
} from './components';

import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import HospitalIcon from '@material-ui/icons/LocalHospital';
import PersonIcon from '@material-ui/icons/Person';
import { useHistory } from 'react-router-dom';

const PurpleTextTypography = withStyles({
  root: {
    color: '#6600cc',
    paddingBottom: 20
  }
})(Typography);
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  redirectToPage: {
    '&:hover': {
      background: 'linear-gradient(to left, #ffffff 0%, #cc99ff 102%)',
      boxShadow: '10px 10px 5px #ba87e0',
      cursor: 'pointer'
    }
  },
  gridHeight:{
    height:500+"px"
  },
  displayFlex:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center"
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  const pages = [
    
    
    {
      title: 'Doctors',
      href: '/doctors',
      icon: <PeopleIcon />,
      description: 'Find your doctor'
    },
    {
      title: 'Hospitals',
      href: '/hospitals',
      icon: <HospitalIcon />,
      description: 'Find your hospital'

    },
    {
      title: 'Medical Records',
      href: '/medical-report',
      icon: <PersonIcon />,
      description: 'Find your medical record'

    },
    {
      title: 'Reviews',
      href: '/reviews',
      icon: <DashboardIcon />,
      description: 'Get doctor reviews'

    },
   
  ];

  const guestToken = useSelector(state => state.LoginReducer.guestToken);
  const doctorToken = useSelector(state => state.LoginReducer.doctorToken);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGuestToken());
  }, []);

  const history = useHistory();
  const onChangePage = (event, href) => {
    history.push(href);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>

      {pages.map(page => (
        <Grid item lg={3} sm={6} xl={3} xs={12}>
        <Budget page={page} className={classes.redirectToPage} onClick={event => onChangePage(event,page.href)} />
      </Grid>
      ))}
        <Grid item lg={8} md={8} xl={6} xs={6} >
          <SlideShow/>
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <div style = {{height:"400px"}}>
          <UsersByDevice />
          </div>          
        </Grid>
     
        <Grid item lg={12} md={12} xl={9} xs={12}>
          <LatestOrders />
        </Grid>
        <Grid item lg={12} md={12} xl={9} xs={12}>
          <div className={classes.displayFlex}>
            <PurpleTextTypography align="center" variant="h2">
              HOW TO MAKE AN APPOINTMENT
            </PurpleTextTypography>
              <img height="400px" width="100%"
                  src="/images/guide.png"
              />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
