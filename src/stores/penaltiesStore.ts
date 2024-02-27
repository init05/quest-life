import {Penalty} from "@/types/quest";
import {create} from "zustand";
import {persist} from "zustand/middleware";

interface PenaltiesState {
    penalties: Penalty[];
    addPenalties: (penalties: Penalty[]) => void;
    completePenalty: (id: string) => void;
}

const usePenaltiesStore = create<PenaltiesState>()(
    persist(
        (set) => ({
            penalties: [],
            addPenalties: (penalties: Penalty[]) => set((state) => ({penalties: [...state.penalties, ...penalties]})),
            completePenalty: (id: string) => set((state)=> ({penalties: state.penalties.filter((el)=> el.id !== id)}))
        }),
        {name: 'penaltiesStore'}
    )
);