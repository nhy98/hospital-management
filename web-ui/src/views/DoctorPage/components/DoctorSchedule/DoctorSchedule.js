import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { useSelector, useDispatch } from 'react-redux';
import { updateDoctorSchedule, setUpdateStatusDefault } from '../../../../actions/ScheduleAction';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Snackbar
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 16
  },
  cardTitle: {
    fontSize: 18
  },
  inner: {
    marginBottom: 16
  },
  cardAction: {
    flexDirection: 'row-reverse'
  },
  editBtn: {
    marginRight: 8,
    marginLeft: 8
  },
  tableCell: {
    border: 'none'
  },
  rootCheckBox: {
    '&$disabled': {
      color: '#6600cc'
    }
  },
  disabled: {}
}));

const DoctorSchedule = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const horizontal = 'center';
  const vertical = 'top';
  const doctorInfo = useSelector(state => state.LoginReducer.guestData);
  const token = useSelector(state => state.LoginReducer.guestToken);
  const statusCode = useSelector(state => state.ScheduleReducer.statusCode);
  const [values, setValues] = useState({
    isEdit: false,
    updateSucces: null,
    schedules: props.schedule?.data?.weekdayDTOs,
    scheduleID: props.schedule?.data?.id,
    data: {
      id: props.schedule?.data?.id,
      monday: 1,
      tuesday: 1,
      wednesday: 1,
      thursday: 1,
      friday: 1,
      saturday: 1,
      sunday: 1,
      account: doctorInfo
    }
  });
  useEffect(() => {
    if (props.schedule?.weekdayDTOs !== undefined) {
      setValues({
        ...values,
        schedules: props.schedule.weekdayDTOs,
        scheduleID: props.schedule.id,
        data:{
          id: props.schedule.id,
        }
      });
    }
    if (statusCode !== null && values.isEdit === true){
      notify(statusCode);
    } 
  }, [props, statusCode]);
  //thông báo
  const notify = code => {
    if (code === 1)
      setValues({
        ...values,
        isEdit: false,
        updateSucces: true
      });
    else
      setValues({
        ...values,
        isEdit: true,
        updateSucces: false
      });
    dispatch(setUpdateStatusDefault(null));
  };
  //cho phép chỉnh sửa lịch làm việc
  const editSchedule = event => {
    setValues({
      ...values,
      isEdit: true
    });
  };
  //hàm lưu lịch làm việc mới
  const saveSchedule = async () => {
    // console.log(values)
    await dispatch(updateDoctorSchedule(values.data, token));
  };
  //hàm xử lí khi ấn vào check box
  const handleChangeCheckBox = event => {
    let arr = event.target.name.split(',');
    let temp = values.schedules;
    let change = temp.find(x => x.weekday === arr[1]);
    if ((change.value === 0 || change.value === null) && arr[2] === 'am')
      change.value = 1;
    else if ((change.value === 0 || change.value === null) && arr[2] === 'pm')
      change.value = 2;
    else if (change.value === 1 && arr[2] === 'pm') change.value = 3;
    else if (change.value === 1 && arr[2] === 'am') change.value = 0;
    else if (change.value === 2 && arr[2] === 'am') change.value = 3;
    else if (change.value === 2 && arr[2] === 'pm') change.value = 0;
    else if (change.value === 3 && arr[2] === 'pm') change.value = 1;
    else if (change.value === 3 && arr[2] === 'am') change.value = 2;
    setValues({
      ...values,
      schedules: temp,
      data: {
        id: values.scheduleID,
        monday: values.schedules[0].value,
        tuesday: values.schedules[1].value,
        wednesday: values.schedules[2].value,
        thursday: values.schedules[3].value,
        friday: values.schedules[4].value,
        saturday: values.schedules[5].value,
        sunday: values.schedules[6].value,
        account: doctorInfo
      }
    });
  };
  //hàm xử lí khi toast ẩn đi
  const handleClose = () => {
    if (values.updateSucces === true)
      setValues({
        ...values,
        updateSucces: null,
        isEdit: false
      });
    if (values.updateSucces === false)
      setValues({
        ...values,
        updateSucces: null,
        isEdit: true
      });
  };
  //toast UI
  const UpdateToast = ({ update }) => {
    if (update === true)
      return (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={update}
          autoHideDuration={1500}
          onClose={handleClose}>
          <Alert variant="filled" severity="success">
            Update schedule successfully!
          </Alert>
        </Snackbar>
      );
    else if (update === false)
      return (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={!update}
          autoHideDuration={1500}
          onClose={handleClose}>
          <Alert variant="filled" severity="error">
            Something wrong! Please check again
          </Alert>
        </Snackbar>
      );
    else return null;
  };
  //nút lưu UI
  function SaveBtn({ isEdit }) {
    if (isEdit)
      return (
        <Button
          color="primary"
          variant="contained"
          onClick={event => saveSchedule()}>
          Save
        </Button>
      );
    else return null;
  }
  //header cho bảng lịch làm việc
  const TableScheduleHeader = () => {
    if (values.schedules)
      return values.schedules?.map(schedule => (
        <TableCell key={schedule.weekday}>{schedule.weekday}</TableCell>
      ));
    else return null;
  };
  //content của bảng
  const TableScheduleContent = () => {
    if (values.schedules)
      return (
        <TableBody>
          <TableRow>
            <TableCell classes={{ root: classes.tableCell }} padding="checkbox">
              AM
            </TableCell>
            {values.schedules?.map((schedule, index) => (
              <TableCell
                key={index}
                classes={{ root: classes.tableCell }}
                padding="checkbox">
                <Checkbox
                  name={index + ',' + schedule.weekday + ',am'}
                  classes={{
                    root: classes.rootCheckBox,
                    disabled: classes.disabled
                  }}
                  onChange={handleChangeCheckBox}
                  checked={schedule.value === 1 || schedule.value === 3}
                  color="primary"
                  value="true"
                  disabled={!values.isEdit}
                />
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell classes={{ root: classes.tableCell }} padding="checkbox">
              PM
            </TableCell>
            {values.schedules?.map((schedule, index) => (
              <TableCell
                key={index}
                classes={{ root: classes.tableCell }}
                padding="checkbox">
                <Checkbox
                  name={index + ',' + schedule.weekday + ',pm'}
                  classes={{
                    root: classes.rootCheckBox,
                    disabled: classes.disabled
                  }}
                  onChange={handleChangeCheckBox}
                  checked={schedule.value === 2 || schedule.value === 3}
                  color="primary"
                  value="true"
                  disabled={!values.isEdit}
                />
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      );
    else return null;
  };

  return (
    <div>
      <UpdateToast update={values.updateSucces}></UpdateToast>
      <Card {...rest} className={clsx(classes.root, className)}>
        <form autoComplete="off">
          <CardHeader
            classes={{ title: classes.cardTitle }}
            title="Schedule of this week"></CardHeader>
          <Divider />
          <CardContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">Day of Week</TableCell>
                  <TableScheduleHeader></TableScheduleHeader>
                </TableRow>
              </TableHead>
              <TableScheduleContent></TableScheduleContent>
            </Table>
          </CardContent>
          <Divider />
          <CardActions classes={{ root: classes.cardAction }}>
            <Button
              color="default"
              variant="contained"
              onClick={event => editSchedule(event)}
              classes={{ root: classes.editBtn }}>
              Edit schedule
            </Button>
            <SaveBtn isEdit={values.isEdit}></SaveBtn>
          </CardActions>
        </form>
      </Card>
    </div>
  );
};

DoctorSchedule.propTypes = {
  className: PropTypes.string
};

export default DoctorSchedule;
