import {QuestProps} from "@/components/pages/QuestsPage/types";
import {create} from "zustand";
import {persist} from "zustand/middleware";
import {Penalty} from "@/types/quest";

interface ActiveQuestsState {
    quests: QuestProps[];
    penalties: Penalty[];
    activateQuest: (quest: QuestProps) => void;
    cancelQuest: (quest: QuestProps) => void;
    checkQuests: () => void;
}

const useActiveQuestsStore = create<ActiveQuestsState>()(
    persist(
        (set) => ({
            quests: [],
            penalties: [],
            activateQuest: (quest: QuestProps) => set((state) => ({quests: [...state.quests, quest]})),
            cancelQuest: (quest: QuestProps) => set((state) => ({quests: [...state.quests, quest]})),
            checkQuests: () => set((state) => {
                const now = new Date();
                const expiredQuests = state.quests.filter((quest) => new Date(quest.endTime) < now);
                const penalties = expiredQuests.map((quest) => quest.penalty);
                return {
                    quests: state.quests.filter((quest) => new Date(quest.endTime) >= now),
                    penalties: penalties
                };
            }),
        }),
        {name: 'activeQuestsStore'}
    )
);
export default useActiveQuestsStore;