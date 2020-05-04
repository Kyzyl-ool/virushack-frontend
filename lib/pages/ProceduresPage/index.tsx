import React, { useState } from 'react';
import { Button, List, Modal, PageHeader, Typography, InputNumber, Radio, Input } from 'antd';
import { Procedure } from 'components/Procedure';
import { Route, useHistory, Redirect } from 'react-router-dom';
import { Box } from '@material-ui/core';
import './ProceduresPage.scss';
import { SurveyPage } from 'pages/SurveyPage';

const { Text, Title } = Typography;

type Frequency = 'DAY' | 'WEEK' | 'MONTH' | 'YEAR';

export const frequencyToString = {
  ['DAY']: 'День',
  ['WEEK']: 'Неделя',
  ['MONTH']: 'Месяц',
  ['YEAR']: 'Год'
};

export interface IProcedureItem {
  name: string;
  amount: number;
  frequency: Frequency;
  times: string[];
}

export const ProceduresPage: React.FC = props => {
  const onTimeTagClose = () => {};

  const history = useHistory();
  const [selectedDisease, setSelectedDisease] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [sex, setSex] = useState<number>(1);
  const [answers, setAnswers] = useState([]);
  const [name, setName] = useState({});
  const [selectedProcedureName, setSelectedProcedureName] = useState<number>(-1);

  const gotProcedures = data => {
    setAnswers(data);
  };

  const subscribeToProcedures = () => {
    history.push('/nurse/3');
  };

  return (
    <>
      <Route path={'/nurse/0'}>
        <PageHeader onBack={() => history.push('/')} title={'Заболевание'} className={'site-page-header'} />
      </Route>
      <Redirect to={'/nurse/0'} />
      <Route path={'/nurse/1'}>
        <PageHeader onBack={() => history.push('/nurse/0')} title={'Опрос'} className={'site-page-header'} />
      </Route>
      <Route path={'/nurse/2'}>
        <PageHeader onBack={() => history.push('/nurse/1')} title={'Список процедур'} className={'site-page-header'} />
      </Route>
      <Route path={'/nurse/3'}>
        <PageHeader onBack={() => history.push('/nurse/2')} title={'Завершение'} className={'site-page-header'} />
      </Route>
      <Box px={4} pt={2} pb={6}>
        <Route path={'/nurse/0'}>
          <Title level={4}>Как зовут подопечного?</Title>
          <Box>
            <Input
              id={'lastName'}
              onChange={e => setName({ ...name, lastName: e.target.value })}
              placeholder={'Фамилия'}
              value={name.lastName}
            />
          </Box>
          <Box mt={1}>
            <Input
              id={'firstName'}
              onChange={e => setName({ ...name, firstName: e.target.value })}
              placeholder={'Имя'}
              value={name.firstName}
            />
          </Box>
          <Box mt={1} mb={2}>
            <Input
              id={'middleName'}
              onChange={e => setName({ ...name, middleName: e.target.value })}
              placeholder={'Отчество'}
              value={name.middleName}
            />
          </Box>
          <Title level={4}>Выберите заболевание подопечного:</Title>
          <Radio.Group onChange={e => setSelectedDisease(e.target.value)} value={selectedDisease}>
            <Box>
              <Radio value={'Онкология'}>Онкология</Radio>
            </Box>
            <Box>
              <Radio value={'Сахарный диабет'}>Сахарный диабет</Radio>
            </Box>
            <Box>
              <Radio value={'Деменция'}>Деменция</Radio>
            </Box>
            <Box>
              <Radio value={'Тяжелая форма ДЦП'}>Тяжелая форма ДЦП</Radio>
            </Box>
            <Box>
              <Radio value={'Дегенеративными заболевания нервной системы'}>
                Дегенеративными заболевания нервной системы
              </Radio>
            </Box>
            <Box>
              <Radio value={'Инфекционные заболевания в терминальной стади'}>
                Инфекционные заболевания в терминальной стади
              </Radio>
            </Box>
            <Box>
              <Radio value={'Необратимые последствия нарушений мозгового кровообращения'}>
                Необратимые последствия нарушений мозгового кровообращения
              </Radio>
            </Box>
            <Box>
              <Radio value={'Лекарственно-устойчивый туберкулез'}>Лекарственно-устойчивый туберкулез</Radio>
            </Box>
            <Box>
              <Radio value={'Порок сердца'}>Порок сердца</Radio>
            </Box>
          </Radio.Group>
          <Box mt={2} />
          <Title level={4}>Возраст подопечного:</Title>
          <InputNumber min={1} max={200} value={age} onChange={v => setAge(v)} />
          <Box mt={2} />
          <Title level={4}>Пол подопечного:</Title>
          <Radio.Group onChange={e => setSex(e.target.value)} value={sex}>
            <Radio value={1}>Мужской</Radio>
            <Radio value={2}>Женский</Radio>
          </Radio.Group>
          <Box mt={4}>
            <Button
              size={'large'}
              type={'primary'}
              disabled={selectedDisease.length === 0}
              onClick={() => history.push('/nurse/1')}
            >
              Далее
            </Button>
          </Box>
        </Route>
        <Route path={'/nurse/1'}>
          <SurveyPage selectedDisease={selectedDisease} age={age} sex={sex} onSubmit={data => gotProcedures(data)} />
        </Route>
        <Route path={'/nurse/2'}>
          {answers.length > 0 ? (
            <Text>
              Ниже представлен список необходимых процедур. Для каждой есть инструкция (нажмите кнопку
              &quot;Подробнее&quot;)
            </Text>
          ) : null}
          <List
            dataSource={answers}
            size={'small'}
            loading={answers.length === 0}
            renderItem={(item, index) => (
              <List.Item>
                <Text ellipsis>
                  {item.name} {item.times.length > 1 ? 'несколько раз в день' : 'один раз в день'}
                </Text>
                <Button size={'small'} danger ghost disabled>
                  Удалить
                </Button>
                <Button size={'small'} onClick={() => setSelectedProcedureName(index)} type={'primary'} ghost>
                  Подробнее
                </Button>
              </List.Item>
            )}
          >
            {/*<List.Item>*/}
            {/*  <Button type={'primary'} size={'small'}>*/}
            {/*    Добавить еще одну процедуру*/}
            {/*  </Button>*/}
            {/*</List.Item>*/}
          </List>
          <Button size={'large'} type={'primary'} onClick={subscribeToProcedures}>
            Далее
          </Button>
          <Modal
            title={selectedProcedureName !== -1 && answers[selectedProcedureName].name}
            visible={selectedProcedureName !== -1}
            onCancel={() => setSelectedProcedureName(-1)}
            footer={null}
          >
            <Procedure {...answers[selectedProcedureName]} />
          </Modal>
        </Route>
        <Route path={'/nurse/3'}>
          <Button type={'primary'} size={'large'} onClick={() => history.push('/')}>
            Завершить
          </Button>
        </Route>
      </Box>
    </>
  );
};
