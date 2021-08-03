import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Paper,
  TextField,
  Divider,
  CircularProgress,
  Typography
} from '@material-ui/core';
import { SearchInput } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { getReportsByCode } from '../../actions/MedicalReportAction';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 80,
    backgroundColor: '#ffffff',
    border: '1px solid #e0e0e0',
    borderRadius: 4
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  searchInput: {
    maxWidth: 400
  },
  paper: {
    minHeight: 450,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center'
  },
  nodata: {
    fontSize: 20,
    opacity: 0.7
  },
  content: {
    marginTop: 16
  },
  inline: {
    display: 'inline',
    fontSize: 18
  },
  inlineHeader:{
    display: "flex",
    justifyContent:"center",
    fontSize: 20
  }, gridHeader:{
    display: "flex"
  }
  // gridRoot: {
  //   flexGrow: 1
  // },
  // center: {
  //   display: 'flex',
  //   justifyContent: 'center'
  // },
  // recordStyle: {
  //   backgroundColor: '#ffffff',
  //   border: '1px solid #e0e0e0',
  //   borderRadius: 4,
  //   flexGrow: 1
  // },
  // header: {
  //   height: 100
  // }
}));

const MedicalReport = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    record: null,
    isLoading: false
  });

  
  const dispatch = useDispatch();
  const recordResult = useSelector(state => state.MedicalReportReducer.reports);
  
  const token =
    'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJka2tkIiwic3ViIjoibWVtYmVyIiwiaWF0IjoxNTkyMzEzNDEzLCJleHAiOjE1OTIzOTk4MTN9.g7wWNXsesjDFcHd86rhciF09HeYwy7nei3-HGQdhzYyox03Y_KeIGQA6kXs1jI_boIozOvYsLSljCtSaW_ViKg';
  const handleSearchRecord = async event => {
    event.preventDefault();
    if (event.key === 'Enter') {
      dispatch(getReportsByCode(event.target.value, token));
      setValues({
        ...values,
        isLoading: true
      });
    }
  };

  useEffect(() => {
    if (recordResult !== null)
      setValues({
        ...values,
        record: recordResult,
        isLoading: false
      });
  }, [recordResult]);
  console.log(values);
  function Content({ data }) {
    if (!data && values.isLoading === false)
      return (
        <Grid item xs={12} className={classes.content}>
          <Paper className={classes.paper}>
            <div className={classes.nodata}>
              Input the medial report code to see in detail
            </div>
          </Paper>
        </Grid>
      );
    else if (!data && values.isLoading === true)
      return (
        <Grid item xs={12} className={classes.content}>
          <Paper className={classes.paper}>
            <CircularProgress className={classes.nodata} color="secondary" />;
          </Paper>
        </Grid>
      );
    else
      return (
        <Grid container spacing={3} className={classes.content}>
          <Grid className={classes.gridHeader} item xs={12}>
            <Grid  item xs={6}>
              <Typography
                component="span"
                variant="body2"
                className={classes.inlineHeader}
                color="textPrimary">
                {'Ministry of health'}
              </Typography>
              <Typography
                component="span"
                variant="body2"
                className={classes.inlineHeader}
                color="textPrimary">
                {values.record.appointment.account.hospital?.hospitalName}
              </Typography>
              <Typography
                component="span"
                variant="body2"
                className={classes.inlineHeader}
                color="textPrimary">
                {"***************"}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                component="span"
                variant="body2"
                className={classes.inlineHeader}
                color="textPrimary">
                {'SOCIALIST REPUBLIC OF VIETNAM'}
              </Typography>
              <Typography
                component="span"
                variant="body2"
                className={classes.inlineHeader}
                color="textPrimary">
                {"Independence - Freedom - Happiness"}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary">
              {'Patient infomation'}
            </Typography>
            <Divider />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              label="Full name"
              margin="dense"
              value={
                values.record.appointment.username
                  ? values.record.appointment.username
                  : '--'
              }
              variant="outlined"
              InputProps={{
                readOnly: true
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              label="Day of birth"
              margin="dense"
              value={
                values.record.appointment.dob
                  ? values.record.appointment.dob
                  : '--'
              }
              variant="outlined"
              InputProps={{
                readOnly: true
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              label="Appointed Date"
              margin="dense"
              value={
                values.record.appointment.appointedDate
                  ? values.record.appointment.appointedDate
                  : '--'
              }
              variant="outlined"
              InputProps={{
                readOnly: true
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              label="Mobile"
              margin="dense"
              value={
                values.record.appointment.mobile
                  ? values.record.appointment.mobile
                  : '--'
              }
              variant="outlined"
              InputProps={{
                readOnly: true
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              label="Address"
              margin="dense"
              value={
                values.record.appointment.address
                  ? values.record.appointment.address
                  : '--'
              }
              variant="outlined"
              InputProps={{
                readOnly: true
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              label="Symptom"
              margin="dense"
              value={values.record.symptom ? values.record.symptom : '--'}
              variant="outlined"
              InputProps={{
                readOnly: true
              }}
            />
          </Grid>
          {/* Doctor section */}
          <Grid item xs={12}>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary">
              {'Doctor section'}
            </Typography>
            <Divider />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Full name"
              margin="dense"
              value={
                values.record.appointment.account.fullname
                  ? values.record.appointment.account.fullname
                  : '--'
              }
              variant="outlined"
              InputProps={{
                readOnly: true
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Working position"
              margin="dense"
              value={
                values.record.appointment.account.workingPosition
                  ? values.record.appointment.account.workingPosition
                  : '--'
              }
              variant="outlined"
              InputProps={{
                readOnly: true
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Mobile"
              margin="dense"
              value={
                values.record.appointment.account.mobile
                  ? values.record.appointment.account.mobile
                  : '--'
              }
              variant="outlined"
              InputProps={{
                readOnly: true
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              label="Diagnostic"
              margin="dense"
              value={values.record.diagnostic ? values.record.diagnostic : '--'}
              variant="outlined"
              InputProps={{
                readOnly: true
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              label="Prescription "
              margin="dense"
              value={
                values.record.prescription ? values.record.prescription : '--'
              }
              variant="outlined"
              InputProps={{
                readOnly: true
              }}
            />
          </Grid>
        </Grid>

        // <Grid item className={classes.recordStyle} md={12} xs={12}>
        //   <Grid container className={classes.header} xs={12}>
        //     <Grid item md={6} xs={6}>
        //       <h2 className={classes.center}>Ministry of health</h2>
        //       <h3 className={classes.center}>
        //         {values.record.appointment.account.hospital?.hospitalName}
        //       </h3>
        //       <div className={classes.center}>********************</div>
        //     </Grid>
        //     <Grid item md={6} xs={6}>
        //       <h3 className={classes.center}>SOCIALIST REPUBLIC OF VIETNAM</h3>
        //       <h3 className={classes.center}>
        //         Independence - Freedom - Happiness
        //       </h3>
        //     </Grid>
        //   </Grid>
        //   <Divider />
        //   <h3 className={classes.center}>Overall Infomation</h3>
        //   <Grid className={classes.gridRoot} container xs={12} spacing={6}>
        //     <Grid item md={6} xs={12}>
        //       <TextField
        //         fullWidth
        //         label="Full name"
        //         margin="dense"
        //         value={values.record.appointment.username}
        //         variant="outlined"
        //         InputProps={{
        //           readOnly: true
        //         }}
        //       />
        //     </Grid>
        //     <Grid item md={6} xs={12}>
        //       <TextField
        //         fullWidth
        //         label="Day of birth"
        //         margin="dense"
        //         value={values.record.appointment.dob}
        //         variant="outlined"
        //         InputProps={{
        //           readOnly: true
        //         }}
        //       />
        //     </Grid>
        //   </Grid>
        // </Grid>
      );
  }


  
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <SearchInput
            className={classes.searchInput}
            placeholder="Search medical record by code"
            onKeyUp={event => handleSearchRecord(event)}
          />
        </Grid>
      </Grid>
      <Content data={values.record}></Content>
    </div>
  );
};

export default MedicalReport;
