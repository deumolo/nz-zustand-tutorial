import { create } from 'zustand';

const store = (set) => ({
  tasks: [
    { title: 'TestTask', status: 'PLANNED' },
    { title: 'TestTask2', status: 'PLANNED' },
    { title: 'TestTask3', status: 'ONGOING' },
    { title: 'TestTask4', status: 'ONGOING' },
    { title: 'TestTask5', status: 'ONGOING' },
    { title: 'TestTask6', status: 'DONE' },
  ],
  addTask: (title, status) => set((state) => ({ tasks: [...state.tasks, { title, status }] }))  
});

export const useStore = create(store);
