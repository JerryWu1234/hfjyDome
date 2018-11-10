import {Utils} from '../../common/util.js'
let utils = new Utils()
export const actions = {
  getUpcoming ({commit, state}) {
    utils.get('/movie/coming_soon', {city: '杭州', start: state.upcomBody.start}).then(res => {
      if (state.upcomBody.subjects && state.upcomBody.subjects.length) {
        res.subjects = state.upcomBody.subjects.concat(res.subjects)
      }
      // res.start = state.upcomBody.start + 1;
      // console.log(res,state.upcomBody)
      commit('UP_COMBODY', {upcomBody: res})
      // commit('UP_COMING', {loading: false})
    })
  },
}
