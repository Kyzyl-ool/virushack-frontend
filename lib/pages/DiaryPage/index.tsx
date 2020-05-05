import React from 'react';
import { PageHeader, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import './DiaryPage.scss';
import { Box } from '@material-ui/core';

export const DiaryPage: React.FC = props => {
  const history = useHistory();

  return (
    <>
      <PageHeader onBack={() => history.push('/')} title={'Дневник подопечного'} className="site-page-header" />
      <Box mx={4} mt={3}>
        <p>Дневник Потапова Е.И. доступен для экспорта</p>
        <Button type={'primary'} size={'large'} block>
          Экспорт дневника
        </Button>
      </Box>
    </>
  );
};
