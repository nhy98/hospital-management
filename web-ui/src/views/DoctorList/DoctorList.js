import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { DoctorsToolbar, DoctorsTable } from './components';
import {useSelector,useDispatch} from 'react-redux'
import {
  getDoctors, getDoctorsByHospitalId,getDoctorsByName,setDoctorsCurrent
} from "../../actions/DoctorAction";
import { useParams } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const DoctorList = () => {
  const classes = useStyles();

  const params = useParams();
  console.log(params)

  const [currentPage,setCurrentPage] = useState(1)
  const itemsPerPage = 10;

  const doctors = useSelector(state => state.DoctorReducer.listDoctors)
  const doctorName = useSelector(state => state.DoctorReducer.doctorName)
  const doctorsCurrent = useSelector(state => state.DoctorReducer.listDoctorsCurrent)
  const maxPage = useSelector(state => state.DoctorReducer.maxPage)

  const token = useSelector(state => state.LoginReducer.guestToken)

  const dispatch = useDispatch()
  useEffect(()=> {
    if(params.id!=null){
      console.log("not nullllll")
      dispatch(getDoctorsByHospitalId(params.id,token))
    }
    else{
      if(doctorName!="a"){
        if(doctorName == "") dispatch(getDoctors(token))
        else dispatch(getDoctorsByName(doctorName,token))    
      }
      else dispatch(getDoctors(token))
      // console.log("nullllllllllll")
      // dispatch(getDoctors())
    }
  }, [doctorName]);


  useEffect(() => {
    console.log("1111111")
    const data = currentData()
    dispatch(setDoctorsCurrent(data))
  },[currentPage]) 

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
   return doctors.slice(begin, end);
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
  console.log(doctors)

  return (
    <div className={classes.root}>
      <DoctorsToolbar />
      <div className={classes.content}>
        <DoctorsTable doctors={doctorsCurrent} next={next} prev={prev} maxPage={maxPage} />
      </div>
    </div>
  );
};

export default DoctorList;
