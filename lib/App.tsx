import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StartPage } from 'pages/StartPage';
import { Box } from '@material-ui/core';
import { RootStore } from 'store/reducers';
import { ProceduresPage } from 'pages/ProceduresPage';
import './App.less';
import TokenProvider from 'components/tokenProvider';
import { SymptomsPage } from 'pages/SymptomsPage';
import { MatchingPage } from 'pages/MatchingPage';

export const GlobalStoreContext = React.createContext(RootStore);

function App() {
  return (
    <BrowserRouter>
      <TokenProvider />
      <GlobalStoreContext.Provider value={RootStore}>
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
      </GlobalStoreContext.Provider>
    </BrowserRouter>
  );
}

export default App;
