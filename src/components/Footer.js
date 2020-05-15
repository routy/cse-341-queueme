import React from 'react';
import { Link, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Nick Routsong's Portfolio
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default function Footer() {

    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
            Thanks for stopping by!
            </Typography>
            <Copyright />
        </footer>
    );
}