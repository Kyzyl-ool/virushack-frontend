import React, { useState } from 'react';
import { Typography, Radio, Select, Button, Input } from 'antd';
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
  const [link, setLink] = useState(null);

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
        <div style={{ height: '32px', display: 'flex', justifyContent: 'center' }}>
          {link && (
            <a target="_blank" rel="noopener noreferrer" href={link}>
              Подключиться к чату
            </a>
          )}
        </div>
        <Button type="primary" size={'large'} block onClick={() => setLink('tg://join?invite=Juz3ZxvR0bWO9uGd8wnRRQ')}>
          Получить ссылку на чат
        </Button>
      </div>
    </div>
  );
};
