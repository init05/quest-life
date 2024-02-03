'use client'

import MenuIcon from "@mui/icons-material/Menu";
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import {useState} from "react";
import {Tab} from "@/types/layout";
import FmdBadIcon from '@mui/icons-material/FmdBad'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorIcon from '@mui/icons-material/Error';
import RedeemIcon from '@mui/icons-material/Redeem';
import {green, red} from "@mui/material/colors";


const questTabs: Tab[] = [
    {
        title: 'Quests',
        href: '/quests',
        icon: <ErrorOutlineIcon/>
    },
    {
        title: 'Completed quests',
        href: '/quests/completed',
        icon: <CheckCircleOutlineIcon/>
    }
]

const otherTabs: Tab[] = [
    {
        title: 'Penalties',
        href: '/penalties',
        icon: <ErrorIcon sx={{ color: red[500] }}/>
    },
    {
        title: 'Rewards',
        href: '/rewards',
        icon: <RedeemIcon sx={{ color: green[500] }}/>
    }
]

const Navbar: React.FC = () => {
    const [active, setActive] = useState(false);
    const toggleNavbar = () => {
        setActive(prevState => !prevState);
    }
    return (
        <>
            <IconButton
                onClick={toggleNavbar}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{mr: 2}}
            >
                <MenuIcon/>
            </IconButton>
            <Drawer
                anchor='left'
                open={active}
                onClose={toggleNavbar}
            >
                <Box
                    sx={{width: 250}}
                    role="presentation"
                    onClick={toggleNavbar}
                    onKeyDown={toggleNavbar}
                >
                    <nav>
                        <List>
                            {
                                questTabs.map((el) =>
                                    <ListItem key={el.title} disablePadding>
                                        <ListItemButton href={el.href}>
                                            <ListItemIcon>
                                                {el.icon}
                                            </ListItemIcon>
                                            <ListItemText>
                                                {el.title}
                                            </ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                )
                            }
                            <Divider/>
                            {
                                otherTabs.map((el)=>
                                    <ListItem key={el.title} disablePadding>
                                        <ListItemButton href={el.href}>
                                            <ListItemIcon>
                                                {el.icon}
                                            </ListItemIcon>
                                            <ListItemText>
                                                {el.title}
                                            </ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                )
                            }
                        </List>
                    </nav>
                </Box>
            </Drawer>
        </>
    )
}

export default Navbar;