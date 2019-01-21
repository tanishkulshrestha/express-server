import {
  GET_USERS,
  PUT_USERS,
  MODIFY_USERS,
  VIEW_USERS,
  STATUS_USERS
} from "./constants";

export interface IPermission {
  GET_USERS: {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
  };
  PUT_USERS: {
    all: string[];
    write: string[];
    delete: string[];
  };
  VIEW_USERS: {
    all: string[];
    read: string[];
  };
  MODIFY_USERS: {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
  };
  STATUS_USERS: {
    all: string[];
    read: string[];
    delete: string[];
  };
}

export interface IUsers {
  traineeEmail: string;
  reviewerEmail: string;
}
