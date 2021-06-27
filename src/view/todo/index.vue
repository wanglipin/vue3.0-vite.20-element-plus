<template>
  <el-card class="box-card">
    <Edited
      v-model.todoTitle="newTodo"
      @keypress.enter="addTodo"
      autofocus
      autocomplete="off"
      placeholder="输入你想输入的东西,确认回车键"
    />
    <transition-group name="todolist" tag="ul">
      <TodoItem
        v-for="todo in filterTodoList"
        :key="todo.id"
        :todo="todo"
        @removeTodo="removeTodo"
      />
    </transition-group>
    <Filter :filtersItem="filtersItem" v-model="visibility" />
  </el-card>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import Edited from "./Edited.vue";
import TodoItem from "./TodoItem.vue";
import Filter from './Filter.vue'
import { useTodos } from './ustTodos'
import { useFilters } from './useFilters'

interface Todos {
  newTodo: string
}

export default defineComponent({
  name: "Todo",
  components: { Edited, TodoItem, Filter },
  setup() {
    const todoState = reactive<Todos>({
      newTodo: ''
    });
    const { todoList, addTodo, removeTodo } = useTodos(todoState)
    const { filterState } = useFilters(todoList)
    return {
      addTodo,
      removeTodo,
      ...toRefs(todoState),
      ...toRefs(filterState)
    };
  },
});
</script>
<style scoped lang="scss">
</style>
