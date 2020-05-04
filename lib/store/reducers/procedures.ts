import { IProcedureItem } from 'components/Procedure';

const initialState: {
  procedures: IProcedureItem[];
} = {
  procedures: [
    {
      amount: 1,
      frequency: 'DAY',
      name: 'Выпить воды',
      times: ['09:00', '12:00', '18:00']
    },
    {
      amount: 1,
      frequency: 'DAY',
      name: 'Выпить воды',
      times: ['09:00', '12:00', '20:00']
    },
    {
      amount: 1,
      frequency: 'DAY',
      name: 'Выпить воды',
      times: ['09:00', '12:00', '18:00']
    },
    {
      amount: 1,
      frequency: 'DAY',
      name: 'Выпить воды',
      times: ['09:00', '12:00', '18:00']
    }
  ]
};

interface IReducer {
  procedures: IProcedureItem[];
}

const reducer = (state = initialState, dispatch): IReducer => {
  return state;
};

export const ProceduresStore = {
  reducer,
  initialState
};
