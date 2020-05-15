
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardActions, CardContent, CardMedia, Container, Grid, LinearProgress, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    buttonBlock: {
        width: '100%'
    }
  }));

export default function Portfolio() {

    const [data, setData] = useState( { portfolio: [] } );
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
          const result = await axios(
            '/api/portfolio.php',
          );
          if(result.data.portfolio) {
            setData(result.data);
          }
          setIsLoading(false);
        };
        fetchData();
      }, []);

    const classes = useStyles();

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}> 
            {isLoading &&
                <Grid item xs="12" align="center">
                    <Typography gutterBottom variant="h4" component="h2">
                    Loading...
                    </Typography>
                    <LinearProgress variant="query" />
                </Grid>
            }
            {data.portfolio && data.portfolio.length > 0 ? (
                data.portfolio.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardMedia
                        className={classes.cardMedia}
                        image={card.featuredImage}
                        title="Project Image Title"
                        />
                        <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                        {card.name}
                        </Typography>
                        <Typography>
                            {card.description}
                        </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="large" color="primary" variant="outlined" className={classes.buttonBlock}>
                            View
                        </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))
            ) : (
                <Grid item xs="12" align="center">
                    <Typography gutterBottom variant="h4" component="h2">
                    This Portfolio Needs More Folio
                    </Typography>
                </Grid>
            )}
            </Grid>
        </Container>
    );
}