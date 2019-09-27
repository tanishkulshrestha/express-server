import { hashSync } from 'bcrypt';
import config from '../config/Configuration';
import UserRepository from '../repositories/user/UserRepository';

async function seed() {
  const pass1 = config.password1;
  const hash1 = hashSync(pass1, 10);
  const repository = new UserRepository();
  const count = await repository.count();
  if ( count === 0 ) {
      repository.create({
        email: 'head.trainer@successive.tech', name: 'Head-Trainer', password: hash1, role: 'head-trainer' });
      repository.create({ name: 'Trainer', role: 'trainer', email: 'trainer@successive.tech', password: hash1 });
    }
  }

export default seed;
