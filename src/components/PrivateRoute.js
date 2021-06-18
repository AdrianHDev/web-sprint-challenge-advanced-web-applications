import React from 'react';
import { Redirect, Route } from "react-router-dom";
function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={() =>
          localStorage.getItem('token') ? (
            children
          ) : (
            <Redirect
              to='/'
            />
          )
        }
      />
    );
  }
export default PrivateRoute;