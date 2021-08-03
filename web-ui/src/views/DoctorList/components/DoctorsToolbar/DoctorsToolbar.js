import React , {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { SearchInput } from 'components';
import {setDoctorName} from '../../../../actions/DoctorAction'
const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
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
    marginRight: theme.spacing(1)
  }
}));

const DoctorsToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [values,setValues] = useState("")
  const dispatch = useDispatch()
  const handleSearchDoctors = async (event) =>{
    if(event.key === 'Enter'){
      dispatch(setDoctorName(values))
    } 
  }

  const handleChangeSearchInput = event => {
    setValues(event.target.value);
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      {/* <div className={classes.row}>
        <span className={classes.spacer} />
        <Button className={classes.importButton}>Import</Button>
        <Button className={classes.exportButton}>Export</Button>
        <Button
          color="primary"
          variant="contained"
        >
          Add doctor
        </Button>
      </div> */}
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Search doctor"
          onKeyPress={event => handleSearchDoctors(event)}
          onChange = {handleChangeSearchInput}

        />
      </div>
    </div>
  );
};

DoctorsToolbar.propTypes = {
  className: PropTypes.string
};

export default DoctorsToolbar;
