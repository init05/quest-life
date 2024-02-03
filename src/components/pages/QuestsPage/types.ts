export type QuestProps = {
    id: string;
    title: string;
    description: string;
    startTime?: string;
    endTime: string;
    reward: string;
    penalty?: string;
}