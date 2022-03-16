import RenderProcess from "components/System/RenderProcess";
import { ProcessConsumer } from "contexts/process/index";

const ProcessLoader = () => {
  return (
    <ProcessConsumer>
      {({ processes }) => {
        Object.entries(processes).map(([id, process]) => {
          <RenderProcess key={id} {...process} />;
        });
      }}
    </ProcessConsumer>
  );
};

export default ProcessLoader;
