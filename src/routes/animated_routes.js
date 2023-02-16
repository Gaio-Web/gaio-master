import React from 'react'

import { Switch, useLocation } from 'react-router-dom';

import Products from '../pages/Products/index';

import { AnimatePresence } from 'framer-motion'

import Route from './route'
import Forms from '../pages/Forms';
import Download from '../pages/Download';
import SaveAfi from '../pages/SaveAfi';
import GetAfi from '../pages/GetAfi';

export default function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path='/:id' component={ Products }/>
        <Route exact path='/forms/:id' component={Forms}/>
        <Route exact path='/img/:id' component={Download}/>
        <Route exact path='/affiliate/:id' component={SaveAfi}/>
        <Route exact path='/checkout/afi' component={GetAfi}/>
      </Switch>
    </AnimatePresence>
  )
}

