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
    // 发现页面数据
    return get(url, ps)
  },
  sybcExploreList: (url, ps) => {
    // 发现页面数据异步加载
    return get(url, ps)
  },
  getSchoolList: (url, ps) => {
    // 高校列表
    return get(url, ps)
  },
  syncSchoolList: (url, ps) => {
    // 异步加载高校数据
    return get(url, ps)
  },
  getClubNewActivity: (url, ps) => {
    // 社团最新活动
    return get(url, ps)
  },
  syncClubNewActivity: (url, ps) => {
    // 异步加载社团最新活动
    return get(url, ps)
  },
  getClubList: (url, ps) => {
    // 社团列表
    return get(url, ps)
  },
  syncClubList: (url, ps) => {
    // 异步加载社团列表
    return get(url, ps)
  },
  getClassList: (url, ps) => {
    // 班级列表
    return get(url, ps)
  },
  syncClassList: (url, ps) => {
    // 异步加载班级列表
    return get(url, ps)
  },
  clickNumberAdd: (url, ps) => {
    // 增加点击次数
    return post(url, ps)
  },
  addFavorite: (url, ps) => {
    // 添加喜欢收藏
    return post(url, ps)
  },
  favoriteDetail: (url, ps) => {
    // 检验是否添加了喜欢收藏
    return post(url, ps)
  },
  login: (url, ps) => {
    // 登录
    return post(url, ps)
  },
  register: (url, ps) => {
    // 注册
    return post(url, ps)
  }
}
export default service
