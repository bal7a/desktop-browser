const Process = {
  Component: null,
  hasWindow: false,
};

const Processes = {
  id: {},
};

const ProcessContextState = {
  processes: {},
  // argument: (id, name, value) => {},
  // icon: (id, newIcon) => {},
  // processes: {},
  // title: (id, newTitle) => {},
  // url: (id, newUrl) => {},
};

const initialProcessContextState = {
  process: {},
};

export { Process, Processes, ProcessContextState, initialProcessContextState };
