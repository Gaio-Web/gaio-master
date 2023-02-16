import React, { useContext } from 'react';
import { Route } from 'react-router-dom';

const RouterWrapper = ({
  component: Component,
  isPrivate,
  ...rest
}) => {


  return (
     <Route
        {...rest}
        render={ props => (
          <Component {...props}/>
        )}
      />
  );
}

export default RouterWrapper;