import { useEffect, useState } from "react";
import * as BrowserFS from "browserfs";

const useFileSystemContextState = () => {
  const [fs, setFs] = useState(null);

  useEffect(() => {
    BrowserFS.install(window);

    BrowserFS.configure(
      {
        fs: "IndexedDb",
      },
      () => [setFs(BrowserFS.BFSRequire("fs"))]
    );
  }, [setFs]);

  return { fs };
};

export { useFileSystemContextState };
