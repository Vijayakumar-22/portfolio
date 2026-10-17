import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import List from "@mui/material/List";
import ListIcon from "@mui/icons-material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import "../assets/styles/Navigation.scss";

const drawerWidth = 260;

const navItems: [string, string][] = [
    ["About", "about"],
    ["Skills", "expertise"],
    ["Experience", "history"],
    ["Projects", "projects"],
    ["Contact", "contact"],
];

interface NavigationProps {
    parentToChild: {
        mode: string;
    };
    modeChange: () => void;
}

function Navigation({ parentToChild, modeChange }: NavigationProps) {
    const { mode } = parentToChild;
    const isDarkMode = mode === "dark";

    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((previous) => !previous);
    };

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById("navigation");

            if (navbar) {
                setScrolled(window.scrollY > navbar.clientHeight);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = (section: string) => {
        const sectionElement = document.getElementById(section);

        if (sectionElement) {
            sectionElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

        setMobileOpen(false);
    };

    const drawer = (
        <Box
            className="navigation-bar-responsive"
            sx={{ textAlign: "center" }}
        >
            <Box className="mobile-menu-top">
                <ListIcon />
                <span>Menu</span>
            </Box>

            <Divider />

            <List className="mobile-nav-list">
                {navItems.map(([label, section]) => (
                    <ListItem key={section} disablePadding>
                        <ListItemButton
                            className="mobile-nav-link"
                            onClick={() => scrollToSection(section)}
                        >
                            <ListItemText primary={label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box
            className={isDarkMode ? "dark-mode" : "light-mode"}
            sx={{ display: "contents" }}
        >
            <CssBaseline />

            <AppBar
                component="nav"
                id="navigation"
                position="fixed"
                className={`navbar-fixed-top${scrolled ? " scrolled" : ""}`}
                elevation={0}
            >
                <Toolbar className="navigation-bar">
                    {/* Mobile menu button */}
                    <IconButton
                        className="mobile-menu-button"
                        aria-label={
                            mobileOpen ? "Close navigation menu" : "Open navigation menu"
                        }
                        aria-expanded={mobileOpen}
                        edge="start"
                        onClick={handleDrawerToggle}
                        size="large"
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Theme toggle */}
                    <IconButton
                        aria-label={
                            isDarkMode
                                ? "Switch to light mode"
                                : "Switch to dark mode"
                        }
                        onClick={modeChange}
                        className="theme-toggle"
                        size="large"
                    >
                        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
                    </IconButton>

                    {/* Desktop navigation */}
                    <Box className="desktop-nav-links">
                        {navItems.map(([label, section]) => (
                            <Button
                                key={section}
                                className="nav-link"
                                onClick={() => scrollToSection(section)}
                            >
                                {label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Mobile drawer */}
            <Drawer
                variant="temporary"
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                className={`mobile-navigation-drawer ${
                    isDarkMode ? "drawer-dark" : "drawer-light"
                }`}
                sx={{
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: `min(${drawerWidth}px, 85vw)`,
                    },
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    );
}

export default Navigation;
