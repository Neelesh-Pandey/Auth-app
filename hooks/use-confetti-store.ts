import { create } from 'zustand';

type ConfettiStore = {
    isOpen: boolean;
    onOpen: () => void;
    onclose: () => void;
};

export const useConfettiStore = create<ConfettiStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onclose: () => set({ isOpen: false }),
}));