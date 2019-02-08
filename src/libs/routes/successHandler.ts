import UserRepository from '../../repositories/user/UserRepository';

export default async function successHandler(message: string, data: any) {
  const repository = new UserRepository();
  const count1 = await repository.count();
  return {
    Total_Count: count1,
    data: data || undefined,
    message: message || 'Successful',
    status: 'OK',
  };
}
