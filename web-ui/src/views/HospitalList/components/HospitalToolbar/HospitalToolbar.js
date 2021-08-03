import React , {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

import { SearchInput } from 'components';
import {getHospitalByName,setHospitalName} from '../../../../actions/HospitalAction'
import { useDispatch } from 'react-redux';
import {HospitalFormAdding} from '../../components'
const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1),
    
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1),
    // '&:hover': {
    //   boxShadow: '10px 10px 5px #ba87e0',
    // }
  },
}));

const HospitalToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [values,setValues] = useState("")
  const [open,setOpen] = useState(false)

  const dispatch = useDispatch()
  const handleSearchHospitals = async (event) =>{
    if(event.key === 'Enter'){
      dispatch(setHospitalName(values))
    } 
  }

  const handleChangeSearchInput = event => {
    setValues(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  
  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
    {/* <div className={classes.row}>
            <span className={classes.spacer} />
            <Button className={classes.importButton} >Import</Button>
            <Button className={classes.exportButton}>Export</Button>
            <Button
              color="primary"
              variant="contained"
              onClick={handleClickOpen}
            >
              Add doctor
            </Button>
          </div> */}

      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          onChange = {handleChangeSearchInput}
          placeholder="Search hospital"
          onKeyPress={event => handleSearchHospitals(event)}

        />
      </div>

      <HospitalFormAdding openState={open}/>
    </div>
  );
};

HospitalToolbar.propTypes = {
  className: PropTypes.string
};

export default HospitalToolbar;
