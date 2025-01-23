import { create } from 'zustand';

interface PoemState {
    poemText: string | null;
    textColor: string;
    textSize: number;
    fontStyle: string;
    fontFamily: string;
    backgroundColor: string; // Add this line
    setPoemText: (poemText: string) => void;
    setTextColor: (color: string) => void;
    setTextSize: (size: number) => void;
    setFontStyle: (style: string) => void;
    setFontFamily: (family: string) => void;
    setBackgroundColor: (color: string) => void; // Add this line
}

export const usePoemStore = create<PoemState>((set) => ({
    poemText: null,
    textColor: '#000000',
    textSize: 2.0,
    fontStyle: 'normal',
    fontFamily: 'monospace',
    backgroundColor: '#ffffff', // Add this line
    setPoemText: (poemText) => set({ poemText }),
    setTextColor: (color) => set({ textColor: color }),
    setTextSize: (size) => set({ textSize: size }),
    setFontStyle: (style) => set({ fontStyle: style }),
    setFontFamily: (family) => set({ fontFamily: family }),
    setBackgroundColor: (color) => set({ backgroundColor: color }), // Add this line
}));

