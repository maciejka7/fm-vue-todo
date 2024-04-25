import { TypeFlags } from 'typescript';
import { ToDoEntity } from '../entity/todo.entity';
import { createId } from '../utils/id.factory';
import { BaseRepo } from './base.repo';

export const toDoListRepo: BaseRepo<ToDoEntity> = () => {
  const TO_DO_LIST_REPO_KEY = 'TO_DO_LIST';

  const store: ToDoEntity[] = [];

  const strfy = (txt: any) => JSON.stringify(txt);

  const parse = (txt: string ): string => JSON.parse(txt);

  const getAll = () => {
    const parseResult = parse(localStorage.getItem(TO_DO_LIST_REPO_KEY));
  
    if (parseResult) {
      return parseResult
    } else {
      return []
    }
  }
  const save = (data: ToDoEntity) => { 
    
    const all = getAll()  
    console.log('aa', all)
    localStorage.setItem(TO_DO_LIST_REPO_KEY, strfy([...all, data])) 
  
  }

  const checkIsLocalStorageEmpty = () => localStorage.getItem(TO_DO_LIST_REPO_KEY) === null ? true : false

  const init = () => {
    if (checkIsLocalStorageEmpty()) {
      localStorage.setItem(TO_DO_LIST_REPO_KEY, strfy([]))

      save({ content: 'Learn vue', id: createId(), state: 'completed', })
      save({ content: 'Make first website', id: createId(), state: 'completed', })

      console.log()
    }
  }

  init()


  return {
    save,
    getAll,
    getById: (id) => { },
    removeById: (id) => { },
    cleanRepo: () => { },
  };
};
