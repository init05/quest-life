'use client'

import Quest from "@/components/pages/QuestsPage/Quest";
import {List} from "@mui/material";
import useAvailableQuestsStore from "@/stores/availableQuestsStore";

export default function QuestsPage() {
    const quests = useAvailableQuestsStore(state => state.quests);

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