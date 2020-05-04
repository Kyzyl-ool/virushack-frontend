import React from 'react';
import { Button, Select, Slider } from 'antd';
import './SymptomsPage.scss';
import { Typography } from 'antd';

const { Title, Text } = Typography;
const { Option } = Select;

const params: string[] = ['Боль', 'Артериальное давление', 'Температура', 'Питание'];

const places: string[] = [
  'все тело',
  'голова',
  'шея',
  'туловище',
  'живот',
  'рука левая',
  'рука правая',
  'нога левая',
  'нога правая'
];

const degrees: string[] = ['колющая', 'давящая', 'режущая', 'другое'];

export const SymptomsPage: React.FC = props => {
  return (
    <div className="symptoms-page__container">
      <Title level={2}>Симптомы</Title>
      <div className="symptoms-page__selector-container">
        <div className="symptoms-page__selector-container-item">
          <Text strong>Параметр</Text>
          <Select size="large" className="symptoms-page__selector">
            {params.map(item => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </div>
        <div className="symptoms-page__selector-container-item">
          <Text strong>Где находится</Text>
          <Select size="large" className="symptoms-page__selector">
            {places.map(item => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </div>
        <div className="symptoms-page__selector-container-item">
          <Text strong>Вид боли</Text>
          <Select size="large" className="symptoms-page__selector">
            {degrees.map(item => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </div>
        <div className="symptoms-page__selector-container-item">
          <Text strong>Степень боли</Text>
          <Slider style={{ width: '100%' }} max={10} />
        </div>
      </div>
      <div className="symptoms-page__button-container">
        <Button type="primary" size={'large'} block>
          Сохранить
        </Button>
      </div>
    </div>
  );
};
