import { create } from 'zustand';

interface PoemState {
    poemText: string | null;
    textColor: string;
    textSize: number;
    fontStyle: string;
    fontFamily: string;
    setPoemText: (poemText: string) => void;
    setTextColor: (color: string) => void;
    setTextSize: (size: number) => void;
    setFontStyle: (style: string) => void;
    setFontFamily: (family: string) => void;
}

export const usePoemStore = create<PoemState>((set) => ({
    poemText: null,
    textColor: '#000000',
    textSize: 2.0,
    fontStyle: 'normal',
    fontFamily: 'monospace',
    setPoemText: (poemText) => set({ poemText }),
    setTextColor: (color) => set({ textColor: color }),
    setTextSize: (size) => set({ textSize: size }),
    setFontStyle: (style) => set({ fontStyle: style }),
    setFontFamily: (family) => set({ fontFamily: family }),
}));

