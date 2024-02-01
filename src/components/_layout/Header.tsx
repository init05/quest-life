import {AppBar, Drawer, IconButton, Link, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from "@/components/_layout/Navbar";

export const Header: React.FC = () => {
    return (
        <>
            <AppBar
                position="static"
                elevation={0}
            >
                <Toolbar>
                    <Navbar/>
                    <Link color='inherit' underline='none' variant='h5'>
                        quest life
                    </Link>
                </Toolbar>
            </AppBar>
        </>
    )
}