const { authenUser } = require('../controllers/userController')

describe('Test case : Login', () => {
  test('Login username ohmyroomy', async () => {
    const test = await authenUser('ohmyroomy', '123456789')
    console.log(test)
    expect(test).not.toBeNull();
  });
});