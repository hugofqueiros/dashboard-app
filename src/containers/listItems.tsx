import { Link } from "react-router-dom";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Dashboard, People, BarChart, Layers, CurrencyBitcoin } from "@mui/icons-material";

export const mainListItems = (
    <>
        <ListItemButton component={Link} to="/test">
            <ListItemIcon>
                <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Default View" />
        </ListItemButton>
        <ListItemButton component={Link} to="/bitcoin">
            <ListItemIcon>
                <CurrencyBitcoin />
            </ListItemIcon>
            <ListItemText primary="Bitcoin Charts" />
        </ListItemButton>
        {/* <ListItemButton component={Link} to="/marketCap">
            <ListItemIcon>
                <BarChart />
            </ListItemIcon>
            <ListItemText primary="MarketCap" />
        </ListItemButton> */}
        <ListItemButton component={Link} to="/reducer">
            <ListItemIcon>
                <BarChart />
            </ListItemIcon>
            <ListItemText primary="useReducer example" />
        </ListItemButton>
        <ListItemButton component={Link} to="/how">
            <ListItemIcon>
                <Layers />
            </ListItemIcon>
            <ListItemText primary="how" />
        </ListItemButton>
        <ListItemButton component={Link} to="/about">
            <ListItemIcon>
                <People />
            </ListItemIcon>
            <ListItemText primary="About" />
        </ListItemButton>
    </>
);

