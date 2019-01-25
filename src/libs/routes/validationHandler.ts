export default config => (req, res, next) => {
  console.log("Inside Middleware");
  const data=req.body||req.params||req.query;
  const {id,name}=data;
  console.log(data);
  // const arr=[id,name];
  // const keys=Object.keys(config);
  for (let key in config) {
    // console.log(data.includes(key));
    // if (!config.hasOwnProperty(key)) continue;
    if(data.hasOwnProperty(key)){
    console.log(key);
    let obj = config[key];
    for (let prop in obj) {
      // if (!obj.hasOwnProperty(prop)) continue;
      if(prop){
  console.log(prop,"----");
      console.log("------------");
      if (Array.isArray(obj[prop])) {
        console.log("This is an array ", obj[prop]);
      }
      console.log(obj[prop]);
   } }}
  }
  // console.log(keys);
  next();
};
