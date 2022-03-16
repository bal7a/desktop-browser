import contextFactory from "contexts/contextFactory";
import { initialProcessContextState } from "contexts/process/process";
import { useProcessContextState } from "./useProcessContextState";

const { Consumer, Provider } = contextFactory(
  initialProcessContextState,
  useProcessContextState
);

export {
  Consumer as ProcessConsumer,
  Provider as ProcessProvider,
  //   useContext as useProcesses,
};
