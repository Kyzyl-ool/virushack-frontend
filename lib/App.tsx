import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StartPage } from 'pages/StartPage';
import { Box } from '@material-ui/core';
import { RootStore } from 'store/reducers';
import { ProceduresPage } from 'pages/ProceduresPage';
import './App.less';

export const GlobalStoreContext = React.createContext(RootStore);

function App() {
  return (
    <BrowserRouter>
      <GlobalStoreContext.Provider value={RootStore}>
        <Box width={'100vw'} height={'100vh'}>
          <Switch>
            <Route exact path="/">
              <StartPage />
            </Route>
            <Route path="/relative">Relative page</Route>
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
