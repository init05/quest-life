'use client'


import usePendingQuestsStore from "@/stores/pendingQuestsStore";
import {Button, ButtonGroup, List} from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import React from "react";
import PendingQuest from "@/components/pages/ManageQuestsPage/PendingQuest";

const PendingQuests = () => {
    const quests = usePendingQuestsStore(state => state.quests);

    const handleClickSave = () => {

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
                <Button color="error" onClick={handleClickSave} variant="contained" endIcon={<SaveIcon/>}>
                    Delete all
                </Button>
                <Button onClick={handleClickSave} variant="contained" endIcon={<SaveIcon/>}>
                    Save
                </Button>
            </ButtonGroup>
        </>
    )
}
export default PendingQuests