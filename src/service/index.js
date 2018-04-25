import axios from 'axios'
import store from '../store'
export function get (url, ps) {
  store.state.loading = true
  setTimeout(() => {
    store.state.loading = false
  }, 3000)
  return axios.get(url, {params: ps}).then((res) => {
    store.state.loading = false
    return res.data
  })
}
export function post (url, ps) {
  store.state.loading = true
  setTimeout(() => {
    store.state.loading = false
  }, 3000)
  let params = new URLSearchParams()
  // 你要传给后台的参数值 key/value
  for (let p in ps) {
    params.append(p, ps[p])
  }
  return axios({
    method: 'post',
    url: url,
    data: params
  }).then((res) => {
    store.state.loading = false
    return res.data
  })
}
const service = {
  getExploreList: (url, ps) => {
    return get(url, ps)
  },
  sybcExploreList: (url, ps) => {
    return get(url, ps)
  },
  getSchoolList: (url, ps) => {
    return get(url, ps)
  },
  syncSchoolList: (url, ps) => {
    return get(url, ps)
  },
  getClubList: (url, ps) => {
    return get(url, ps)
  },
  syncClubList: (url, ps) => {
    return get(url, ps)
  },
  getClassList: (url, ps) => {
    return get(url, ps)
  },
  syncClassList: (url, ps) => {
    return get(url, ps)
  }
}
export default service
