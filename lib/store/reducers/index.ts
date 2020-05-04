import { ProceduresStore } from 'store/reducers/procedures';
import { selectedProcedureStore } from 'store/reducers/selectedProcedure';

export const RootStore = {
  procedures: ProceduresStore,
  selectedProcedures: selectedProcedureStore
};
