import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme ,withStyles} from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Divider,
  Typography
} from '@material-ui/core';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import BuildIcon from '@material-ui/icons/Build'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'

const WhiteTextTypography = withStyles({
  root: {
    color: '#FFFFFF',
  }
})(Typography);

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  chartContainer: {
    position: 'relative',
    height: '200px',
    width:'270px',
    backgroundColor:'#ad63db',
    margin: '2px',
    '&:hover':{
      cursor:"pointer",
      background: 'purple',
    },
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'

  },
  chartContainerLeft: {
    position: 'relative',
    height: '200px',
    width:'270px',
    backgroundColor:'purple',
    margin: '2px',
    '&:hover':{
      cursor:"pointer",
      background: '#ad63db',
    },
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  icon:{
    color:'white',
    width:'50px',
    height:'50px'

  },
  stats: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  device: {
    textAlign: 'center',
    padding: theme.spacing(1)
  },
  deviceIcon: {
    color: theme.palette.icon
  },
  displayFlex:{
    display:"flex",
    flexDirection:"row"
  }
}));

const UsersByDevice = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [63, 15, 22],
        backgroundColor: [
          theme.palette.primary.main,
          theme.palette.error.main,
          theme.palette.warning.main
        ],
        borderWidth: 8,
        borderColor: theme.palette.white,
        hoverBorderColor: theme.palette.white
      }
    ],
    labels: ['Desktop', 'Tablet', 'Mobile']
  };


  

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
     
      <CardContent style={{padding:'0'}}>
        <div className={classes.displayFlex}>
          <div className={classes.chartContainerLeft}>
            <ThumbUpIcon className={classes.icon}/>
            <WhiteTextTypography align="center" gutterBottom variant="h3">
              Trust
          </WhiteTextTypography>
          </div>
          <div className={classes.chartContainer}>
          <BuildIcon className={classes.icon}/>
            <WhiteTextTypography align="center" gutterBottom variant="h3">
              Convenient
          </WhiteTextTypography>
          </div>
        </div>
        <div className={classes.displayFlex}> 
          <div className={classes.chartContainer}>
          <FavoriteIcon className={classes.icon}/>
            <WhiteTextTypography align="center" gutterBottom variant="h3">
              Devoted
          </WhiteTextTypography>
          </div>
          <div className={classes.chartContainerLeft}>
          <LaptopMacIcon className={classes.icon}/>
            <WhiteTextTypography align="center" gutterBottom variant="h3">
              Modern
          </WhiteTextTypography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

UsersByDevice.propTypes = {
  className: PropTypes.string
};

export default UsersByDevice;
