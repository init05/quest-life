import {QuestProps} from "@/components/pages/QuestsPage/types";
import { create } from "zustand";
import {persist} from "zustand/middleware";

interface PendingQuestsState {
    quests: QuestProps[];
    addQuest: (quest: QuestProps) => void;
}

const usePendingQuestsStore = create<PendingQuestsState>()(
    persist(
        (set)=> ({
            quests: [],
            addQuest: (quest: QuestProps) => set((state)=> ({quests: [...state.quests, quest]})),
        }),
        {name: 'pendingQuestsStore'}
    )
)
export default usePendingQuestsStore;