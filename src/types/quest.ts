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