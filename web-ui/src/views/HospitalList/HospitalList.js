import React, { useState,useCallback,useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { HospitalToolbar, HospitalCard } from './components';
import {useSelector,useDispatch} from 'react-redux'
import {
  getHospitals,getHospitalByName,setHospitalsCurrent
} from "../../actions/HospitalAction";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

 const  HospitalList = () => {
  const classes = useStyles();
  console.log("===================================")
  const [currentPage,setCurrentPage] = useState(1)
  const itemsPerPage = 6;

  const guestData = useSelector(state => state.LoginReducer.guestData);
  const hospitals = useSelector(state => state.HospitalReducer.listHospitals)
  const hospitalsCurrent = useSelector(state => state.HospitalReducer.listHospitalsCurrent)

  const maxPage = useSelector(state => state.HospitalReducer.maxPage)
  const hospitalName = useSelector(state => state.HospitalReducer.hospitalName)
  const token = useSelector(state => state.LoginReducer.guestToken)
  const dispatch = useDispatch()
  useEffect(() => {
    if(hospitalName!="a"){
      if(hospitalName == "") dispatch(getHospitals(token))
      else dispatch(getHospitalByName(hospitalName,token))    
    }
    else dispatch(getHospitals(token))
    
  },[hospitalName])

  useEffect(() => {
    console.log("1111111")
    const data = currentData()
    dispatch(setHospitalsCurrent(data))
  },[currentPage]) 

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
   return hospitals.slice(begin, end);
  }

  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  function jump(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  }


  return (
    <div className={classes.root}>
      
      <HospitalToolbar/>
      <div className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          {hospitalsCurrent.map(hospital => (
            <Grid
              item
              key={hospital.id}
              lg={4}
              md={6}
              xs={12}
            >
              <HospitalCard hospital={hospital} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={classes.pagination}>
        <Typography variant="caption">1-6 of {maxPage}</Typography>
        <IconButton>
          <ChevronLeftIcon onClick={prev} />
        </IconButton>
        <IconButton>
          <ChevronRightIcon onClick={next} />
        </IconButton>
      </div>
    </div>
  );
};


export default HospitalList


