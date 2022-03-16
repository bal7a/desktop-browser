import Window from "components/System/Window";

const RenderProcess = ({ Component, hasWindow }) => {
  return hasWindow ? (
    <Window>
      <Component />
    </Window>
  ) : (
    <Component />
  );
};

export default RenderProcess;
