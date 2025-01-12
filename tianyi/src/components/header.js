// Filename - Header.js

import React from "react";  // Import React

// Importing Material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";  // Import Link for routing
import './fonts.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import logo from '../logo.png';

const theme = createTheme({
    typography: {
        fontFamily: 'Cormorant, serif', // Sets the global font to Cormorant
        button: {
            fontFamily: 'Cormorant, serif', // Specifically sets button font to Cormorant
        }
    }
});



// Header component
function Header() {
    const getMenuButtons = () => {
        return (
            <>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/dancers">Dancers</Button>
                <Button color="inherit" component={Link} to="/showcase">Showcase</Button>
                <Button color="inherit" component={Link} to="/costume_sale">Costume Sale</Button>
                <Button color="inherit" component={Link} to="/contact">Contact Us</Button>
            </>
        );
    };

    return (
        <ThemeProvider theme={theme}>

            <AppBar 
                position="fixed"
                sx={{ 
                    backgroundColor: "rgba(136, 183, 235, 0.5)",
                    backdropFilter: "blur(5px)",
                    boxShadow: "none"
                }}>
                <Toolbar>
                    {/* Logo */}
                    <img
                        src={logo}
                        alt="Tianyi Dance Team Logo"
                        style={{ height: '40px', marginRight: '16px' }} // Adjust size as needed
                    />
                    {/* Title */}
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, fontWeight: 300, color: "#FFFEFE", textAlign: "middle" }}
                    >
                        天艺 Tianyi Dance Team
                    </Typography>
                    {/* Menu Buttons */}
                    {getMenuButtons()}
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default Header;
