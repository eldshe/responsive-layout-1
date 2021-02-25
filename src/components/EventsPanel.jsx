import React, { useState, useEffect } from 'react';
import { makeStyles, Hidden, Drawer, useTheme, Grow } from '@material-ui/core';
import EventBanner from './UI/EventBanner'
import ControlledAccordions from './UI/EventDetailsPanel';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        display: "flex",
        flexDirection: "row",
    },
    leftSide: {
        transition: "width 0.25s ease-out",
        backgroundColor: "#FBF8FF",
        margin: "0",
        width: "75%",
        height: "100%",
        zIndex: 14,
        overflowY: "auto !important",
        direction: theme.direction == "rtl" ? "ltr" : "rtl",
        '& *': {
            direction: theme.direction
        },
        /* width */
        '&::-webkit-scrollbar': {
            width: '7px',
        },

        /* Track */
        '&::-webkit-scrollbar-track': {
            background: '#ffffff'
        },

        /* Handle */
        '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '5px',
            maxHeight: "150px"
        },

        /* Handle on hover */
        '&::-webkit-scrollbar-thumb:hover': {
            background: '#555'
        },
        [theme.breakpoints.down('sm')]: {       /// <---- tablet
            overflow: "scroll !important",
            width: "100%",
            '&::-webkit-scrollbar': {
                display: "none"
            },
        },
    },
    rightSide: {
        transition: "width 0.25s ease-out, margin 0.25s ease-out",
        margin: "0",
        backgroundColor: "#F6F1FB",
        height: "100%",
        zIndex: 17
    },
    bigger: { width: "75%" },
    smaller: { width: "25%" },
    divider: {
        width: "2px",
        margin: "4% -1px 0 1px",
        backgroundColor: "darkgrey",
        borderRadius: "5px",
        height: "85%",
        zIndex: 20,
    },
    darkLayer: {
        position: "absolute",
        left: 0,
        zIndex: 15,
        height: "calc(100vh - 130px)",
        width: "100%",
        background: "linear-gradient(90deg,rgba(0,0,0,0.8),rgba(0,0,0,0.2))",
    },
    drawerPaper: {
        width: "100%",
        backgroundColor: "white"
    }
}));


export default function EventsPanel() {

    const classes = useStyles();
    const container = window !== undefined ? () => window().document.body : undefined;
    const theme = useTheme();

    const [show, setShow] = useState(false);
    const [eventShowMode, seteventShowMode] = useState(false);

    const showEvent = () => {
        seteventShowMode(true);
    }

    useEffect(() => {
        console.log("hereeee")
        setTimeout(() => {
            setShow(true);
        }, 80);
    }, [])

    return (show &&
        <div className={classes.root}>
            <div className={classes.leftSide}>
                <EventBanner index={1} eventClicked={showEvent} color="red" />
                <EventBanner index={2} eventClicked={showEvent} color="green" />
                <EventBanner index={3} eventClicked={showEvent} color="blue" />
                <EventBanner index={4} eventClicked={showEvent} color="brown" />
            </div>
            <Hidden xsDown>
                {eventShowMode && <Grow in={true} timeout={180}><div className={classes.darkLayer} onClick={() => seteventShowMode(false)} /></Grow>}

                {!eventShowMode && <Grow in={true} timeout={180}><div className={classes.divider} /></Grow>}
                <Grow in={true} timeout={180}>
                    <div style={{
                        width: !eventShowMode ? "25%" : "85%",
                        marginLeft: !eventShowMode ? "0" : "-60%"
                    }}
                        className={classes.rightSide}>
                    </div>
                </Grow>
            </Hidden>
            <Hidden smUp>
                <Drawer
                    //container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={eventShowMode}
                    onClose={() => { }}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    <ControlledAccordions />
                </Drawer>
            </Hidden>
        </div>
    )

}