import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { IconButton, Hidden, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../assets/img/logo.png';
import FullWidthTabs from './tabsMenu';

const useStyles = makeStyles((theme) => ({
    root: {
        background: "linear-gradient(90deg,#92DF9C,#2A4480)",
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        height: "1500px",
        transition: "max-height 0.4s",
        maxHeight: theme.headerHeight,
        overflow: 'hidden',
        width: '100%',
        zIndex: 200,
        paddingBottom: theme.tabsMenuHeight,
        [theme.breakpoints.down('sm')]: {
            paddingBottom: 0,
        },
        [theme.breakpoints.only('xs')]: { // <---- mobile
            maxHeight: theme.mobileHeaderHeight
        },
        [theme.breakpoints.only('md')]: {
            maxHeight: theme.tabletHeaderHeight
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
        position: "absolute",
        height: "1500px",
        zIndex:500,
        transition: "max-height 0.4s",
        maxHeight: theme.headerHeight,
        left: 0,
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
        [theme.breakpoints.only('xs')]: {  // <---- mobile
            maxHeight: "1px",
        },
    },
    logoContainer: {
        display: "flex",
        zIndex:500,
        justifyContent: "center",
        position: "absolute",
        left: 0,
        top: 0,
        transition: "max-height 0.4s",
        width: theme.drawerWidth,
        height: "1500px",
        maxHeight: theme.headerHeight,
        backgroundColor: "rgba(42, 68, 128,0.28)",
        boxSizing: "border-box",
        /* -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box; */
        border: "solid 1px white",
        [theme.breakpoints.up('md')]: {       /// <---- animation
            transition: "width 0.4s",
        },
        [theme.breakpoints.only('md')]: {       /// <---- tablet
            width: theme.tabletDrawerWidth,
        },
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            border: "none",
            backgroundColor: "transparent",
        },
        [theme.breakpoints.only('xs')]: {  // <---- mobile
            maxHeight: "1px",
            marginTop: "15px"
        },
    },
    logo: {
        margin: "auto",
        width: "86%",
        transition: "width 0.4s",
        maxWidth: "165px",
        filter: "drop-shadow(0px 0px 5px lightgrey)",
        [theme.breakpoints.down('sm')]: {
            width: "120px",
        },
        [theme.breakpoints.only('xs')]: {  // <---- mobile
            width: "90px"
        },
    },
    avatar: {
        height: "60px",
        width: "60px",
        [theme.breakpoints.only('xs')]: {  // <---- mobile            
            height: "90px",
            width: "90px"
        },
    },
    profileWrapper: {
        height: "100%",
        display: "flex",
        flexDirection: "row-reverse",
        '& div': { padding: "0 10px" },
        [theme.breakpoints.only('xs')]: {  // <---- mobile
            width: "100%",
            animation:"$fade-out-in 0.4s",
            flexDirection: "row",
            padding: "50px 5% 0 5%",
            '& img': {
                height: "90px",
                width: "90px"
            },
        },

    },
    '@keyframes fade-out-in': {
        "0%": {
            opacity: "0",
            transform: "scale(0)",
        },        
        "100%": {
            opacity: "1",
            transform: "scale(1)",
        },
    }
}));


function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
};

const TopAppBar = (props) => {

    const classes = useStyles();

    return (
        <ElevationScroll {...props}>
            <AppBar position="fixed" className={classes.root}>
                <Hidden smDown implementation="css">
                    <Container className={classes.logoContainer}>
                        <img src={logo} className={classes.logo} />
                    </Container>
                </Hidden>
                <Hidden mdUp implementation="css">
                    <Container className={classes.logoContainer}>
                        <img src={logo} className={classes.logo} />
                    </Container>
                </Hidden>
                <Toolbar className={classes.menuButton}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={props.handleDrawerToggle}

                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap></Typography>
                </Toolbar>
                <Toolbar className={classes.profileWrapper}>
                    <Avatar className={classes.avatar} src="https://ak.picdn.net/shutterstock/videos/24827984/thumb/10.jpg" />
                    <div>
                        <Typography variant="h7">Jeremy Holtz</Typography>
                        <Typography variant="body2">rank : 245</Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    );
}

export default TopAppBar;