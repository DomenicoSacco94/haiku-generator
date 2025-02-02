import { create } from 'zustand';

interface PoemState {
    poemText: string | null;
    hideSyllableFrame: boolean;
    hideTextEditorFrame: boolean;
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
    setHideSyllableFrame: (hideSyllableFrame: boolean) => void;
    setHideTextEditorFrame: (hideTextEditorFrame: boolean) => void;
}

export const usePoemStore = create<PoemState>((set) => ({
    poemText: null,
    hideSyllableFrame: false,
    hideTextEditorFrame: false,
    poemStyle: {
        textColor: '#000000',
        textSize: 1.0,
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
    setHideSyllableFrame: (hideSyllableFrame) => set({ hideSyllableFrame }),
    setHideTextEditorFrame: (hideTextEditorFrame) => set({ hideTextEditorFrame })
}));