const STARTUP_PROCESSES = ["HelloWorld"];

const processList = {
  HelloWorld: {
    Component: import("components/apps/HelloWorld").then(
      (HelloWorld) => HelloWorld
    ),
    hasWindow: true,
  },
};

const getStartupProcesses = () => {
  return STARTUP_PROCESSES.reduce((processes, processId) => ({
    ...processes,
    [processId]: processList[processId],
  }));
};

export { processList, getStartupProcesses };
