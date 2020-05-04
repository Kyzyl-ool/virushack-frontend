import React, { useContext, useReducer } from 'react';
import { GlobalStoreContext } from '../../App';
import { Button, List, Modal, PageHeader, Typography } from 'antd';
import { Procedure } from 'components/Procedure';
import { Route, useHistory, Switch } from 'react-router-dom';

const { Text } = Typography;

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
  const globalStore = useContext(GlobalStoreContext);
  const { reducer: procedureReducer, initialState: procedureReducerInitialState } = globalStore.procedures;
  const {
    reducer: selectedProcedureReducer,
    initialState: selectedProcedureReducerInitialState
  } = globalStore.selectedProcedures;
  const [procedureState, procedureDispatch] = useReducer(procedureReducer, procedureReducerInitialState);
  const [selectedProcedureState, selectedProcedureDispatch] = useReducer(
    selectedProcedureReducer,
    selectedProcedureReducerInitialState
  );
  const onTimeTagClose = () => {};
  const history = useHistory();

  return (
    <Switch>
      <Route path={'/nurse/1'}>
        <PageHeader onBack={() => history.push('/')} title="Опрос" />
        <Button onClick={() => history.push('/nurse/2')}>Далее</Button>
      </Route>
      <Route path={'/nurse/3'}>
        <PageHeader onBack={() => history.push('/nurse/2')} title="Завершение" />
        <Button onClick={() => history.push('/')}>Завершить</Button>
      </Route>
      <Route path={'/nurse/2'}>
        <PageHeader onBack={() => history.push('/nurse/1')} title="Список процедур" />
        <List
          dataSource={procedureState.procedures}
          size={'small'}
          renderItem={(item, index) => (
            <List.Item>
              <Text ellipsis>
                {item.name} {item.times.length > 1 ? 'несколько раз в день' : 'один раз в день'}
              </Text>
              <Button
                size={'small'}
                onClick={() => selectedProcedureDispatch({ type: 'select', payload: { id: index } })}
              >
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
        <Button onClick={() => history.push('/nurse/3')}>Далее</Button>
        <Modal
          title={procedureState.procedures[selectedProcedureState.id].name}
          visible={selectedProcedureState.selected}
          onCancel={() => selectedProcedureDispatch({ type: 'deselect' })}
          footer={null}
        >
          <Procedure {...procedureState.procedures[selectedProcedureState.id]} />
        </Modal>
      </Route>
    </Switch>
  );
};
