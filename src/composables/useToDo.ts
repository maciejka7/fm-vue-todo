import { reactive, ref, watch } from 'vue';
import { toDoListService } from '../domain/service/toDoList.service';
import { ToDoEntity } from '../domain/entity/todo.entity';

const { getToDoList, createToDoItem, handleSaveToRepo } = toDoListService();
const toDoList = reactive<ToDoEntity[]>(getToDoList());

const formState = reactive<{
  toDoText: string
  toDoStatus: boolean,
}>({
  toDoText: '',
  toDoStatus: false
})

export const useToDo = () => {

  const clearFormState = () => {
    formState.toDoStatus = false;
    formState.toDoText = '';
  }

  const handleAddToDo = () => {
    const newItem = createToDoItem({
      content: formState.toDoText,
      state: formState.toDoStatus ? 'completed' : 'active'
    })
    toDoList.push(newItem)
    handleSaveToRepo(newItem)
    clearFormState()
  }


  return {
    toDoList,
    formState,
    handleAddToDo
  };
};
