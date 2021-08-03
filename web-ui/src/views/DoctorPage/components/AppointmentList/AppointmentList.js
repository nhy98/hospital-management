import React, {  } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { AppointmentListItem } from '../AppointmentListItem';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    maxHeight: 320,
    overflowY: "auto"
  },
  inline: {
    display: 'inline'
  },
}));

const AppointmentList = props => {
  const { className, doctor, ...rest } = props;

  const classes = useStyles();
  const handleApproveAppointment = event =>{
    props.handleApproveAppointment();
  }
  function ListContent({ data }) {
    if (data && data.length > 0)
      return (
        data.map((ap, index) => (
          <AppointmentListItem
            key={index}
            appointment={ap}
            ispending={props.ispending}
            handleApproveAppointment={handleApproveAppointment}></AppointmentListItem>
        ))
      );
    else return (
      <ListItem >
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary">
                {"No data"}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    );
  }

  return (
      <List className={classes.root}>
        <ListContent data={props.data}></ListContent>
      </List>
  );
};

AppointmentList.propTypes = {
  className: PropTypes.string
};

export default AppointmentList;
