import { BaseEntity } from './base.entity';
import { createId } from '../utils/id.factory';

type ToDoState = 'active' | 'completed';

export type ToDoEntity = BaseEntity & {
  content: string;
  state: ToDoState;
};

const createToDo = ({ content, state}: {content: ToDoEntity['content'], state: ToDoEntity['state']}): ToDoEntity => {
  return {
    id: createId(),
    content,
    state
  };
};

export const entityFactory = {
  create: createToDo,
};
