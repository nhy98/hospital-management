import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
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
  TablePagination
} from '@material-ui/core';

import { getInitials } from 'helpers';

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
  }
}));

const AppointmentScheduleTable = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

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
                  <TableCell padding="checkbox">
                    {/* <Checkbox
                      checked={selectedUsers.length === doctors.length}
                      color="primary"
                      indeterminate={
                        selectedUsers.length > 0 &&
                        selectedUsers.length < doctors.length
                      }
                      onChange={handleSelectAll}
                    /> */}
                    Day of Week
                  </TableCell>
                  <TableCell>Monday</TableCell>
                  <TableCell>Tuesday</TableCell>
                  <TableCell>Wednesday</TableCell>
                  <TableCell>Thursday</TableCell>
                  <TableCell>Friday</TableCell>
                  <TableCell>Saturday</TableCell>
                  <TableCell>Sunday</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell padding="checkbox">
                       AM
                  </TableCell>
                  <TableCell padding="checkbox">
                        <Checkbox
                          checked={false}
                          color="primary"
                          value="true"
                        />
                  </TableCell>
                  <TableCell padding="checkbox">
                        <Checkbox
                          checked={false}
                          color="primary"
                          value="true"
                        />
                  </TableCell>
                  <TableCell padding="checkbox">
                        <Checkbox
                          checked={false}
                          color="primary"
                          value="true"
                        />
                  </TableCell>
                  <TableCell padding="checkbox">
                        <Checkbox
                          checked={true}
                          color="primary"
                          value="true"
                        />
                  </TableCell>
                  <TableCell padding="checkbox">
                        <Checkbox
                          checked={false}
                          color="primary"
                          value="true"
                        />
                  </TableCell>
                  <TableCell padding="checkbox">
                        <Checkbox
                          checked={true}
                          color="primary"
                          value="true"
                        />
                  </TableCell>
                  <TableCell padding="checkbox">
                        <Checkbox
                          checked={true}
                          color="primary"
                          value="true"
                        />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell padding="checkbox">
                       PM
                  </TableCell>
                  <TableCell padding="checkbox">
                        <Checkbox
                          checked={false}
                          color="primary"
                          value="true"
                        />
                  </TableCell>
                  <TableCell padding="checkbox">
                        <Checkbox
                          checked={true}
                          color="primary"
                          value="true"
                        />
                  </TableCell>
                  <TableCell padding="checkbox">
                        <Checkbox
                          checked={false}
                          color="primary"
                          value="true"
                        />
                  </TableCell>
                  <TableCell padding="checkbox">
                        <Checkbox
                          checked={false}
                          color="primary"
                          value="false"
                        />
                  </TableCell>
                  <TableCell padding="checkbox">
                        <Checkbox
                          checked={true}
                          color="primary"
                          value="true"
                        />
                  </TableCell>
                  <TableCell padding="checkbox">
                        <Checkbox
                          checked={true}
                          color="primary"
                          value="true"
                        />
                  </TableCell>
                  <TableCell padding="checkbox">
                        <Checkbox
                          checked={true}
                          color="primary"
                          value="true"
                        />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      
    </Card>
  );
};

AppointmentScheduleTable.propTypes = {
  className: PropTypes.string,
  // doctors: PropTypes.array.isRequired
};

export default AppointmentScheduleTable;
