import {QuestProps} from "@/components/pages/QuestsPage/types";
import {create} from "zustand";
import {persist} from "zustand/middleware";

interface QuestState {
    quests: QuestProps[];
    addQuest: (quest: QuestProps) => void;
    addQuests: (quests: QuestProps[]) => void;
    delete: (id: string) => void;
    checkQuests: () => void;
    clearQuests: () => void;
}

const useAvailableQuestsStore = create<QuestState>()(
    persist(
        (set) => ({
            quests: [],
            addQuest: (quest: QuestProps) => set((state) => ({quests: [...state.quests, quest]})),
            addQuests: (quests: QuestProps[]) => set((state) => ({quests: [...state.quests, ...quests]})),
            delete: (id: string) => set((state) => ({quests: state.quests.filter(el => el.id !== id)})),
            checkQuests: () => set((state) => {
                const now = new Date();
                return {
                    quests: state.quests.filter((quest) => new Date(quest.endTime) <= now),
                };
            }),
            clearQuests: () => set(() => ({quests: []})),
        }),
        {name: 'questsStore'}
    )
);

export default useAvailableQuestsStore;