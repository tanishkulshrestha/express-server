import * as mongoose from "mongoose";

export default class Database {
  static open(MongoUri) {
    return new Promise((resolve, reject) => {
      mongoose
        .connect(
          MongoUri,
          { useNewUrlParser: true }
        )
        .then(() => {
          console.log("Successfully Connected");
          resolve();
        })
        .catch(err => {
          console.log("Not Connected");
          reject(err);
        });
    });
  }
  static disconnect() {
    mongoose.disconnect();
  }
}
