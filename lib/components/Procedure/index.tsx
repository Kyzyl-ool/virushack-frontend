import React, { useState } from 'react';
import { frequencyToString, IProcedureItem } from 'pages/ProceduresPage';
import { Card, Menu, Tag, Typography, Button, Divider, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons/lib';
import { Document, Page } from 'react-pdf';

const { Text } = Typography;

export const Procedure: React.FC<IProcedureItem> = props => {
  const { times, frequency, name, amount } = props;
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <Text strong>
        Рекомендуется выполнять процедуру {name} {amount} раз с периодичностью раз в {frequencyToString[frequency]}
      </Text>
      <br />
      <Text>В течение дня предусмотрены напоминания в следующие времена:</Text>
      <Menu>
        {times &&
          times.map((value, index) => (
            <Menu.Item key={index}>
              <Tag>{value}</Tag>
            </Menu.Item>
          ))}
      </Menu>
      <Button type={'primary'} ghost onClick={() => setShowModal(true)}>
        Инструкция к выполнению
      </Button>
      <Modal
        visible={showModal}
        title={'Инструкция'}
        onCancel={() => setShowModal(false)}
        onOk={() => setShowModal(false)}
      >
        <Document file={'pdf/pain.pdf'} />
      </Modal>
    </>
  );
};
