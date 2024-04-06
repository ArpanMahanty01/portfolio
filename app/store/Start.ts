import { create } from "zustand";

interface Start {
  startOpen: boolean;
  setStartOpen: () => void;
}

const useStartStore = create<Start>((set) => ({
  startOpen: false,
  setStartOpen: () =>
    set((state) => ({
      startOpen: !state.startOpen,
    })),
}));

export default useStartStore;
