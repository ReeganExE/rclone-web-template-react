/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_API_HOST: string
  }
}

interface RCloneItem {
  name: string;
  url: string;
  isDir: boolean;
  modTime: string;
  size: string;
}

interface Window {
  items: RCloneItem[];
}