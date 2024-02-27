import {QuestProps} from "@/components/pages/QuestsPage/types";
import {List} from "@mui/material";
import Quest from "@/components/pages/QuestsPage/Quest";
import useActiveQuestsStore from "@/stores/activeQuestsStore";

export default function ActiveQuests() {
    const quests: QuestProps[] = useActiveQuestsStore(state => state.quests);

    return (
        <>
            <List>
                {
                    quests.map((el) =>
                        <Quest key={el.id} id={el.id} title={el.title} reward={el.reward} description={el.description}
                               startTime={el.startTime} endTime={el.endTime} penalty={el.penalty} active={el.active}/>
                    )
                }
            </List>
        </>
    )
}