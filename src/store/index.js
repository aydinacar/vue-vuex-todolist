import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos
    },
    addTodo(state, todo) {
      state.todos.push(todo)
    },
    removeTodo(state, todo) {
        let itemIndex = state.todos.findIndex(i => i.id == todo.id)
        state.todos.splice(itemIndex,1)
        //console.log(itemIndex)
    }
  },
  actions: {
    setTodos(context) {
      context.commit('setTodos')
    },
    addTodo(context, todo) {
      context.commit('addTodo', todo)
    },
    removeTodo(context, todo) {
      context.commit('removeTodo', todo)
    }
  },
  getters: {
    getTodos(state) {
      return state.todos;
    }
  },
  modules: {
  }
})
