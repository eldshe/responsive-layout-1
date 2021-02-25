import TopAppBar from "./topBar";
import ResponsiveDrawer from "./sideBar";
import { useState } from "react";
import { useTheme } from '@material-ui/core/styles';
import { Container } from "@material-ui/core";
import FullWidthTabs from "./tabsMenu";
import ContentArea from "./content";

const MainLayout = () => {
    const [mobileOpen, setMenuOpen] = useState(false)
    const theme = useTheme();

    const handleMenuOpen = () => {
        setMenuOpen(!mobileOpen);
    }

    return (
        <div style={{ backgroundColor: theme.palette.background.default }}>
            <TopAppBar handleDrawerToggle={handleMenuOpen} />
            <ResponsiveDrawer mobileOpen={mobileOpen} handleMenuOpen={handleMenuOpen} />            
            <ContentArea/>
        </div>
    );
};

export default MainLayout;