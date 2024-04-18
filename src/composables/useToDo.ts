import { ref } from 'vue';
import { toDoListService } from '../domain/service/toDoList.service';
import { ToDoEntity } from '../domain/entity/todo.entity';

export const useToDo = () => {
  const { getToDoList } = toDoListService();
  console.log(getToDoList());
  const toDoList = ref<Set<ToDoEntity>>(getToDoList());

  return {
    toDoList,
  };
};
