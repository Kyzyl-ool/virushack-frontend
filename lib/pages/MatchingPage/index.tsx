import React from 'react';
import { Typography, Radio, Select, Button } from 'antd';
import './MatchingPage.scss';

const { Title, Text } = Typography;
const { Option } = Select;

const diseases: string[] = [
  'Сахарный диабет',
  'Деменция',
  'Тяжелая форма ДЦП',
  'Дегенеративные заболевания нервной системы',
  'Инфекционные заболевания в терминальной стади',
  'Необратимые последствия нарушений мозгового кровообращения',
  'Лекарственно-устойчивый туберкулез',
  'Порок сердца'
];

export const MatchingPage: React.FC = props => {
  return (
    <div className="matching-page__container">
      <div className="matching-page__selector-container">
        <Title className="matching-page__title" level={4}>
          Заполните данные о Вас и наш сервис подберет подходящий для вас чат
        </Title>
        <div className="matching-page__selector-container-item">
          <Text strong>Вы являетесь:</Text>
          <Radio.Group>
            <Radio value={1}>Родственник</Radio>
            <Radio value={2}>Подопечный</Radio>
          </Radio.Group>
        </div>
        <div className="matching-page__selector-container-item">
          <Text strong>Вид заболевания</Text>
          <Select size="large" className="symptoms-page__selector">
            {diseases.map(item => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </div>
      </div>
      <div className="matching-page__button-container">
        <Button type="primary" size={'large'} block>
          Получить ссылку на чат
        </Button>
      </div>
    </div>
  );
};
