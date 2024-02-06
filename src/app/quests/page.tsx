import {QuestProps} from "@/components/pages/QuestsPage/types";
import Quest from "@/components/pages/QuestsPage/Quest";
import {List} from "@mui/material";

export default function QuestsPage() {
    const quests: QuestProps[] = [
        {
            id: "1",
            title: "Lorem ipsum.",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium blanditiis reiciendis rem sed suscipit. Dolorem, error illo incidunt ipsam, maiores, minus necessitatibus placeat quis quod ratione repellendus similique sit ullam. Asperiores explicabo hic necessitatibus quis quo reiciendis sit sunt veniam?",
            startTime: "2024-02-03T10:26:49+0000",
            endTime: "2024-02-10T17:26:49+0000",
            reward: {id: "123", title: "Lorem ipsum dolor sit.", description: "dasdasd", available: true},
            penalty: "Lorem ipsum dolor sit amet.",
            active: false,
            daily: false
        }
    ]
    quests.push(quests[0]);

    return (
        <>
            <List >
            {
                quests.map((el) =>
                    <Quest key={el.id} {...el}/>
                )
            }
            </List>
        </>
    )
}