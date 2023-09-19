import { create } from 'zustand';

const store = () => ({
  tasks: [
    { title: 'TestTask', status: 'PLANNED' },
    { title: 'TestTask2', status: 'PLANNED' },
    { title: 'TestTask3', status: 'ONGOING' },
    { title: 'TestTask4', status: 'ONGOING' },
    { title: 'TestTask5', status: 'ONGOING' },
    { title: 'TestTask6', status: 'DONE' },
  ],
});

export const useStore = create(store);
