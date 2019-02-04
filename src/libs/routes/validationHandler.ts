export default (config) => (req, res, next) => {
  console.log('Inside Middleware');
  const keys = Object.keys(config);

  keys.forEach((key) => {
    const item = config[key];
    console.log('Items are ', item);
    const errMessage = config[key].errorMessage;
    const values = item.in.map((item) => {
      console.log('REQUEST---', req[item][key]);
      return req[item][key];
    });
    console.log('Values are', values);

    if (item && item.required) {
      const validatedValues = values.filter((item) => item);
      if (validatedValues.length !== values.length) {
        console.log('ERROR----');
        next({
          message: errMessage || `${key} is required` || 'Error Message' , status: 'Bad Request',
        });
      }
    }
    if (item && !item.required) {
      const validatedValues = values.filter((item) => item);
      console.log(validatedValues);
      console.log(values);

      values.forEach(function setDefault(x) {
        console.log('*******************');
        if (x === '') {
          x = item.default;
          console.log('**DEFAULT VALUE ', x);
        } else {
          x = values;
          console.log('**SET VALUE', x);
        }
      });
    }
    if (item && item.string) {
      const validatedValues = values.filter((item) => typeof item === 'string');
      if (validatedValues.length !== values.length) {
        console.log(config[key].errorMessage, '***');
        console.log(`${key} is not String`);
        next({message: errMessage || `${key} is not String` || 'Error Message',
          status: 'Bad Request',
        });
      }
    }

    if (item && item.regex) {
      const validatedValues = values.filter(
        (item) => RegExp(item.regex).test(item) === true,
      );
      if (validatedValues.length !== values.length) {
        console.log(`${key} does not matches with regex`);
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
      const validatedValues = values.filter((item) => typeof item === 'object');
      if (validatedValues.length !== values.length) {
        console.log(`${key} is not Object`);
        next({ message: errMessage || `${key} is not Object` || 'Error Message',
          status: 'Bad Request',

        });
      }
    }
    if (item.custom) {
      values.forEach(function custom(v) {
        values.custom(v);
      });
    }

    if (item && item.number) {
      const validatedValues = values.filter(
        (item) => (!isNaN(item) || item === '') === true,
      );
      if (validatedValues.length !== values.length) {
        console.log(`${key} is not a number`);
        next({
          message: errMessage || `${key} is not a number` || 'Error Message',
          status: 'Bad Request',
        });
      }
    }
  });
  next();
};
