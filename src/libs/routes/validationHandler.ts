import { isNullOrUndefined } from 'util';

export default (config) => (req, res, next) => {
  const keys = Object.keys(config);
  req.skipLimit = '';
  keys.forEach((key) => {
    const item = config[key];
    const errMessage = config[key].errorMessage;
    const values = item.in.map((item1) => {
      return req[item1][key];
    });

    if (item && item.required) {
      const validatedValues = values.filter((item1) => item1);
      if (validatedValues.length !== values.length) {
        next({
          message: errMessage || `${key} is required` || 'Error Message', status: 'Bad Request',
        });
      }
    }
    if (item && !item.required) {
      const validatedValues = values.filter((item1) => item1);

      values.forEach(function setDefault(x) {
        if (isNullOrUndefined(x)) {
          x = item.default;
          req.skipLimit = req.skipLimit + item.default + ' ';
        } else if (x === '') {
          req.skipLimit = req.skipLimit + item.default + ' ';
        }
        else {
          x = values;
        }
      });
    }
    if (item && item.string) {
      const validatedValues = values.filter((item1) => typeof item1 === 'string');
      if (validatedValues.length !== values.length) {
        next({
          message: errMessage || `${key} is not String` || 'Error Message',
          status: 'Bad Request',
        });
      }
    }

    if (item && item.regex) {
      const validatedValues = values.filter(
        (item1) => RegExp(item1.regex).test(item1) === true,
      );
      if (validatedValues.length !== values.length) {
        next({
          message:
            errMessage ||
            `${key} does not matches with regex` ||
            'Error Message',
          status: 'Bad Request',
        });
      }
    }

    if (item && item.isObject) {
      const validatedValues = values.filter((item1) => (typeof item1 === 'object' && Object.keys(item1).length !== 0 &&
        item1.constructor === Object));
      if (validatedValues.length !== values.length) {
        next({
          message: errMessage || `${key} is not Object` || 'Error Message',
          status: 'Bad Request',

        });
      }
    }
    if (item && item.custom) {
      item.custom('');
    }

    if (item && item.number) {
      const validatedValues = values.filter(
        (item1) => (!isNaN(item1) || item1 === '' || item1 === undefined) === true,
      );
      if (validatedValues.length !== values.length) {
        next({
          message: errMessage || `${key} is not a number` || 'Error Message',
          status: 'Bad Request',
        });
      }
    }
  });
  next();
};
