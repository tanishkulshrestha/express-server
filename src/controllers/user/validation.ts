const validation = {
  create: {
    email: {
      errorMessage: 'Email is required',
      in: ['body'],
      regex: /^[A-Za-z0-9._%+-]+@successive.tech$/,
      required: true,
    },
    id: {
      custom: (value) => {
        console.log('Value', value);
        // throw { error: "Error Occurred", message: "Message" };
      } ,
      in: ['body'],
      required: true,
      string: true,
    },
    name: {
      errorMessage: 'Name is required',
      in: ['body'],
      regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
      required: true,
    },
      role: {
      errorMessage: 'role is required',
      in: ['body'],
      regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
      required: true,
    },
  },
  delete: {
    id: {
      errorMessage: 'Id is required',
      in: ['params'],
      required: true,
    },
  },
  get: {
    id: {
      custom: (value) => {
        console.log('Value', value);
        // throw { error: "Error Occurred", message: "Message" };
      } ,
      in: ['body'],
      required: true,
      string: true,
    },
    limit: {
      default: 10,
      errorMessage: 'Limit is invalid',
      in: ['query'],
      number: true,
      required: false,
    },
    skip: {
      default: 0,
      errorMessage: 'Skip is invalid',
      in: ['query'],
      number: true,
      required: false,
    },
  },
  update: {
    dataToUpdate: {
      custom: (value) => {
        console.log('Value', value);
        // throw { error: "Error Occurred", message: "Message" };
      } ,
      in: ['body'],
      isObject: true,
      required: true,
    },
    id: {
      in: ['body'],
      required: true,
      string: true,
    },
  },
};
export default validation;
