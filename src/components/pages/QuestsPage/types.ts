export type QuestProps = {
    id: string;
    title: string;
    description: string;
    startTime?: string;
    endTime: string;
    reward: Reward;
    penalty?: string;
    active?: boolean;
    daily?: boolean;
    completed?: boolean;
}

export type Reward = {
    id: string;
    title: string;
    description: string;
    available?: boolean;
}

export type Penalty = {
    id: string;
    title: string;
    description: string;
    isPending?: boolean;
}