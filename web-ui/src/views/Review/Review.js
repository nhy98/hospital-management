import React, { useEffect } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles,withStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  TableSortLabel
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { StatusBullet } from 'components';
import { useParams,useHistory } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import {
  getReviewsByDoctorId,
  getAllReviews
} from "../../actions/ReviewAction";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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
const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(4)
},
  content: {
    marginTop: theme.spacing(2)
  },
  inner: {
    minWidth: 800
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const Review = props => {
  const { className,id, ...rest } = props;

  const classes = useStyles();
  

  const reviews = useSelector(state => state.ReviewReducer.listReviews)
  const token = useSelector(state => state.LoginReducer.guestToken)

  const dispatch = useDispatch()
  const history = useHistory()
  useEffect(()=> {
    if(id!="0"){
      dispatch(getReviewsByDoctorId(id,token))
    }
    else{
      dispatch(getAllReviews(token))
    }
  }, []);


  const handleCreateReview = () => {
      console.log(props)
    props.handleCreateReview()
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleChooseDoctor = () => {
      setOpen(false);
      history.push("/doctors")
    };
  
  
    const handleClose = () => {
      setOpen(false);
    };
  

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={
          <Button
            color="primary"
            size="small"
            variant="outlined"
            onClick={id!="0"?handleCreateReview:handleClickOpen}

            // onClick={handleCreateReview}
          >
            New review
          </Button>
        }
        title="Doctor Review"
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Reviewer</TableCell>
                  <TableCell>Content</TableCell>
                  <TableCell>Rating</TableCell>
                  <TableCell>Tags</TableCell>
                  <TableCell>Doctor</TableCell>
                  <TableCell>Hospital</TableCell>
                  <TableCell sortDirection="desc">
                    <Tooltip
                      enterDelay={300}
                      title="Sort"
                    >
                      <TableSortLabel
                        active
                        direction="desc"
                      >
                        
                        Created Date
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reviews.map(review => (
                  <TableRow
                    hover
                    key={review.id}
                  >
                    <TableCell>Nguyen Hai Yen</TableCell>
                    <TableCell>{review.content}</TableCell>
                    <TableCell>
                        {review.rate}
                    </TableCell>
                    <TableCell>
                      {review.tags}
                    </TableCell>
                    <TableCell>
                      {review.account.fullname}
                    </TableCell>
                    <TableCell>
                    {/* {review.account.hospital.hospitalName} */}
                    Sample
                    </TableCell>
                    <TableCell>
                    {moment(review.createdDate).format('DD/MM/YYYY')}

                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
        >
          View all <ArrowRightIcon />
        </Button>
      </CardActions>


      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Create new review?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please choose the doctor who you want to make review
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonCustom onClick={handleClose} color="primary">
            Cancel
          </ButtonCustom>
          <ButtonCustom onClick={handleChooseDoctor} color="primary" autoFocus>
            Ok
          </ButtonCustom>
        </DialogActions>
      </Dialog>        
    </Card>
  );
};

Review.propTypes = {
  className: PropTypes.string
};

export default Review;
