import { CommonUtils } from '../Utils';

export default {
  // Functions return fixtures
  getMovies: () => {
    return {
      ok: true,
      data: require('../Fixtures/movies.json')
    }
  },

  signup(user) {
    // CommonUtils.log('FixtureApi signup user: ', user);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, {
          user: {
            userName: user.userName,
            passWord: user.passWord,
            email: user.email
          }
        }));
      }, 3000);
    });
  },

  login(user) {
    // CommonUtils.log('FixtureApi signup user: ', user);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, {
          user: {
            userName: user.userName,
            passWord: user.passWord
          }
        }));
      }, 3000);
    });
  },

}
