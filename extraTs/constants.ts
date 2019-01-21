import { IPermission } from "./interfaces";
const GET_USERS:string = "getUsers";
const PUT_USERS: string ="putUsers";
const MODIFY_USERS:string="modifyUsers";
const VIEW_USERS:string="viewUsers";
const STATUS_USERS:string="statusUser";
const HEAD_TRAINER: string = "head-trainer";
const TRAINEE: string = "trainee";
const TRAINER: string = "trainer";
const moduleName: string = "moduleName";
const permissionType: string = "permissionType";
const role: string = "role";
const permissions: IPermission = {
  GET_USERS: {
    all: [HEAD_TRAINER],
    read: [TRAINEE, TRAINER],
    write: [TRAINER],
    delete: []
  },
  PUT_USERS: {
    all: [HEAD_TRAINER],
    write: [TRAINER],
    delete: []
  },
  VIEW_USERS: {
    all: [HEAD_TRAINER],
    read: [TRAINEE, TRAINER],
  },
  MODIFY_USERS: {
    all: [HEAD_TRAINER],
    read: [TRAINEE, TRAINER],
    write: [TRAINER,TRAINEE],
    delete: []
  },
  STATUS_USERS: {
    all: [HEAD_TRAINER],
    read: [TRAINEE, TRAINER],
    delete: []
  }
};
export { GET_USERS , PUT_USERS , VIEW_USERS , MODIFY_USERS , STATUS_USERS , HEAD_TRAINER , TRAINEE , TRAINER,
  permissions , moduleName , permissionType , role };
