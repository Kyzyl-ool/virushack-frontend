import React, { useState } from 'react';
import { Button, Modal, PageHeader, Tag } from 'antd';
import { Box } from '@material-ui/core';
import { Typography } from 'antd';
import './ProcedurePage.scss';
import { useHistory } from 'react-router-dom';

const { Title, Text } = Typography;

export const ProcedurePage: React.FC = props => {
  const [done, setDone] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const history = useHistory();

  return (
    <>
      <PageHeader onBack={() => history.push('/')} title={'Прием пищи'} className="site-page-header" />
      <Box pt={2} pb={6} px={4}>
        <Title level={4}>Прием пищи</Title>
        <Text>
          Потапов Е.И. должен принять пищу в <Tag>09:00</Tag>.
        </Text>
        <br />
        <Box my={3}>
          <Button type={'primary'} ghost onClick={() => setShowModal(true)}>
            Инструкция к выполнению
          </Button>
        </Box>

        <Box mt={10}>
          <Button type={'primary'} size={'large'} onClick={() => setDone(true)} disabled={done}>
            {done ? 'Процедура выполнена' : 'Отметить выполненным'}
          </Button>
        </Box>
        <Modal
          visible={showModal}
          title={'Инструкция'}
          onCancel={() => setShowModal(false)}
          onOk={() => setShowModal(false)}
        >
          <iframe src="http://35.222.222.35/pdf/feed.pdf" width="100%" height={'300px'} />
        </Modal>
      </Box>
    </>
  );
};
