import { TRAINEEE } from "./constants";

export interface IPermission {
  traineee: {
    read: string[];
    write: string[];
    delete: string[];
    update: string[];
  };
}
