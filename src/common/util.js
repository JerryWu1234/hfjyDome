/**
 * @author monkeywang
 * Date: 17/3/14
 */
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$http = axios
let vm = new Vue()
const configPath = '/api'
window.configPath = configPath
export class Utils {
  get(url, data = {}) {
    url = configPath + url
    return new Promise((resolve, reject) => {
      vm.$http.get(url, {params: data, credentials: true}).then((response) => {
        resolve(response.data)
      }, function () {
        console.log('接口异常')
      })
    })
  }
}
