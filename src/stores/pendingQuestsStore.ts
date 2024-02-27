import {create} from "zustand";
import {PendingQuestProps} from "@/components/pages/ManageQuestsPage/PendingQuest";

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