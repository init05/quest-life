'use client'

import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import usePendingQuestsStore from "@/stores/pendingQuestsStore";
import {QuestProps} from "@/components/pages/QuestsPage/types";
import {DatePicker} from "@mui/x-date-pickers";

const CreateQuest = () => {
    const [open, setOpen] = React.useState(false);
    const addQuest = usePendingQuestsStore(state => state.addQuest);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Box sx={{display: "flex", boxSizing: "border-box", width: "100%", justifyContent: "flex-end", p: "10px"}}>
                <Button onClick={handleClickOpen} variant="contained" endIcon={<AddIcon/>}>
                    New
                </Button>
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        const id = Date.now();
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const quest = Object.fromEntries((formData as any).entries()) as QuestProps;
                        quest.id = id.toString();
                        addQuest(quest);
                        handleClose();
                    },
                }}
            >
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="title"
                        label="Quest title"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="description"
                        label="Quest description"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <DatePicker name="endTime"/>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="reward"
                        label="Reward when you complete the quest"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="penalty"
                        label="Penaly when you don't complete the quest or cancel it"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Create</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
export default CreateQuest;