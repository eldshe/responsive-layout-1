import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import EventsPanel from '../components/EventsPanel';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                children

            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.menuBlue,
        width: "100%",
        height: theme.tabsMenuHeight,
        '& span': {
            color: "white",
        },
        '& .MuiTabs-indicator': {
            backgroundColor: "white"
        }
    },
    tabs: {
        maxWidth: "500px",
        minHeight: theme.tabsMenuHeight,
        height: theme.tabsMenuHeight
    },
    tabPanel: {
        height: "calc(100vh - " + theme.headerHeight + ")",
        [theme.breakpoints.down('sm')]: {
            height: "calc(100vh - " + theme.headerHeight + " - " + theme.tabsMenuHeight + ")",
        },
        [theme.breakpoints.only('xs')]: {     /// <---- mobile            
            height: "calc(100vh - " + theme.mobileHeaderHeight + " - " + theme.tabsMenuHeight + ")",
        },
    },
    panelContainer: {
        '& *': {
            overflowY:"hidden"
        }
    }
}));

export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <Tabs
                value={value}
                className={classes.tabs}
                onChange={handleChange}
                variant="fullWidth"
                aria-label="full width tabs example"
            >
                <Tab label="Events" {...a11yProps(0)} />
                <Tab label="Statistics" {...a11yProps(1)} />
                <Tab label="Other" {...a11yProps(2)} />
            </Tabs>

            <SwipeableViews
                className={classes.panelContainer}
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel className={classes.tabPanel} value={value} index={0} dir={theme.direction}>
                    <EventsPanel />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    Item Two
        </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    Item Three
        </TabPanel>
            </SwipeableViews>
        </div >
    );
}