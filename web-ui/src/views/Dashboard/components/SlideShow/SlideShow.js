import React, {useState,useEffect} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  LinearProgress
} from '@material-ui/core';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';
import { Zoom } from 'react-slideshow-image';

const images = [
  'images/hospitals/2.jpg',
    'images/hospitals/1.jpg',
    'images/hospitals/3.jpg',
    'images/hospitals/4.jpg',
    'images/hospitals/5.jpg',
    'images/hospitals/6.jpg'
  ];
   
  const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
  }
   
  const SlideShow = () => {
      return (
        <div className="slide-container">
          <Zoom {...zoomOutProperties}>
            {
              images.map((each, index) => <img key={index} style={{width: "100%",height:"400px"}} src={each} />)
            }
          </Zoom>
        </div>
      )
  }

SlideShow.propTypes = {
  className: PropTypes.string
};

export default SlideShow;
