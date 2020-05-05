import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StartPage } from 'pages/StartPage';
import { Box } from '@material-ui/core';
import { ProceduresPage } from 'pages/ProceduresPage';
import './App.less';
import TokenProvider from 'components/tokenProvider';
import { SymptomsPage } from 'pages/SymptomsPage';
import { MatchingPage } from 'pages/MatchingPage';
import { ProcedurePage } from 'pages/ProcedurePage';
import { DiaryPage } from 'pages/DiaryPage';

function App() {
  return (
    <BrowserRouter>
      <TokenProvider />
      <Box width={'100vw'} height={'100vh'}>
        <Switch>
          <Route path="/procedure/17">
            <ProcedurePage />
          </Route>
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
          <Route path={'/diary'}>
            <DiaryPage />
          </Route>
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App;
