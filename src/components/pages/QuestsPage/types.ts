import {Penalty, Reward} from "@/types/quest";

export type QuestProps = {
    id: string;
    title: string;
    description: string;
    startTime?: string;
    endTime: string;
    reward: Reward;
    penalty: Penalty;
    active?: boolean;
    daily?: boolean;
    completed?: boolean;
}
