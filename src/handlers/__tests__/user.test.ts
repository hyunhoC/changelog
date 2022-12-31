import * as user from '../user';

// bad test because it relies on database
// should use test db and delete it before running test
describe('user handler', () => {
  it('should create a new user', async () => {
    const req = { body: { username: 'hello', password: 'hi'}};
    const res = { json({token}) {
      expect(token).toBeTruthy();
    } };
    const newUser = await user.createNewUser(req, res, () => {});
  })
})