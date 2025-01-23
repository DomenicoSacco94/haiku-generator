import { create } from 'zustand';

interface PoemState {
    poemText: string | null;
    textColor: string;
    textSize: number;
    setPoemText: (poemText: string) => void;
    setTextColor: (color: string) => void;
    setTextSize: (size: number) => void;
}

export const usePoemStore = create<PoemState>((set) => ({
    poemText: null,
    textColor: '#000000',
    textSize: 2.0,
    setPoemText: (poemText) => set({ poemText }),
    setTextColor: (color) => set({ textColor: color }),
    setTextSize: (size) => set({ textSize: size }),
}));

