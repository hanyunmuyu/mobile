import axios from 'axios'
import store from '../store'
export function get (url, ps) {
  let token = store.state.token
  ps.token = token
  return axios.get(url, {params: ps}).then((res) => {
    return res.data
  })
}
export function post (url, ps) {
  let token = store.state.token
  let params = new URLSearchParams()
  // 你要传给后台的参数值 key/value
  for (let p in ps) {
    params.append(p, ps[p])
  }
  params.append('token', token)
  return axios({
    method: 'post',
    url: url,
    data: params
  }).then((res) => {
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
  getClubNewActivity: (url, ps) => {
    return get(url, ps)
  },
  syncClubNewActivity: (url, ps) => {
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
  },
  clickNumberAdd: (url, ps) => {
    return post(url, ps)
  },
  addFavorite: (url, ps) => {
    return post(url, ps)
  },
  favoriteDetail: (url, ps) => {
    return post(url, ps)
  },
  login: (url, ps) => {
    return post(url, ps)
  }
}
export default service
