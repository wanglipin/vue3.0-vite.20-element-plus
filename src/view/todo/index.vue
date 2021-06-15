<template>
  <el-card class="box-card">
    <el-input v-model="newTodo" @keypress.enter="addTodo" autofocus autocomplete="off" placeholder="输入你想输入的东西"></el-input>
    <transition-group name="todolist" tag="ul">
      <li v-for="todo in todoList" :key="todo.id">
        <el-checkbox v-model="todo.completed">
          <label :class="{completed: todo.completed}">{{ todo.title }}</label>
        </el-checkbox>
        <svg-icon @click="removeTodo(todo)" name="iconfont-close" size="16" style="float: right;" />
      </li>
    </transition-group>
  </el-card>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from 'vue'
interface todoItem {
  id: number,
  title: string,
  completed: boolean
} 
export default defineComponent ({
  name: '',
  setup() {
    const state = reactive({
      newTodo: '',
      todoList: <todoItem[]>[]
    })
    // void 一般申明没有返回值的函数
    const addTodo = ():void => {
      const todoItem: todoItem ={
        id: state.todoList.length + 1,
        title: state.newTodo,
        completed: false
      }
      state.todoList.push(todoItem)
      state.newTodo = ''
    }
    const removeTodo = (item: todoItem):void => {
      state.todoList.splice(state.todoList.indexOf(item), 1)
    }
    return {
      addTodo,
      removeTodo,
      ...toRefs(state),
    }
  }
})

</script>
<style scoped lang='scss'>
  .completed {
    color: #DCDFE6;
    text-decoration:line-through
  }
.todolist-enter-active,.todolist-leave-active {
  transition: all .6s ease;
}
.todolist-enter-from,.todolist-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
