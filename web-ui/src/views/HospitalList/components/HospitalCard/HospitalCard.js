import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Divider,
  Button
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';
import { useHistory } from 'react-router-dom';

const WhiteTextTypography = withStyles({
  root: {
    color: '#FFFFFF'
  }
})(Typography);

const PurpleTextTypography = withStyles({
  root: {
    color: '#6600cc'
  }
})(Typography);

const ButtonCustom = withStyles({
  root: {
    borderColor: '#6600cc',
    fontSize: 12 + 'px',
    color: '#6600cc',
    '&:hover': {
      background: 'linear-gradient(to top, #003366 0%, #9900ff 70%)',
      color: 'white',
      boxShadow: '5px 5px 5px #ba87e0'
    },
    marginTop:10+'px'
  },
})(Button);

const useStyles = makeStyles(theme => ({
  root: {},
  imageContainer: {
    height: 64,
    width: 64,
    margin: '0 auto',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%'
  },
  statsItem: {
    display: 'flex',
    alignItems: 'center'
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  },
  cardFooter: {
    background: '#6600cc'
  },
  cardAction:{
    display: "flex",
    justifyContent: "center"
  }
}));

// const handleViewDetail = (event,id) =>{
//   console.log("abc")
//   console.log(id)
// }

const HospitalCard = props => {
  const { className, hospital, ...rest } = props;

  const classes = useStyles();

  const history = useHistory();

  const handleViewDetail = (event, id) => {
    history.push('/hospital/' + id);
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <div className={classes.imageContainer}>
          <img
            alt="Product"
            className={classes.image}
            // src={product.imageUrl}
            src={hospital.imageUrl}
          />
        </div>
        <PurpleTextTypography align="center" gutterBottom variant="h4">
          {hospital.hospitalName}
        </PurpleTextTypography>

        <PurpleTextTypography align="center" variant="body1">
          {hospital.description}
        </PurpleTextTypography>
        <div className={classes.cardAction}>
          <ButtonCustom
            variant="outlined"
            color="primary"
            onClick={event => handleViewDetail(event, hospital.id)}>
            Detail
          </ButtonCustom>
        </div>
      </CardContent>
      <Divider />
      <CardActions className={classes.cardFooter}>
        <Grid container justify="center" direction="column">
          <WhiteTextTypography align="center" variant="body2">
            Address: {hospital.address}
          </WhiteTextTypography>
          <WhiteTextTypography align="center" variant="body2">
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

HospitalCard.propTypes = {
  className: PropTypes.string,
  hospital: PropTypes.object.isRequired
};

export default HospitalCard;
