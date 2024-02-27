'use client'


import usePendingQuestsStore from "@/stores/pendingQuestsStore";
import {Button, ButtonGroup, List} from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import React from "react";
import PendingQuest from "@/components/pages/ManageQuestsPage/PendingQuest";
import useAvailableQuestsStore from "@/stores/availableQuestsStore";

const PendingQuests = () => {
    const quests = usePendingQuestsStore(state => state.quests);
    const clearQuests = usePendingQuestsStore(state => state.clearQuests);
    const saveQuests = useAvailableQuestsStore(state => state.addQuests);

    const handleClickSaveAll = () => {
        saveQuests(quests);
        clearQuests();
    }

    const handleDeleteAll = () => {
        clearQuests();
    }

    return (
        <>
            <List>
                {
                    quests.map((el) =>
                        <PendingQuest key={el.id} {...el}/>
                    )
                }
            </List>
            <ButtonGroup sx={{display: "flex", boxSizing: "border-box", width: "100%", justifyContent: "flex-end", p: "10px", gap: "5px"}}>
                <Button color="error" onClick={handleDeleteAll} variant="contained" endIcon={<SaveIcon/>}>
                    Delete all
                </Button>
                <Button onClick={handleClickSaveAll} variant="contained" endIcon={<SaveIcon/>}>
                    Save
                </Button>
            </ButtonGroup>
        </>
    )
}
export default PendingQuests