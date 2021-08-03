import React, { useEffect,useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
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
import Review from './Review'
import { useParams } from "react-router-dom";

import PostReview from './PostReview'

const ReviewWrap = props => {
  const { className, ...rest } = props;

  const params = useParams();
  const id = params.id?params.id:"0"
  console.log(params)
  const [reviewHomePage, setreviewHomePage] = useState(true)
  const handleCreate = () => {
      setreviewHomePage(false)
  }
  const handleBackToList = () => {
    setreviewHomePage(true)
}
    // if(reviewHomePage) return ( <Review handleCreateReview={handleClick}/>)
    // else return ( <PostReview/>)
    return(
        <React.Fragment>
        {reviewHomePage
          ? <Review handleCreateReview={handleCreate} id={id} />
          : <PostReview handleBackToListReview={handleBackToList} id={params.id} />
        }
      </React.Fragment>
    )

};

ReviewWrap.propTypes = {
  className: PropTypes.string
};

export default ReviewWrap;
