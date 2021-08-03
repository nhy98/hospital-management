import React, { useState,useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles ,withStyles} from '@material-ui/styles';
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
import moment from 'moment';
import {useSelector,useDispatch} from 'react-redux'
import {createReview} from '../../actions/ReviewAction'
import { useHistory,useParams } from 'react-router-dom';
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
  }
}));

const PostReview = props => {
  const { className, id, ...rest } = props;

  const classes = useStyles();
  const param = useParams()
  const doctor = useSelector(state => state.DoctorReducer.doctor)
  const token = useSelector(state => state.LoginReducer.guestToken)

  const current_date = moment().format('MMMM Do YYYY, h:mm:ss a')
  const [values, setValues] = useState({
    id:0,
    // code: 'A345',
    // name:'Abc',
    createdDate: new Date(),
    // createdDate:null,
    contents: 'abcxtz',
    tags: '#instagram',
    rate: 5,
    account: {
      id: param.id
    }
  });

    const handleChange = event => {
        setValues({
        ...values,
        [event.target.name]: event.target.value
        });
    };
    const dispatch = useDispatch()

    const handleCreateReview = async () => {
        console.log("done")
   
        await dispatch(createReview(values,token))
        props.handleBackToListReview()
    }
    const handleCancelCreateReview = () => {
        props.handleBackToListReview()
    }
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
          title="Review your doctor"
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
                fullWidth
                helperText="Please specify your code"
                label="Medical-Record Code"
                margin="dense"
                name="code"
                onChange={handleChange}
                required
                // value={values.code}
                value="A345"
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Content"
                helperText="Please specify review content"
                margin="dense"
                name="content"
                onChange={handleChange}
                required
                value={values.content}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Rating"
                margin="dense"
                name="rate"
                onChange={handleChange}
                required
                type="number"
                value={values.rate}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Username"
                margin="dense"
                name="name"
                onChange={handleChange}
                // value={values.name}
                value="Nhyen"
                readOnly
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Created Date"
                margin="dense"
                name="createdDate"
                readOnly
                // value={values.createdDate}
                value={moment().format('MMMM Do YYYY, h:mm:ss a')}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Tags"
                margin="dense"
                name="tags"
                value={values.tags}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <ButtonCustom
            color="primary"
            variant="contained"
            onClick={handleCreateReview}
          >
              Post
          </ButtonCustom>
          <ButtonCustom
            color="primary"
            variant="contained"
            onClick={handleCancelCreateReview}
          >
              Cancel
          </ButtonCustom>
        </CardActions>
      </form>
    </Card>
  );
};

PostReview.propTypes = {
  className: PropTypes.string
};

export default PostReview;
