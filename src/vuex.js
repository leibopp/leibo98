
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  testMsg: '原始文本',
  childText: '子组件原始文本',
  count:0,
  waiting: false,
  todos: [
    { id: 1, text: 'hello', done: true },
    { id: 2, text: 'world', done: false }
  ]
}
const getters = {
  doneTodos: state => {
    return state.todos.filter(todo => todo.done)
  },
  doneTodosCount: (state, getters) => {
    return getters.doneTodos.length
  },
  getTodoById: (state) => (id) => {
    return state.todos.find(todo => todo.id === id)
  }
}
const mutations = {
  changeTestMsg (state, str) {
    console.log(state, 'state123')
    state.testMsg = str
  },
  changeChildText (state, str) {
    state.childText = str
  },
  INCREMENT_WITH_VALUE(state, value){
    state.count +=value;
  },
      // 显示和隐藏waiting
  SHOW_WAITING_MESSAGE(state){
    state.waiting = true;
  },
  HIDE_WAITING_MESSAGE(state){
    state.waiting = false;
  }
}
const actions = {
  increment({commit}) {
    commit("changeTestMsg",'add Actions');
  },
  decrement({commit},value) {
    commit("changeChildText",value);
  },
  incrementWithValue({commit}, value){
    commit("SHOW_WAITING_MESSAGE");
    let intValue = parseInt(value);
    if(isNaN(intValue)){
      alert("Not an Interger")
    }else {
      commit("HIDE_WAITING_MESSAGE");
      commit("INCREMENT_WITH_VALUE",  intValue)
    }
  }

}
const store = new Vuex.Store({
  state: state,
  getters,
  actions,
  mutations
})

export default store
