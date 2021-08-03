import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles,withStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import { KeyboardDateTimePicker , MuiPickersUtilsProvider,KeyboardDatePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import {useSelector,useDispatch} from 'react-redux'
import { useHistory,useParams } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {createAppointment} from '../../../../actions/AppointmentAction'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    width:100+'%'
  },
  content: {
    marginTop: theme.spacing(2)
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#6600cc !important"
  }
}));
const ButtonCustom = withStyles({
  root: {
    background: 'linear-gradient(to top, #003366 0%, #9900ff 70%)',
    fontSize:13+'px',
    color: "white",
    '&:hover': {
      background: 'linear-gradient(to top, #003366 0%, #9900ff 70%)',
      color:'white',
      boxShadow: '5px 5px 5px #ba87e0',
    },
    marginTop:10+'px'
  }
})(Button)
const AppointmentDetails = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const param = useParams()

  const doctor = useSelector(state => state.DoctorReducer.doctor)
  const token = useSelector(state => state.LoginReducer.guestToken)

  console.log(doctor)
  var current_date =new Date();
  const [values, setValues] = useState({
    id:"0",
    state:0,
    username: 'Shen',
    email: 'shen.zhi@devias.io',
    mobile: '',
    address:'',
    dob:'',
    reason:'',
    appointedDate:current_date,
    createdDate:moment().format('MMMM Do YYYY, h:mm:ss a'),
    account:{
      id:param.id
    }
  })

 
  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleChangeDate = date => {
    console.log("dateeee: "+date)
    setValues({
      ...values,
      appointed_date: date
    });
  };
  const history = useHistory()
  const handleCancelButton = (event,id) => {
    history.push("/doctor/"+id)
  }
  const dispatch = useDispatch()

  const handleBooking = async (event) => {
    setOpen(false);
   
    var data = await dispatch(createAppointment(values,token))
    alert("success")
    props.handleViewAppointment(data.id)
    // history.push("/doctor/"+id)
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form
        autoComplete="off"
        noValidate
      >
        <CardHeader
          subheader="The information can be edited"
          title="MAKE AN APPOINTMENT"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
                fullWidth
                helperText="Please specify full name"
                label="Full name"
                margin="dense"
                name="username"
                onChange={handleChange}
                required
                value={values.username}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
                fullWidth
                helperText=""
                label="Date of Birth (dd/MM/yyyy)"
                margin="dense"
                name="dob"
                onChange={handleChange}
                required
                value={values.dob}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
                fullWidth
                helperText="Please specify full name"
                label="Address"
                margin="dense"
                name="address"
                onChange={handleChange}
                required
                value={values.address}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField 
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
                fullWidth
                label="Email Address"
                margin="dense"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
                fullWidth
                label="Phone Number"
                margin="dense"
                name="mobile"
                onChange={handleChange}
                value={values.mobile}
                variant="outlined"
              />
            </Grid>
           
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
                fullWidth
                label="Reasons"
                helperText="The reasons for this appointment"
                margin="dense"
                name="reason"
                onChange={handleChange}
                required
                value={values.reason}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <MuiPickersUtilsProvider utils={MomentUtils}>
        
                  <KeyboardDateTimePicker
               
                    fullWidth
                    margin="normal"
                    id="date-picker-dialog"
                    label="Appointed Date"
                    name="appointed_date"
                    format="MMMM Do yyyy, h:mm:ss a"
                    value={values.appointed_date}
                    onChange={handleChangeDate}
                    variant="outlined"
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
        
              </MuiPickersUtilsProvider>
              {/* <TextField
                fullWidth
                    margin="normal"
                label="Appointed Date"
                name="appointed_date"
                type="date"
                defaultValue="2017-05-24"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                onChange={handleChangeDate}
              />
               */}
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
                fullWidth
                label="Created Date"
                margin="dense"
                name="created_date"
                readOnly
                value={values.created_date}
                variant="outlined"
              />
            </Grid>
            
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <ButtonCustom
              variant="contained"
              onClick={handleClickOpen}
          >
            Booking
          </ButtonCustom>
          <ButtonCustom
              variant="contained"
              onClick={event => handleCancelButton(event, param.id)}
          >
            Cancel
          </ButtonCustom>
          
        </CardActions>
      </form>
     
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Do you wanna make an appointment with this doctor?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please check your information again and make sure it correct.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonCustom onClick={handleClose} color="primary">
            Cancel
          </ButtonCustom>
          <ButtonCustom onClick={handleBooking} color="primary" autoFocus>
            Yes
          </ButtonCustom>
        </DialogActions>
      </Dialog>        
    

    </Card>
  );
};

AppointmentDetails.propTypes = {
  className: PropTypes.string
};

export default AppointmentDetails;
