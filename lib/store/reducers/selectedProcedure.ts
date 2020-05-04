const initialState = {
  selected: false,
  id: 0
};

interface IReducerType {
  selected: boolean;
  id: number;
}

const selectedProcedureReducer = (state = initialState, action): IReducerType => {
  switch (action.type) {
    case 'select': {
      return {
        selected: true,
        id: action.payload.id
      };
    }
    case 'deselect': {
      return {
        ...state,
        selected: false
      };
    }
    default: {
      return state;
    }
  }
};

export const selectedProcedureStore = {
  reducer: selectedProcedureReducer,
  initialState
};
