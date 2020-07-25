import React from 'react';
import Api from 'config/axious';
import { Route, Switch } from 'react-router-dom';
import { localStorageConstant } from '../constant';

const RouteWithSubRoutes = (route) => (
  <Route
    path={route.path}
    exact={route.exact}
    render={(props) => <route.component {...props} routes={route.routes} />}
  />
);

export const RenderRoutes = ({ routes }) => (
  <Switch>
    {routes.map((route) => (
      <RouteWithSubRoutes key={route.key} {...route} />
    ))}
    <Route component={() => <h1>Not Found!</h1>} />
  </Switch>
);

export const isServer = typeof window === 'undefined';

export const isLoggedIn = () => {
  const token = localStorage.getItem(localStorageConstant.ACCESS_TOKEN);
  return !isServer ? !!token : false;
};

export const getProfileUser = async () => {
  try {
    const { data } = await Api.get('/auth/profile');
    return data;
  } catch (error) {
    const originError = { ...error.response.data };
    throw originError;
  }
};
