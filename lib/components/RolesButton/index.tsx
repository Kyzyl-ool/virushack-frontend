import React from 'react';
import { Button } from 'antd';
import { Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export const RolesButtons: React.FC = props => {
  const history = useHistory();

  const onClick = path => {
    history.push(path);
  };

  return (
    <Box position={'relative'} top={'70vh'}>
      <Box mt={1}>
        <Button type="primary" size={'large'} block onClick={() => onClick('/relative')}>
          Родственник
        </Button>
      </Box>
      <Box mt={1}>
        <Button type="primary" size={'large'} block onClick={() => onClick('/ward')}>
          Подопечный
        </Button>
      </Box>
      <Box mt={1}>
        <Button type="primary" size={'large'} block onClick={() => onClick('/nurse/1')}>
          Сиделка
        </Button>
      </Box>
    </Box>
  );
};
