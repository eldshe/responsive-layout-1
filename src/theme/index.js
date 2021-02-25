import { createMuiTheme, colors } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const theme = createMuiTheme({
    headerHeight: "130px",
    mobileHeaderHeight: "200px",
    tabsMenuHeight: "40px",
    drawerWidth:  "270px",
    tabletDrawerWidth:  "200px",
    palette: {
        background: {
            default: '#FBF8FF',
            darker: '#F6F1FB'
        },
        primary: {
            main: '#2A4480',
            green: '#92DF9C',
            purple: '#747177',
            menuBlue: '#A4BFFF'
        },
        text: {
            primary: colors.blueGrey[900],
            lighter: '#747177'
        }
    },
});

export default theme;
