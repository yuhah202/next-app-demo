import {create} from 'zustand';

export const useCounterStore = create((set) => ({
  number: 0,
  increaseNumber: () => set((state) => ({
    number: state.number + 1
  })),
  decreaseNumber: () => set((state) => {
    if(state.number === 0) {
      return {number: state.number}
    }

    return {number: state.number - 1}
  }),
  resetNumber: () => set(() => ({
    number: 0,
  }))
}))
