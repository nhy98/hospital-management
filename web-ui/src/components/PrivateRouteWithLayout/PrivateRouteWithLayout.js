import React from 'react';
import {Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
const PrivateRouteWithLayout = props => {
  const { layout: Layout, component: Component, ...rest } = props;
  const token = useSelector(state => state.LoginReducer.doctorToken);
  return (
    <Route
      {...rest}
      render={matchProps => token ? (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      ) : <Redirect to={{
          pathname: "/sign-in",
          state: {from: props.location}
      }}/>}
    />
  );
};

PrivateRouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default PrivateRouteWithLayout;
