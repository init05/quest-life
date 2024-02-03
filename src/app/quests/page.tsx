import {QuestProps} from "@/components/pages/QuestsPage/types";
import Quest from "@/components/pages/QuestsPage/Quest";
import {List} from "@mui/material";

export default function QuestsPage() {
    const quests: QuestProps[] = [
        {
            id: "1",
            title: "Lorem ipsum.",
            description: "                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium blanditiis reiciendis rem sed suscipit. Dolorem, error illo incidunt ipsam, maiores, minus necessitatibus placeat quis quod ratione repellendus similique sit ullam. Asperiores explicabo hic necessitatibus quis quo reiciendis sit sunt veniam?",
            startTime: "2024-02-03T10:26:49+0000",
            endTime: "2024-02-03T17:26:49+0000",
            reward: "Lorem ipsum dolor sit.",
            penalty: "Lorem ipsum dolor sit amet."
        }
    ]

    return (
        <>
            <List >
            {
                quests.map((el) =>
                    <Quest key={el.id} id={el.id} title={el.title} reward={el.reward} description={el.description}
                           startTime={el.startTime} endTime={el.endTime} penalty={el.penalty}/>
                )
            }
            </List>
        </>
    )
}