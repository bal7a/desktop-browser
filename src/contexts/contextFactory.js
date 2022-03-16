import { createContext, useContext } from "react";

export default function (initialContextState, _useContextState) {
  const { Consumer, Provider } = createContext(initialContextState);
  const factoryProvider = ({ children }) => {
    return <Provider value={_useContextState()}>{children}</Provider>;
  };

  //   const Context = createContext();
  //   const Provider = ({ children }) => {
  //     <Context.Provider value={useContextStateFunction()}>
  //       {children}
  //       {ContextComponent ? <ContextComponent /> : <></>}
  //     </Context.Provider>;
  //   };

  return {
    Consumer: Consumer,
    Provider: factoryProvider,
    // useContext: () => useContext(Context),
  };
}
