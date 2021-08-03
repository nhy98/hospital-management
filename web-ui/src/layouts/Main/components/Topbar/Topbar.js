import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles,withStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton,Typography,Link } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
import { useSelector } from 'react-redux';
import InputIcon from '@material-ui/icons/Input';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import HospitalIcon from '@material-ui/icons/LocalHospital';
import PersonIcon from '@material-ui/icons/Person';
import { useHistory } from 'react-router-dom';

const WhiteTextTypography = withStyles({
  root: {
    color: '#FFFFFF',
  }
})(Typography);
const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    background: 'linear-gradient(to top, #003366 0%, #9900ff 70%)'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1),
    color: '#ffffff'
  },
  displayFlex:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
  },
  columnFlex:{
    marginLeft: 10,
  
    '&:hover':{
      background:'#500c7a',
      cursor:'pointer'
    }
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();
  const history = useHistory();
  const onChangePage = (event, href) => {
    history.push(href);
  };
  const pages = [
    
    
    {
      title: 'Doctors',
      href: '/doctors',
      icon: <PeopleIcon />
    },
    {
      title: 'Hospitals',
      href: '/hospitals',
      icon: <HospitalIcon />
    },
    {
      title: 'Medical Records',
      href: '/medical-report',
      icon: <PersonIcon />
    },
    {
      title: 'Reviews',
      href: '/reviews',
      icon: <DashboardIcon />
    },
   
  ];
  const roleID = useSelector(state => state.LoginReducer.role);
  const [notifications] = useState([]);
  function PersonalButton({ role }) {
    if (role === 2)
      return (
        <RouterLink to="/personal">
          <IconButton color="inherit"className={classes.signOutButton}>
              <PersonIcon />
          </IconButton>
        </RouterLink>
      );
    else return null;
  }
  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar>
        <RouterLink to="/">
          <img alt="Logo" style={{height:"50px"}} src="/images/logos/logo2.png" />
        </RouterLink>
       

        <div className={classes.flexGrow} />

        <div className={classes.displayFlex}>
          {pages.map(page => (
            <div className={classes.columnFlex} onClick={event => onChangePage(event,page.href)}>
              <WhiteTextTypography variant="body1s">
                {page.title}

                </WhiteTextTypography>
            </div>
          ))}
        </div>
        <PersonalButton role={roleID}></PersonalButton>
        <RouterLink to="/sign-in">
          <IconButton className={classes.signOutButton} color="inherit">
            <InputIcon />
          </IconButton>
        </RouterLink>
        {/* <Hidden lgUp>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden> */}
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
