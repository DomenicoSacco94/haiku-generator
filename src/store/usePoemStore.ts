import { create } from 'zustand';

interface PoemState {
    poemText: string | null;
    showSyllables: boolean;
    poemStyle: {
        textColor: string;
        textSize: number;
        fontStyle: string;
        fontFamily: string;
        backgroundColor: string;
        paddingTop: number;
        paddingLeft: number;
    };
    setPoemText: (poemText: string) => void;
    setPoemStyle: (style: Partial<PoemState['poemStyle']>) => void;
    setShowSyllables: (showSyllables: boolean) => void;
}

export const usePoemStore = create<PoemState>((set) => ({
    poemText: null,
    showSyllables: true,
    poemStyle: {
        textColor: '#000000',
        textSize: 2.0,
        fontStyle: 'normal',
        fontFamily: 'monospace',
        backgroundColor: '#ffffff',
        paddingTop: 270,
        paddingLeft: 50,
    },
    setPoemText: (poemText) => set({ poemText }),
    setPoemStyle: (style) => set((state) => ({
        poemStyle: { ...state.poemStyle, ...style }
    })),
    setShowSyllables: (showSyllables) => set({ showSyllables })
}));