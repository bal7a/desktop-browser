import contextFactory from "contexts/contextFactory";
import { initialFileSystemContextState } from "contexts/fileSystem/filesystem";
import { useFileSystemContextState } from "contexts/fileSystem/useFileSystemContextState";

const { Consumer, Provider } = contextFactory(
  initialFileSystemContextState,
  useFileSystemContextState
);

export { Consumer as FileSystemConsumer, Provider as FileSystemProvider };
