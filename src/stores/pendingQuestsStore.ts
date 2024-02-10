import { create } from "zustand";
import {persist} from "zustand/middleware";
import {PendingQuestProps} from "@/components/pages/ManageQuestsPage/PendingQuest";

interface PendingQuestsState {
    quests: PendingQuestProps[];
    addQuest: (quest: PendingQuestProps) => void;
    clearQuests: () => void;
}

const usePendingQuestsStore = create<PendingQuestsState>()(
    persist(
        (set)=> ({
            quests: [],
            addQuest: (quest: PendingQuestProps) => set((state)=> ({quests: [...state.quests, quest]})),
            clearQuests: () => set(()=> ({quests: []}))
        }),
        {name: 'pendingQuestsStore'}
    )
)
export default usePendingQuestsStore;