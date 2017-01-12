/**
 * Created by yi on 2016-01-12.
 */

/** 新增&&修改本地缓存
 *  @param {string} id 唯一id
 *  @param {string} key 标示
 *  @param {string} value 新增&修改的值
 */
export function savaToLocal(id, key, value) {
  let seller = window.localStorage.__seller__;
  if (!seller) {
    seller = {};
    seller[id] = {};
  } else {
    seller = JSON.parse(seller);
    if (!seller[id]) {
      seller[id] = {};
    }
  }
  seller[id][key] = value;
  window.localStorage.__seller__ = JSON.stringify(seller);
}
/** 查询本地缓存
 *  @param {string} id 唯一id
 *  @param {string} key 标示
 *  @param {string} def 如果查询不到显示的值
 */
export function loadFromlLocal(id, key, def) {
  let seller = window.localStorage.__seller__;
  if (!seller) {
    return def;
  }
  seller = JSON.parse(seller)[id];
  if (!seller) {
    return def;
  }
  let ret = seller[key];
  return ret || def;
}
