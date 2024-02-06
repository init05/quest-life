'use client'


import usePendingQuestsStore from "@/stores/pendingQuestsStore";
import Quest from "@/components/pages/QuestsPage/Quest";
import {Box, Button, List} from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import React from "react";

const PendingQuests = () => {
    const quests = usePendingQuestsStore(state => state.quests);

    const handleClickSave = () => {

    }

    return (
        <>
            <List>
                {
                    quests.map((el) =>
                        <Quest key={el.id} {...el}/>
                    )
                }
            </List>
            <Box sx={{display: "flex", boxSizing: "border-box", width: "100%", justifyContent: "flex-end", p: "10px"}}>
                <Button onClick={handleClickSave} variant="contained" endIcon={<SaveIcon/>}>
                    Save
                </Button>
            </Box>
        </>
    )
}
export default PendingQuests