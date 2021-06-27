import { reactive, watchEffect } from 'vue';
 
const todoStorage = {
  fetch() {
    let todos = JSON.parse(localStorage.getItem("vue3_todos") || "[]");
    console.log(todos, '?????????')
    todos.forEach((item: any, index: number) => {
      item.id = index + 1;
    });
    return todos;
  },
  save(todos: any) {
    localStorage.setItem("vue3_todos", JSON.stringify(todos));
  }
};
interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

interface Todos {
  newTodo: string
}

export function useTodos (todoState: Todos) {
  const todoList = reactive<TodoItem[]>(todoStorage.fetch())
  const addTodo = (): void => {
    const TodoItem: TodoItem = {
      id: todoList.length + 1,
      title: todoState.newTodo,
      completed: false,
    };
    todoList.push(TodoItem);
    todoState.newTodo = "";
  };
  const removeTodo = (todo: TodoItem): void => {
    todoList.splice(todoList.indexOf(todo), 1);
  };
  watchEffect(() => {
    todoStorage.save(todoList);
  });
  return { todoList, addTodo, removeTodo }
}
