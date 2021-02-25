import TopAppBar from "./topBar";
import ResponsiveDrawer from "./sideBar";
import { useState } from "react";
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Container } from "@material-ui/core";
import FullWidthTabs from "./tabsMenu";

const useStyles = makeStyles((theme) => ({    
    root: {                       
        display: 'flex',        
        padding: "0",
        position: "relative",
        zIndex: "500",
        height: "calc(100vh + " + theme.tabsMenuHeight + " - " + theme.headerHeight + ")",
        marginTop: "calc(" + theme.headerHeight + " - " + theme.tabsMenuHeight + ")",
        marginLeft: theme.drawerWidth,
        transition:"margin 0.4s",
        width: "calc(100% - " + theme.drawerWidth + ")",

        [theme.breakpoints.down('sm')]: {
            marginTop: theme.headerHeight,
            height: "calc(100vh - " + theme.headerHeight + ")",
            width: "100%",
            marginLeft: "0"
        },
        [theme.breakpoints.only('xs')]: {     /// <---- mobile
            marginTop: theme.mobileHeaderHeight,
            height: "calc(100vh - " + theme.mobileHeaderHeight + ")",
        },
        [theme.breakpoints.only('md')]:{       /// <---- tablet
            marginLeft: theme.tabletDrawerWidth,
            width: "calc(100% - " + theme.tabletDrawerWidth + ")"
        },
    },
}));

const ContentArea = () => {

    const theme = useTheme();

    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <FullWidthTabs />
        </Container>
    );
};

export default ContentArea;