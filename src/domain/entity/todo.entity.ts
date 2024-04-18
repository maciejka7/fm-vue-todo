import { BaseEntity } from './base.entity';
import { createId } from '../utils/id.factory';

type ToDoState = 'active' | 'completed';

export type ToDoEntity = BaseEntity & {
  content: string;
  state: ToDoState;
};

const createToDo = (content: ToDoEntity['content']): ToDoEntity => {
  return {
    id: createId(),
    content,
    state: 'active',
  };
};

export const entityFactory = {
  create: createToDo,
};
