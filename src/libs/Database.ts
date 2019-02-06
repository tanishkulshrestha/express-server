import * as mongoose from 'mongoose';
import seed from './seedData';
export default class Database {
public static open(mongoUri) {
    return new Promise((resolve, reject) => {
      mongoose
        .connect(
          mongoUri,
          { useNewUrlParser: true },
        )
        .then(() => {
          console.log('Successfully Connected');
          seed();
          resolve();
        })
        .catch((err) => {
          console.log('Not Connected', err);
          reject(err);
        });
    });
  }
 public static disconnect() {
    mongoose.disconnect();
  }
}
