import { formatLocaleDateTime } from "components/System/Taskbar/Clock/formatLocaleDateTime";

const MILLISECONDS_IN_SECOND = 1000;

const sendTick = () => {
  global.postMessage(formatLocaleDateTime(new Date()));
};

let initialized = false;

global.addEventListener(
  "message",
  ({ data }) => {
    if (!initialized && data === "init") {
      sendTick();
      global.setTimeout(() => {
        sendTick();
        global.setInterval(sendTick, MILLISECONDS_IN_SECOND);
      }, MILLISECONDS_IN_SECOND - new Date().getMilliseconds());
      initialized = true;
    }
  },
  { passive: true }
);
