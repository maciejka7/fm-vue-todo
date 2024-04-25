import { ToDoEntity, entityFactory } from '../entity/todo.entity';
import { toDoListRepo } from '../repositories/toDoList.repo';


export const toDoListService = () => {

  const { getAll, save } = toDoListRepo();

  const createToDoItem = ({ content, state}: {content: ToDoEntity['content'], state: ToDoEntity['state']}) => {
    const newTodo = entityFactory.create({
      content,
      state
    });

    return newTodo;
  };

  const handleSaveToRepo = (data: ToDoEntity) => {
    save(data)
    console.log(localStorage.length)
  }

  return {
    getToDoList: getAll,
    createToDoItem,
    handleSaveToRepo
  };
};
