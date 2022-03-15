import { useEffect, useRef, useState } from "react";

const useWorker = (workerInitFunction, onMessage) => {
  const [initialized, setInitialized] = useState(false);
  const worker = useRef(null);

  useEffect(() => {
    if (worker.current === null) {
      worker.current = workerInitFunction();

      if (onMessage) {
        worker.current.addEventListener("message", onMessage);
      }

      worker.current.postMessage("init");

      setInitialized(true);
    }
  }, [onMessage, workerInitFunction]);

  useEffect(
    () => () => {
      if (initialized) worker.current?.terminate();
    },
    [initialized]
  );

  return worker;
};

export default useWorker;
