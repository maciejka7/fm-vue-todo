import { ToDoEntity } from '../entity/todo.entity';
import { createId } from '../utils/id.factory';
import { BaseRepo } from './base.repo';

export const toDoListRepo: BaseRepo<ToDoEntity> = () => {
  const TO_DO_LIST_REPO_KEY = 'TO_DO_LIST';

  const store = new Array<ToDoEntity>();

  store.push({
    content: 'Learn vue',
    id: createId(),
    state: 'completed',
  });

  store.push({
    content: 'Make first website',
    id: createId(),
    state: 'completed',
  });

  return {
    save: () => {
      console.log(store.entries());
    },
    getAll: () => store,
    getById: (id) => {},
    removeById: (id) => {},
    cleanRepo: () => {},
  };
};
