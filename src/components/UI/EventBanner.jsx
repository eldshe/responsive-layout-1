import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import bBGimg from './../../assets/img/60238.jpg';
import { Grow } from '@material-ui/core';

export default function EventBanner(props) {

    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 60);
    });

    const useStyles = makeStyles({
        root: {
          //  backgroundImage: "url(" + bBGimg + ")",
            backgroundSize: '340%',
            backgroundRepeat: 'no-repeat',
            minWidth: 275,
            margin: "25px",
            cursor: "pointer",
            boxShadow: "0 0 5px rgba(0,0,0,0.15)",
            transition: "box-shadow 0.15s , transform 0.15s",
            transform: "scale(1)",
            '&:hover': {
                boxShadow: "0 0 7px rgba(0,0,0,0.3)",
                transform: "scale(1.005)",
            }
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
        bottomArea: {
            backgroundColor: props.color
        },
    });

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [show, setShow] = useState(false);

    return (
        <Grow in={show} timeout={100 * props.index * props.index}>
            <Card onClick={props.eventClicked} className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Event Title
        </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        short description
        </Typography>
                </CardContent>
                <CardActions className={classes.bottomArea}>
                    <Typography variant="body2" style={{ color: "white" }}>
                        text
        </Typography>
                </CardActions>
            </Card>
        </Grow>
    );
}
