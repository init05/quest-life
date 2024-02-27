import {create} from "zustand";
import {persist} from "zustand/middleware";
import {PendingQuestProps} from "@/components/pages/ManageQuestsPage/PendingQuest";
import quest from "@/components/pages/QuestsPage/Quest";

interface PendingQuestsState {
    quests: PendingQuestProps[];
    addQuest: (quest: PendingQuestProps) => void;
    clearQuests: () => void;
}

const usePendingQuestsStore = create<PendingQuestsState>()(
    (set) => ({
        quests: [],
        addQuest: (quest: PendingQuestProps) => set((state) => ({quests: [...state.quests, quest]})),
        clearQuests: () => set(() => ({quests: []}))
    })
)
export default usePendingQuestsStore;