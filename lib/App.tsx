import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StartPage } from 'pages/StartPage';
import { Box } from '@material-ui/core';
import { ProceduresPage } from 'pages/ProceduresPage';
import './App.less';
import TokenProvider from 'components/tokenProvider';
import { SymptomsPage } from 'pages/SymptomsPage';
import { MatchingPage } from 'pages/MatchingPage';

function App() {
  return (
    <BrowserRouter>
      <TokenProvider />
      <Box width={'100vw'} height={'100vh'}>
        <Switch>
          <Route path="/matching">
            <MatchingPage />
          </Route>
          <Route exact path="/">
            <StartPage />
          </Route>
          <Route path="/relative">
            <SymptomsPage />
          </Route>
          <Route path="/ward">Ward page</Route>
          <Route path="/nurse">
            <ProceduresPage />
          </Route>
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App;
