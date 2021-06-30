<template>
  <li :class="{ editing: todo == editedTodo }">
    <div class="view" @dblclick="editTodo(todo)">
      <el-checkbox v-model="todo.completed">
        <label :class="{ completed: todo.completed }">{{ todo.title }}</label>
      </el-checkbox>
      <svg-icon
        @click="removeTodo(todo)"
        name="iconfont-close"
        size="16"
        style="float: right"
      />
    </div>
    <div class="edit">
      <Edited
        v-todo-focus="todo == editedTodo"
        v-model.todoTitle="todo.title"
        @keyup.enter="doneEdit(todo)"
        @blur="doneEdit(todo)"
        @keyup.escape="cancel(todo)"
      />
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import Edited from "./Edited.vue";

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}
export default defineComponent({
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  emits: ["removeTodo"],
  components: { Edited },
  setup(props, { emit }) {
    const state = reactive({
      beforeEditCode: "", // 缓存数据 title数据
      editedTodo: <TodoItem>{}, // 正在编辑的那一项
    });
    const doneEdit = (todo: TodoItem): void => {
      state.editedTodo = <TodoItem>{};
    };
    const editTodo = (todo: TodoItem): void => {
      state.beforeEditCode = todo.title;
      state.editedTodo = todo;
    };
    const cancel = (todo: TodoItem): void => {
      todo.title = state.beforeEditCode;
      state.editedTodo = <TodoItem>{};
    };
    const removeTodo = (todo: TodoItem): void => {
      emit("removeTodo", todo);
    };
    return {
      doneEdit,
      editTodo,
      cancel,
      removeTodo,
      ...toRefs(state),
    };
  },
  // 自定义指令
  directives: {
    "todo-focus": (el, { value }) => {
      if (value) {
        const input = el.querySelector("input");
        input.focus();
      }
    },
  },
});
</script>
<style scoped lang="scss">
.completed {
  color: #dcdfe6;
  text-decoration: line-through;
}

.todolist-enter-active,
.todolist-leave-active {
  transition: all 0.6s ease;
}
.todolist-enter-from,
.todolist-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.edit,
.editing .view {
  display: none;
}
.view,
.editing .edit {
  display: block;
}
</style>
