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
  TextField,
  Typography
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {},
  
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
    marginLeft:10+'px',
    marginTop:10+'px'
  },
  
})(Button);
const DoctorDetails = props => {
  const { className, doctor, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    firstName: 'Shen',
    lastName: 'Zhi',
    email: 'shen.zhi@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const states = [
    {
      value: 'alabama',
      label: 'Alabama'
    },
    {
      value: 'new-york',
      label: 'New York'
    },
    {
      value: 'san-francisco',
      label: 'San Francisco'
    }
  ];

  const history = useHistory();

  const handleGetReviews = (event,id) => {
        history.push("/reviews/"+id);
    }
    const handleMakeAppointment = (event,id) => {
      history.push("/appointment/doctor/"+id);
  }

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form autoComplete="off" noValidate>
        <CardHeader  title="Profile Details" />
        <Divider />
        <CardContent>
        <Typography
              variant="h5"
            >
              I. About
            </Typography>
            <Typography variant="body2">
            Prof. Philippe Macaire currently Director of Anaesthesia and Pain Management of Vinmec Healthcare System. With more than 30 years experience in Anesthesiology, his targeted is always to bring the best experience to his patients in term of “Pain free, Opioid Free”. He strive to be reaching the highest level of safety for the patients, keep on updating the new techniques in Regiona
            </Typography>
            <Typography
              variant="h5"
            >
              II. Roles 
            </Typography>
            <Typography variant="body2">
            Prof. Philippe Macaire currently Director of Anaesthesia and Pain Management of Vinmec Healthcare System. With more than 30 years experience in Anesthesiology, his targeted is always to bring the best experience to his patients in term of “Pain free, Opioid Free”. He strive to be reaching the highest level of safety for the patients, keep on updating the new techniques in Regiona
            </Typography>
            <Typography
              variant="h5"
            >
              III. Specialities
            </Typography>
            <Typography variant="body2">
            Prof. Philippe Macaire currently Director of Anaesthesia and Pain Management of Vinmec Healthcare System. With more than 30 years experience in Anesthesiology, his targeted is always to bring the best experience to his patients in term of “Pain free, Opioid Free”. He strive to be reaching the highest level of safety for the patients, keep on updating the new techniques in Regiona
            </Typography>
            <Typography
              variant="h5"
            >
              IV. WorkPlace 
            </Typography>
            <Typography variant="body2">
            Prof. Philippe Macaire currently Director of Anaesthesia and Pain Management of Vinmec Healthcare System. With more than 30 years experience in Anesthesiology, his targeted is always to bring the best experience to his patients in term of “Pain free, Opioid Free”. He strive to be reaching the highest level of safety for the patients, keep on updating the new techniques in Regiona
            </Typography>
            <Typography
              variant="h5"
            >
              V. Services
            </Typography>
            <Typography variant="body2">
            Prof. Philippe Macaire currently Director of Anaesthesia and Pain Management of Vinmec Healthcare System. With more than 30 years experience in Anesthesiology, his targeted is always to bring the best experience to his patients in term of “Pain free, Opioid Free”. He strive to be reaching the highest level of safety for the patients, keep on updating the new techniques in Regiona
            </Typography>
            <Typography
              variant="h5"
            >
              VI. Education
            </Typography>
            <Typography variant="body2">
            Prof. Philippe Macaire currently Director of Anaesthesia and Pain Management of Vinmec Healthcare System. With more than 30 years experience in Anesthesiology, his targeted is always to bring the best experience to his patients in term of “Pain free, Opioid Free”. He strive to be reaching the highest level of safety for the patients, keep on updating the new techniques in Regiona
            </Typography>
            <Typography
              variant="h5"
            >
              VII. Experiences
            </Typography>
            <Typography variant="body2">
            Prof. Philippe Macaire currently Director of Anaesthesia and Pain Management of Vinmec Healthcare System. With more than 30 years experience in Anesthesiology, his targeted is always to bring the best experience to his patients in term of “Pain free, Opioid Free”. He strive to be reaching the highest level of safety for the patients, keep on updating the new techniques in Regiona
            </Typography>
        </CardContent>
        <Divider />
        <CardActions >
          <ButtonCustom
            variant="contained"
            onClick={event => handleMakeAppointment(event, doctor.id)}>
            Make an appointment
          </ButtonCustom>
          <ButtonCustom
            variant="contained"
            onClick={event => handleGetReviews(event, doctor.id)}
          >
            Get reviews
          </ButtonCustom>
        </CardActions>
      </form>
    </Card>
  );
};

DoctorDetails.propTypes = {
  className: PropTypes.string
};

export default DoctorDetails;
