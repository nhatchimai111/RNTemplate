export default {
    // Functions return fixtures
    getMovies: () => {
      return {
        ok: true,
        data: require('../Fixtures/movies.json')
      }
    },

  }
  