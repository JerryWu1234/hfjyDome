import {Utils} from '../../common/util.js'
let utils = new Utils()
export const actions = {
  getUpcoming ({commit, state}) {
    utils.get('/movie/coming_soon', {city: '杭州', start: state.upcomBody.start}).then(res => {
      if (state.upcomBody.subjects && state.upcomBody.subjects.length) {
        res.subjects = state.upcomBody.subjects.concat(res.subjects)
      }
      commit('UP_COMBODY', {upcomBody: res})
    })
  },
  getMovieDetail ({commit, state},{id}) {
    utils.get(`/movie/subject/${id}`, {}).then(res => {
      commit('MOVING_DETAIL', {movieDetail: res})
    })
  },
}
