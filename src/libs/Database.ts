import * as mongoose from "mongoose";

export default class Database {
  static open(mongoUri) {
    return new Promise((resolve, reject) => {
      mongoose
        .connect(
          mongoUri,
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
