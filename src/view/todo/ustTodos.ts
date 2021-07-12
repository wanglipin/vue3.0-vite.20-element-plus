/*
 * @Author: 王立品
 * @Date: 2021-07-08 23:47:46
 * @LastEditTime: 2021-07-12 08:23:16
 * @FilePath: \vue3.0-vite.20-element-plus\src\view\todo\ustTodos.ts
 */
import { reactive, watchEffect } from 'vue'

const todoStorage = {
	fetch() {
		let todos = JSON.parse(localStorage.getItem('vue3_todos') || '[]')
		todos.forEach((item: any, index: number) => {
			item.id = index + 1
		})
		return todos
	},
	save(todos: any) {
		localStorage.setItem('vue3_todos', JSON.stringify(todos))
	}
}
interface TodoItem {
	id: number
	title: string
	completed: boolean
}

interface Todos {
	newTodo: string
}

export function useTodos(todoState: Todos) {
	const todoList = reactive<TodoItem[]>(todoStorage.fetch())
	const addTodo = (): void => {
		const TodoItem: TodoItem = {
			id: todoList.length + 1,
			title: todoState.newTodo,
			completed: false
		}
		todoList.push(TodoItem)
		todoState.newTodo = ''
	}
	const removeTodo = (todo: TodoItem): void => {
		todoList.splice(todoList.indexOf(todo), 1)
	}
	watchEffect(() => {
		todoStorage.save(todoList)
	})
	return { todoList, addTodo, removeTodo }
}
