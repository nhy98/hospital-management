import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { DoctorProfile, DoctorDetails } from './components';
import { useParams } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import {
  getDoctorById
} from "../../actions/DoctorAction";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const DoctorDetail = () => {
  const classes = useStyles();

  const params = useParams();
  console.log(params)

  const doctor = useSelector(state => state.DoctorReducer.doctor)
  const token = useSelector(state => state.LoginReducer.guestToken)

  const dispatch = useDispatch()
  useEffect(()=> {dispatch(getDoctorById(params.id,token))}, []);


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
          <DoctorProfile doctor={doctor}/>
        </Grid>
        <Grid
          item
          lg={8}
          md={6}
          xl={8}
          xs={12}
        >
          <DoctorDetails doctor={doctor} />
        </Grid>
      </Grid>
    </div>
  );
};

export default DoctorDetail;
