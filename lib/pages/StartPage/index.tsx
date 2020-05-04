import React from 'react';
import { RolesButtons } from 'components/RolesButton';
import { Box } from '@material-ui/core';
import './StartPage.scss';

export const StartPage: React.FC = props => {
  return (
    <Box px={10} className={'start-page'}>
      <RolesButtons />
    </Box>
  );
};
