import {AppBar, Drawer, IconButton, Link, Toolbar, Typography} from "@mui/material";
import Navbar from "@/components/_layout/header/Navbar";
import Notifications from "@/components/_layout/header/Notifications";

export const Header: React.FC = () => {
    return (
        <>
            <AppBar
                position="static"
                elevation={0}
            >
                <Toolbar>
                    <Navbar/>
                    <Link color='inherit' underline='none' variant='h5' sx={{flexGrow: 1}}>
                        quest life
                    </Link>
                    <Notifications/>
                </Toolbar>
            </AppBar>
        </>
    )
}