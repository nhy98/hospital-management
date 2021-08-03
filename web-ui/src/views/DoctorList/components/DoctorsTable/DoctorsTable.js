import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
  IconButton
} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { getInitials } from 'helpers';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

const DoctorsTable = props => {
  const { className, doctors, maxPage, ...rest } = props;

  const classes = useStyles();

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const history = useHistory();

  const handleViewDoctorDetail = (event,id) => {
        history.push("/doctor/"+id);
    }

  const handleSelectAll = event => {
    const { doctors } = props;

    let selectedUsers;

    if (event.target.checked) {
      selectedUsers = doctors.map(doctor => doctor.id);
    } else {
      selectedUsers = [];
    }

    setSelectedUsers(selectedUsers);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedUsers.indexOf(id);
    let newSelectedUsers = [];

    if (selectedIndex === -1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers, id);
    } else if (selectedIndex === 0) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(1));
    } else if (selectedIndex === selectedUsers.length - 1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedUsers = newSelectedUsers.concat(
        selectedUsers.slice(0, selectedIndex),
        selectedUsers.slice(selectedIndex + 1)
      );
    }

    setSelectedUsers(newSelectedUsers);
  };

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Hospital</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {doctors.slice(0, rowsPerPage).map(doctor => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={doctor.id}
                    selected={selectedUsers.indexOf(doctor.id) !== -1}
                    onClick={event => handleViewDoctorDetail(event, doctor.id)}
                  >
                  
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Avatar
                          className={classes.avatar}
                          src="/images/avatars/avatar_3.png"
                        >
                          {getInitials(doctor.fullname)}
                        </Avatar>
                        <Typography variant="body1">{doctor.fullname}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>{doctor.email}</TableCell>
                    <TableCell>
                      {/* {user.address.city}, {user.address.state},{' '}
                      {user.address.country} */}
                      {doctor.address}
                    </TableCell>
                    <TableCell>{doctor.mobile}</TableCell>
                    <TableCell>
                      {/* {moment(user.createdAt).format('DD/MM/YYYY')} */}
                      {doctor.hospital.hospitalName}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <div className={classes.pagination}>
          <Typography variant="caption">1-10 of {maxPage}</Typography>
          <IconButton>
            <ChevronLeftIcon onClick={props.prev} />
          </IconButton>
          <IconButton>
            <ChevronRightIcon onClick={props.next} />
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
};

DoctorsTable.propTypes = {
  className: PropTypes.string,
  doctors: PropTypes.array.isRequired
};

export default DoctorsTable;
