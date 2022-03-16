import { useCallback, useState } from "react";
import { getStartupProcesses } from "./ProcessList";

const useProcessContextState = () => {
  const [processes, setProcesses] = useState(getStartupProcesses());

  return { processes };

  // const argument = useCallback((id, name, value) => {
  //   setProcesses(setProcessArgument(id, name, value));
  // }, []);
};

export { useProcessContextState };
