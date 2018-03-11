import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import('f:/WEB/QiushuiProject/REACT/qs_react/WUMI/umi-api/global.css');
import Layout from 'f:/WEB/QiushuiProject/REACT/qs_react/WUMI/umi-api/layouts/index.js';


let Router = DefaultRouter;


export default function() {
  return (
<Router history={window.g_history}>
  <Layout><Switch>
    <Route exact path="/404" component={() => React.createElement(require('C:/Users/Administrator/AppData/Local/Yarn/config/global/node_modules/umi-build-dev/lib/Compiling.js').default, { route: '/404' })} />
    <Route exact path="/home" component={require('../home/page.jsx').default} />
    <Route exact path="/" component={require('../index.js').default} />
    <Route exact path="/list" component={require('../list.js').default} />
    <Route exact path="/umi/link" component={() => React.createElement(require('C:/Users/Administrator/AppData/Local/Yarn/config/global/node_modules/umi-build-dev/lib/Compiling.js').default, { route: '/umi/link' })} />
    <Route component={require('f:/WEB/QiushuiProject/REACT/qs_react/WUMI/umi-api/pages/404.js').default} />
  </Switch></Layout>
</Router>
  );
}
