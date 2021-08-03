import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles,withStyles } from '@material-ui/styles';
import { Typography, Link } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { Facebook as FacebookIcon, Twitter as TwitterIcon, Website as WebsiteIcon } from 'icons';
import LockOpenIcon from '@material-ui/icons/LockOpen';

const WhiteTextTypography = withStyles({
  root: {
    color: '#FFFFFF',
  }
})(Typography);
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    background:'#500c7a'
  },
  displayFlex:{
    display:"flex",
    justifyContent:"center"
  },
  icon:{
    color: "white",
    paddingRight:"5px"
  }
}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.displayFlex}>
        <div>
          <div>
              <PersonIcon className={classes.icon}/>
            <WhiteTextTypography variant="body1s">
            Hotline: 888888888
          </WhiteTextTypography>
         
          </div>
          <div>
            <LockOpenIcon className={classes.icon}/>
          <WhiteTextTypography variant="body1s">
        Address: 1 Dai Co Viet, Hai Ba Trung, Hanoi
      </WhiteTextTypography>
          </div>
          <div>
              <FacebookIcon className={classes.icon}/>
              <Link href="https://www.facebook.com/1met73"  color="white">
              <WhiteTextTypography variant="body1s">
            Facebook
          </WhiteTextTypography>
            </Link>
            <TwitterIcon className={classes.icon}/>
          <Link href="https://www.facebook.com/1met73"  color="white">
              <WhiteTextTypography variant="body1s">
            Twitter
          </WhiteTextTypography>
            </Link>
          </div>
          
          <div>
         
          </div>
          
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
