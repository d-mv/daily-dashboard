import { atom } from 'recoil';

import { TaskItem } from './tasks.types';

export const tasksState = atom<TaskItem[]>({
  key: 'tasks',
  default: [
    // {
    //   id: 'stringx',
    //   status: 'in-progress',
    //   title: 'Task #1',
    //   note: 'stringsome note;',
    //   dueDate: new Date(),
    //   priority: 'medium',
    // },
    // {
    //   id: 'string',
    //   status: 'in-progress',
    //   title: 'Task #2',
    //   note: 'stringsome note;',
    //   dueDate: new Date(),
    //   priority: 'low',
    // },
    // {
    //   id: 'stringxx',
    //   status: 'completed',
    //   title: 'Task #3',
    //   note: 'stringsome note;',
    //   dueDate: new Date(),
    //   priority: 'medium',
    // },
    // {
    //   id: 'stringxxx',
    //   status: 'pending',
    //   title: 'Task #4',
    //   note: 'stringsome note;',
    //   dueDate: new Date(),
    //   priority: 'high',
    // },
    // {
    //   id: 'stringxxxxx',
    //   status: 'in-progress',
    //   title: 'Task #1',
    //   note: 'stringsome note;',
    //   dueDate: new Date(),
    //   priority: 'medium',
    // },
  ],
});
