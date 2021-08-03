import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Divider,
  Grid,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  decline: {
    backgroundColor: '#fc1a39',
    '&:hover': {
      backgroundColor: '#fb4242'
    }
  },
  accept: {
    backgroundColor: '#6600cc',
    '&:hover': {
      backgroundColor: '#7f00ff'
    }
  },
  hide: {
    display: 'none'
  },
  show: {
    display: 'block'
  }
}));

const HospitalFormAdding = props => {
  const { className, openState, ...rest } = props;
  const classes = useStyles();

  const [values, setValues] = useState({
    
  });

  useEffect(() => {
   
  }, []);



  const [open, setOpen] = React.useState(openState);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form autoComplete="off">
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Full name"
                margin="dense"
                value=""
                variant="outlined"
                
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Day of birth"
                margin="dense"
                value=""
                variant="outlined"
               
              />
            </Grid>
           
          </Grid>
        </CardContent>
      </form>
    </Card>
  );

  return (
    <Dialog
    open={open}
    onClose={handleClose}
      aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Appointment</DialogTitle>
      <DialogContent>{body}</DialogContent>
    </Dialog>
  );
};

HospitalFormAdding.propTypes = {
  className: PropTypes.string
};

export default HospitalFormAdding;
