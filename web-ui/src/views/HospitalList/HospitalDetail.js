import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { HospitalProfile, HospitalInformation } from './components';
import { useParams } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import {
  getHospitalById
} from "../../actions/HospitalAction";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const HospitalDetail = () => {
  const classes = useStyles();

  const params = useParams();
  console.log(params)

  const hospital = useSelector(state => state.HospitalReducer.hospital)
  const token = useSelector(state => state.LoginReducer.guestToken)

  const dispatch = useDispatch()
  useEffect(()=> {dispatch(getHospitalById(params.id,token))}, []);


  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={4}
          md={6}
          xl={4}
          xs={12}
        >
          <HospitalProfile hospital={hospital}/>
        </Grid>
        <Grid
          item
          lg={8}
          md={6}
          xl={8}
          xs={12}
        >
          <HospitalInformation hospital={hospital} />
        </Grid>
      </Grid>
    </div>
  );
};

export default HospitalDetail;
