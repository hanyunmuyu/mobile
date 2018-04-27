export const DOMAIN = 'http://192.168.1.131:83/api/v1'
const api = {
  login: DOMAIN + '/login',
  explore: DOMAIN + '',
  schoolList: DOMAIN + '/school/list',
  clublList: DOMAIN + '/club/list',
  clubNewActivity: DOMAIN + '/club/activity/new',
  classList: DOMAIN + '/class/list',
  clickNumberAddUlr: DOMAIN + '/click/number/increment',
  recommendFavoriteUrl: DOMAIN + '/recommend/favorite',
  recommendFavoriteDetailUrl: DOMAIN + '/recommend/favorite/detail'
}
export default api
