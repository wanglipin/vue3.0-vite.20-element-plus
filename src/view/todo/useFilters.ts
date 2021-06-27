import { computed, reactive } from 'vue';

interface Filter {
  [All: string]: any;
  Active: any;
  Completd: any;
}
interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}
const filters: Filter = {
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

export function useFilters (todoList: TodoItem[]) {
  const filterState: any = reactive({
    filtersItem: [
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
      return filters[filterState.visibility](todoList);
    }),
    visibility: 'All'
  })
  return { filterState }
}
