import { ToDoEntity, entityFactory } from '../entity/todo.entity';
import { toDoListRepo } from '../repositories/toDoList.repo';

type ToDoList = Set<ToDoEntity>;

export const toDoListService = () => {
  const todoList: ToDoList = new Set();

  const { getAll } = toDoListRepo();

  console.log(getAll());

  const createToDoItem = (toDoContent: ToDoEntity['content']) => {
    const newTodo = entityFactory.create(toDoContent);

    todoList.add(newTodo);
    return newTodo;
  };

  return {
    getToDoList: getAll,
    createToDoItem,
  };
};
