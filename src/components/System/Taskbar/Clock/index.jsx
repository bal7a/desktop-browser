import { useCallback, useState } from "react";
import useWorker from "hooks/useWorker";

const Clock = () => {
  const [{ date, dateTime, time }, setNow] = useState({});

  const clockWorkerInit = useCallback(() => {
    return new Worker(
      new URL("components/System/Taskbar/Clock/clock.worker", import.meta.url),
      { name: "Clock" }
    );
  }, []);

  const updateTime = useCallback(({ data }) => {
    setNow(data);
  }, []);

  useWorker(clockWorkerInit, updateTime);

  if (!time) return <></>;

  return <div>{time}</div>;
};

export default Clock;
