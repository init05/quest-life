'use client'

import {Badge, Button} from "@mui/material";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {useState} from "react";


const Notifications: React.FC = () => {
    const [quantity, setQuantity] = useState(2);

    return (
        <Badge badgeContent={quantity} color="error">
        <Button variant='outlined' sx={{minWidth: '20px', padding: '5px 5px'}} color='inherit'>
                <NotificationsNoneIcon color='inherit'/>
        </Button>
        </Badge>
    )
}
export default Notifications