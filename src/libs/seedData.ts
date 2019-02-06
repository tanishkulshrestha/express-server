import UserRepository from '../repositories/user/UserRepository';

function seed() {
  console.log('............');

  const repository = new UserRepository();

  // repository.create({ id: "4", name: "abc" });
  // repository.delete({ name: "xyz" });
  // repository.update({ name: "xyz" });
  // repository.read({id});
  repository.count().then((count): void => {
    if (count === 0) {
      repository.create({ name: 'Head-Trainer', role: 'head-trainer', email: 'head.trainer@successive.tech' });
      repository.create({ name: 'Trainer', role: 'trainer', email: 'trainer@successive.tech' });
    }
  });
}

export default seed;
