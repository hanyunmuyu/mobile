export const DOMAIN = 'http://192.168.0.106:85/api/v1'
const api = {
  // 登录
  login: DOMAIN + '/login',
  register: DOMAIN + '/register',
  // 发现
  explore: DOMAIN + '',
  // 校园列表
  schoolList: DOMAIN + '/school/list',
  // 社团列表
  clublList: DOMAIN + '/club/list',
  // 社团最新活动
  clubNewActivity: DOMAIN + '/club/activity/new',
  // 班级列表
  classList: DOMAIN + '/class/list',
  // 增加发现页推荐数据点击次数
  clickNumberAddUlr: DOMAIN + '/click/number/increment',
  // 点击收藏
  addFavoriteUrl: DOMAIN + '/recommend/favorite',
  // 点击收藏的情况
  favoriteDetailUrl: DOMAIN + '/recommend/favorite/detail',
  userCollectionUrl: DOMAIN + '/user/collection',
  // 社团帖子详情
  clubActivityPostDetail: DOMAIN + '/club/activity/post/detail',
  // 社团活动评论点赞
  clubActivityDoPost: DOMAIN + '/club/activity/doPost',
  areaUrl: DOMAIN + '/area'
}
export default api
