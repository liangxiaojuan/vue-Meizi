/**
 * Created by yi on 2017-01-06.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import * as uz from '../common/js/uz';
// 告诉 vue “使用” vuex
Vue.use(Vuex);

// 创建一个对象来保存应用启动时的初始状态
const state = {
  'headerTitle': '推荐',
   'menus': uz.NAME_TITILE
};
console.log(state.menus);
// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
  // TODO: 放置我们的状态变更函数
  UPDATE_TITLE (state, title) {
    state.headerTitle = title;
  }
};

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
