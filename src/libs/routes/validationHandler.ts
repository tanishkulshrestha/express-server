export default config => (req, res, next) => {
  console.log("Inside Middleware");
  const keys = Object.keys(config);

  keys.forEach(key => {
    const item = config[key];
    console.log("Items are ", item);
    const values = item.in.map(item => {
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
        if (item.string && !(typeof values[key] == "string")) {
          console.log(`${validatedValues} is not String`);
          next({
            status: "Bad Request",
            message:
              item.errorMessage ||
              `${validatedValues} is not String` ||
              "Error Message"
          });
        }
        return values[key];
      });
      if ( item.regex && !new RegExp(item.regex).test(validatedValues.toString())) {
        console.log(`${validatedValues} does not matches with Regex`);
        next({
          status: "Bad Request",
          message:
            item.errorMessage ||
            `${validatedValues} does not matches with Regex` ||
            "Error Message"
        });
      }
      if(item.isObject && !(typeof values[key] == "object")) {
        console.log(`${validatedValues} is not Object`);
        next({
          status: "Bad Request",
          message:
            item.errorMessage ||
            `${validatedValues} is not Object` ||
            "Error Message"
        });
      }
    }
    if (item && !(item.required)){
      const validatedValues = values.filter(item => item);
      if (isNaN(req.query.skip) && isNaN(req.query.limit)) {
        console.log("Number----")
        next({
          status: "Bad Request",
          message:
            item.errorMessage ||
            "Error Message"
        });
      }

      console.log("SKIP----",req.query);
      var val=parseInt(req.query,10) ;
      //console.log("SKIP=",skip)
console.log("****",val);
      //  console.log(skip.valueOf());
      //  console.log(limit.valueOf());
       if(isNaN(val)){
        console.log("888888",item.default);
         val=values ||item.default;
        console.log("val is ",val);


       }
    }
  });
  next();
};
