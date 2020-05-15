import React from 'react';
import { Container, Grid, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    featuredImage: {
      maxWidth: '300px',
      width: '100%',
      borderRadius: '500px'
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
  }));

export default function Home() {

    const classes = useStyles();

    return (
        <main>
            <div className={classes.heroContent}>
                <Container maxWidth="md">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    My Portfolio
                </Typography>
                
                <Grid container spacing={8} justify="center">
                    <Grid item xs={12} md={4} align="center">
                        <img src="/assets/img/nick-routsong-512.jpg" className={classes.featuredImage} alt="Nick Routsong" />
                    </Grid>
                    <Grid item xs={12} md={8}>
                    <Typography variant="body1" align="left" color="textSecondary" paragraph>
                    My first encounter with coding came out of necessity. The year was 1999 and I needed to build a website for my favorite video game, Warcraft II: Battle.net Edition. I decided that *hacks* and cheat codes were going to draw in the masses, and so that’s what I focused on. Using Microsoft Frontpage and Geocities, I cobbled together my first site and posted the URL to the Battle.net channels. To my parents' shock, I ended up making $1-2K in ad revenue, which I quickly traded in for a new TV and stereo system for my bedroom. Priorities!
                    </Typography>
                    <Typography variant="body1" align="left" color="textSecondary" paragraph>
                    From there, I continually found myself presented with opportunities to learn more about web development until it turned from a hobby, to a part-time job, to a career. I’ve now had over 13 years of professional web development experience. I’ve worked with small companies and startups as a full stack developer as well as part of a team of developers working at a large automotive manufacturer to transition their monolithic application into a microservices architecture. Everyday, I’m working with WordPress, Laravel, and React to create innovative solutions for clients in multiple industries including automotive part sales, content blogs, food services, property management and more.        
                    </Typography>
                    </Grid>
                </Grid>
                
                <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Button variant="contained" color="primary" href="#/portfolio">
                                View Portfolio
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary" href="https://www.linkedin.com/in/nickroutsong/" target="_blank" rel="noopener">
                            View my LinkedIn
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary" href="https://github.com/routy" target="_blank" rel="noopener">
                            View my GitHub
                            </Button>
                        </Grid>
                    </Grid>
                </div>
                </Container>
            </div>
        </main>
    );
}