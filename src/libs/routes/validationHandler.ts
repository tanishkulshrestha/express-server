export default config => (req, res, next) => {
  console.log("Inside Middleware");
  const keys = Object.keys(config);

  keys.forEach(key => {
    const item = config[key];
    console.log("Items are ", item);
    let values = item.in.map(item => {
      console.log("REQUEST---", req[item][key]);
      return req[item][key];
    });
    console.log("Values are", values);
    if (item && item.required) {
      const validatedValues = values.filter(item => item);
      if (validatedValues.length != values.length) {
        console.log("ERROR----");
        next({
          status: "Bad Request",
          message: item.errorMessage || `${key} is required` || "Error Message"
        });
      }
      Object.keys(values).map(function(key) {
        if (item.string && item) {
          if(!(typeof values[key] == "string")){
          console.log(`${values[key]} is not String`);
          next({
            status: "Bad Request",
            message:
              item.errorMessage ||
              `${validatedValues} is not String` ||
              "Error Message"
          });
        }
        return values[key];
      }});
      if (
        item.regex &&
        !new RegExp(item.regex).test(validatedValues.toString())
      ) {
        console.log(`${validatedValues} does not matches with Regex`);
        next({
          status: "Bad Request",
          message:
            item.errorMessage ||
            `${validatedValues} does not matches with Regex` ||
            "Error Message"
        });
      }

      if (item && item.isObject) {
        const variable = values.filter(item => item);
        if (typeof variable[0] != "object") {
          next({
            status: "Bad Request",
            message: `${key} should be object` || "Error Occurred"
          });
        }
      }
      if (item.custom && item) {
        item.custom(values);
      }
    }
    if (item && !item.required) {
      console.log("*****", values);
      if (isNaN(values)) {
        console.log("Not a Number----");
        next({
          status: "Bad Request",
          message: item.errorMessage || "Error Message"
        });
      } else {
        if (values === "") {
          values = item.default;
          console.log(key, "=", JSON.parse(values));
        } else {
          console.log(key, "=", JSON.parse(values));
        }
      }
    }
  });
  next();
};
