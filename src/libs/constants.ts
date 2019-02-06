import { IPermission } from './interface';
const TRAINEEE: string = 'traineee';
const HEAD_TRAINER: string = 'head-trainer';
const TRAINEE: string = 'trainee';
const TRAINER: string = 'trainer';
const permissions: IPermission = {
  traineee: {
    delete: [HEAD_TRAINER],
    read: [TRAINEE, TRAINER, HEAD_TRAINER],
    update: [HEAD_TRAINER],
    write: [HEAD_TRAINER],
  },
};
export { TRAINEEE, HEAD_TRAINER, TRAINEE, TRAINER, permissions };
