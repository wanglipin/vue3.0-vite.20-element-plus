<template>
  <el-card class="box-card">
    <Edited
      v-model:todo-title="newTodo"
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
    <div class="bottom" style="display: flex; justify-content: space-evenly">
      <el-check-tag
        v-for="tag in Tags"
        :key="tag"
        @change="onChange(tag)"
        :checked="tag.checked"
        >{{ tag.title }}</el-check-tag
      >
    </div>
  </el-card>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs, watchEffect } from "vue";
import Edited from "./Edited.vue";
import TodoItem from "./TodoItem.vue";
interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}
interface Tags {
  title: string;
  checked: boolean;
}
interface filter {
  [All: string]: any;
  Active: any;
  Completd: any;
}
const filters: filter = {
  All(todoList: [TodoItem]) {
    return todoList;
  },
  Active(todoList: [TodoItem]) {
    return todoList.filter((todo) => {
      return !todo.completed;
    });
  },
  Completd(todoList: [TodoItem]) {
    return todoList.filter((todo) => {
      return todo.completed;
    });
  },
};
const todoStorage = {
  fetch() {
    let todos = JSON.parse(localStorage.getItem("vue3_todos") || "[]");
    todos.forEach((item: any, index: number) => {
      item.id = index + 1;
    });
    return todos;
  },
  save(todos: any) {
    localStorage.setItem("vue3_todos", JSON.stringify(todos));
  },
};

export default defineComponent({
  name: "",
  components: { Edited, TodoItem },
  setup() {
    const state: any = reactive({
      newTodo: "",
      todoList: <TodoItem[]>todoStorage.fetch(),
      checked: false,
      Tags: [
        {
          title: "All",
          checked: true,
        },
        {
          title: "Active",
          checked: false,
        },
        {
          title: "Completd",
          checked: false,
        },
      ],
      filterTodoList: computed(() => {
        return filters[state.visibility](state.todoList);
      }),
      visibility: "All",
    });
    // void 一般申明没有返回值的函数
    const addTodo = (): void => {
      const TodoItem: TodoItem = {
        id: state.todoList.length + 1,
        title: state.newTodo,
        completed: false,
      };
      state.todoList.push(TodoItem);
      state.newTodo = "";
    };
    const removeTodo = (todo: TodoItem): void => {
      state.todoList.splice(state.todoList.indexOf(todo), 1);
    };
    const onChange = (tag: Tags): void => {
      tag.checked = true;
      state.visibility = tag.title;
      state.Tags.forEach((item: Tags) => {
        if (item.title != tag.title) {
          item.checked = false;
        }
      });
    };
    watchEffect(() => {
      todoStorage.save(state.todoList);
    });
    return {
      addTodo,
      removeTodo,
      onChange,
      ...toRefs(state),
    };
  },
});
</script>
<style scoped lang="scss">
</style>
