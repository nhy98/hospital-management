import React, { } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout, PrivateRouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  HospitalList as HospitalListView,
  HospitalDetail as HospitalDetailView,
  DoctorList as DoctorListView,
  DoctorDetail as DoctorDetailView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView,
  Appointment as AppointmentView,
  DoctorPage as DoctorPageView,
  Review as ReviewView,
  MedicalReport as MedicalReportView,
  CreateMedicalReport as CreateMedicalReportView,
  CreateMedicalReport
} from './views';

const Routes = () => {
  
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={MedicalReportView}
        exact
        layout={MainLayout}
        path="/medical-report"
      />
      <RouteWithLayout
        component={DoctorListView}
        exact
        layout={MainLayout}
        path="/doctors/:id?"
      />
      <RouteWithLayout
        component={DoctorDetailView}
        exact
        layout={MainLayout}
        path="/doctor/:id?"
      />
      <RouteWithLayout
        component={ReviewView}
        exact
        layout={MainLayout}
        path="/reviews/:id?"
      />
       <RouteWithLayout
        component={CreateMedicalReportView}
        exact
        layout={MainLayout}
        path="/medical-report/:id?"
      />
      <RouteWithLayout
        component={HospitalListView}
        exact
        layout={MainLayout}
        path="/hospitals"
      />
      <PrivateRouteWithLayout
        component={DoctorPageView}
        exact
        layout={MainLayout}
        path="/personal"
      />
      <RouteWithLayout
        component={AppointmentView}
        exact
        layout={MainLayout}
        path="/appointment/doctor/:id"
      />
      <RouteWithLayout
        component={HospitalDetailView}
        exact
        layout={MainLayout}
        path="/hospital/:id"
      />
      <RouteWithLayout
        component={TypographyView}
        exact
        layout={MainLayout}
        path="/typography"
      />
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/icons"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
