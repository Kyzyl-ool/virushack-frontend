import React from 'react';
import { frequencyToString, IProcedureItem } from 'pages/ProceduresPage';
import { Card, Menu, Tag, Typography, Button, Divider } from 'antd';
import { PlusOutlined } from '@ant-design/icons/lib';

const { Text } = Typography;

export const Procedure: React.FC<IProcedureItem> = props => {
  const { times, frequency, name, amount } = props;

  return (
    <>
      <Text strong>
        Рекомендуется выполнять процедуру {name} {amount} раз с периодичностью раз в {frequencyToString[frequency]}
      </Text>
      <br />
      <Text>В течение дня предусмотрены напоминания в следующие времена:</Text>
      <Menu>
        {times.map((value, index) => (
          <Menu.Item key={index}>
            <Tag>{value}</Tag>
          </Menu.Item>
        ))}
      </Menu>
    </>
  );
};
