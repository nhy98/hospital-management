import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
  Avatar
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {},
  cardTitle: {
    fontSize: 18
  },
  cardAction: {
    flexDirection: 'row-reverse'
  },
  editBtn: {
    marginRight: 8,
    marginLeft: 8
  }
}));

const DoctorInfo = props => {
  const { className, doctor, ...rest } = props;
  const classes = useStyles();
  function SaveBtn({ isEdit }) {
    if (isEdit)
      return (
        <Button
          color="primary"
          variant="contained"
          onClick={event => props.saveInfo(event)}
          disabled={
            props.values.errorEmail ||
            props.values.errorFirstName ||
            props.values.errorLastName ||
            props.values.errorPhone
          }>
          Save
        </Button>
      );
    else return null;
  }

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form autoComplete="off">
        <CardHeader
          classes={{ title: classes.cardTitle }}
          title="Overall information"
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }></CardHeader>
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                error={props.values.errorFirstName}
                label="Fullname"
                margin="dense"
                name="fullname"
                helperText={
                  props.values.errorFirstName === false
                    ? `${props.values.helpertext}`
                    : 'Cannot be empty!'
                }
                onChange={props.handleChange}
                required={props.values.isEdit}
                value={props.values.fullname}
                variant="outlined"
                InputProps={{
                  readOnly: !props.values.isEdit
                }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                error={props.values.errorLastName}
                label="Hospital"
                margin="dense"
                name="hospital"
                helperText={
                  props.values.errorLastName === false
                    ? `${props.values.helpertext}`
                    : 'Cannot be empty!'
                }
                onChange={props.handleChange}
                required={props.values.isEdit}
                value={props.values.hospital?.hospitalName}
                variant="outlined"
                InputProps={{
                  readOnly: !props.values.isEdit
                }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                error={props.values.errorEmail}
                label="Email Address"
                margin="dense"
                name="email"
                helperText={
                  props.values.errorEmail === false
                    ? `${props.values.helpertext}`
                    : 'Cannot be empty!'
                }
                onChange={props.handleChange}
                required={props.values.isEdit}
                value={props.values.email}
                variant="outlined"
                InputProps={{
                  readOnly: !props.values.isEdit
                }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                error={props.values.errorPhone}
                label="Phone Number"
                margin="dense"
                name="mobile"
                helperText={
                  props.values.errorPhone === false
                    ? `${props.values.helpertext}`
                    : 'Cannot be empty!'
                }
                required={props.values.isEdit}
                onChange={props.handleChange}
                value={props.values.mobile}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Working position"
                margin="dense"
                name="workingPosition"
                onChange={props.handleChange}
                value={props.values.workingPosition}
                variant="outlined"
                InputProps={{
                  readOnly: !props.values.isEdit
                }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Specialization"
                margin="dense"
                name="specialization"
                onChange={props.handleChange}
                value={props.values.specialization}
                variant="outlined"
                InputProps={{
                  readOnly: !props.values.isEdit
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions classes={{ root: classes.cardAction }}>
          {/* <Button
            color="default"
            variant="contained"
            onClick={event => props.editInfomation(event)}
            classes={{ root: classes.editBtn }}>
            Edit information
          </Button>
          <SaveBtn isEdit={props.values.isEdit}></SaveBtn> */}
        </CardActions>
      </form>
    </Card>
  );
};

DoctorInfo.propTypes = {
  className: PropTypes.string
};

export default DoctorInfo;
