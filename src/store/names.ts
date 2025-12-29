import { create } from 'zustand';

type State = {
  names: string[];
};

type Actions = {
  addName: () => void;
  deleteName: (index: number) => void;
  setNames: (names: string[]) => void;
  updateName: (index: number, name: string) => void;
};

export const useNames = create<State & Actions>((set) => ({
  names: [''],
  addName: () => set((state) => ({ names: [...state.names, ''] })),
  deleteName: (index) => set((state) => ({ names: state.names.filter((_,i)=>i!==index) })),
  setNames: (names) => set(() => ({ names })),
  updateName: (index, name) =>
    set((state) => ({
      names: state.names.map((oldName, i) => (i === index ? name : oldName)),
    })),
}));
