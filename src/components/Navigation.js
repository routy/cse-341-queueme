
import React from 'react';

import { AppBar, Avatar, Button, Toolbar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    avatar: {
      marginRight: theme.spacing(2),
    },
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
}));

export default function Navigation() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
        <AppBar position="relative">
          <Toolbar>
            <Avatar className={classes.avatar} alt="Nick Routsong" src="/assets/img/nick-routsong-120.jpg" />
            <Typography variant="h6" color="inherit" noWrap className={classes.title}>
              Nick Routsong | CSE 341: Web Backend Development II
            </Typography>
            <Button color="inherit" href="/">Home</Button>
            <Button color="inherit" href="#/portfolio">Portfolio</Button>
          </Toolbar>
        </AppBar>
        </div>
    );
}