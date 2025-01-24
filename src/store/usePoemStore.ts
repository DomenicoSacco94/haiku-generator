import { create } from 'zustand';

interface PoemState {
    poemText: string | null;
    poemStyle: {
        textColor: string;
        textSize: number;
        fontStyle: string;
        fontFamily: string;
        backgroundColor: string;
    };
    setPoemText: (poemText: string) => void;
    setPoemStyle: (style: Partial<PoemState['poemStyle']>) => void;
}

export const usePoemStore = create<PoemState>((set) => ({
    poemText: null,
    poemStyle: {
        textColor: '#000000',
        textSize: 2.0,
        fontStyle: 'normal',
        fontFamily: 'monospace',
        backgroundColor: '#ffffff',
    },
    setPoemText: (poemText) => set({ poemText }),
    setPoemStyle: (style) => set((state) => ({
        poemStyle: { ...state.poemStyle, ...style }
    })),
}));

