import { Module } from 'vuex';
import { State } from '..';
import { Todos } from '../types';

const initialState = {
  todos: [] as Todos[]
}

export type TodoState = typeof initialState;

export default {
  namespaced: true,
  state: initialState,
  mutations: {
    initTodo (state, val: Todos[]) {
      state.todos = val
    }
  }
} as Module<TodoState, State>
