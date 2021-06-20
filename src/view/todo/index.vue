<template>
	<el-card class="box-card">
		<el-input
			v-model="newTodo"
			@keypress.enter="addTodo"
			autofocus
			autocomplete="off"
			placeholder="输入你想输入的东西,确认回车键"
		></el-input>
		<transition-group name="todolist" tag="ul">
			<li v-for="todo in filterTodoList" :key="todo.id" :class="{editing: todo == editedTodo}">
				<div class="view" @dblclick="editTodo(todo)">
					<el-checkbox v-model="todo.completed">
						<label :class="{ completed: todo.completed }">{{
							todo.title
						}}</label>
					</el-checkbox>
					<svg-icon
						@click="removeTodo(todo)"
						name="iconfont-close"
						size="16"
						style="float: right"
					/>
				</div>
				<div class="edit">
					<el-input
            v-todo-focus="todo == editedTodo"
						v-model="todo.title"
						@keyup.enter="doneEdit(todo)"
            @blur="doneEdit(todo)"
            @keyup.escape="cancel(todo)"
					></el-input>
				</div>
			</li>
		</transition-group>
    <div class="bottom" style="display: flex;justify-content: space-evenly;">
      <el-check-tag v-for="tag in Tags" :key="tag" @change="onChange(tag)" :checked="tag.checked">{{tag.title}}</el-check-tag>
    </div>
	</el-card>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue';
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
	[All:string]: any;
	Active: any;
  Completd: any
}
const filters: filter = {
  All (todoList: [TodoItem]) {
    return todoList
  },
  Active (todoList: [TodoItem]) {
    return todoList.filter(todo => {return !todo.completed})
  },
  Completd (todoList: [TodoItem]) {
    return todoList.filter(todo => {return todo.completed})
  }
}
export default defineComponent({
	name: '',
	setup() {
		const state: any = reactive({
			newTodo: '',
			todoList: <TodoItem[]>[],
      editedTodo: <TodoItem>{}, // 正在编辑的那一项
      beforeEditCode: '', // 缓存数据 title数据
      checked: false,
      Tags: [
        {
          title: 'All',
          checked: true
        },
        {
          title: 'Active',
          checked: false
        },
        {
          title: 'Completd',
          checked: false
        }
      ],
      filterTodoList: computed(() => {
        return filters[state.visibility](state.todoList)
      }),
      visibility: 'All'
		});
		// void 一般申明没有返回值的函数
		const addTodo = (): void => {
			const TodoItem: TodoItem = {
				id: state.todoList.length + 1,
				title: state.newTodo,
				completed: false
			};
			state.todoList.push(TodoItem);
			state.newTodo = '';
		};
		const removeTodo = (todo: TodoItem): void => {
			state.todoList.splice(state.todoList.indexOf(todo), 1);
		};
		const doneEdit = (todo: TodoItem): void => {
      state.editedTodo = <TodoItem>{}
    };
		const editTodo = (todo: TodoItem): void => {
      state.beforeEditCode = todo.title
      state.editedTodo = todo
    };
		const cancel = (todo: TodoItem): void => {
      todo.title = state.beforeEditCode
      state.editedTodo = <TodoItem>{}
    };
    const onChange = (tag: Tags): void => {
      tag.checked = true;
      state.visibility = tag.title
      state.Tags.forEach((item: Tags) => {
        if (item.title != tag.title) {
          item.checked = false
        }
      })
    }
		return {
			addTodo,
			removeTodo,
			doneEdit,
      cancel,
      editTodo,
      onChange,
			...toRefs(state)
		};
	},
  // 自定义指令
  directives: {
    'todo-focus': (el, {value}) => {
      if (value) {
        const input = el.querySelector('input')
        input.focus()
      }
    }
  }
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
