import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

import styles from './Card.module.css';
import Loading from '../loading';

const Cards = ({ data }) => {
    const { confirmed, recovered, deaths, lastUpdate } = data;

    if (!lastUpdate) {
        console.log(lastUpdate);
        return (
            <Loading />
        )
    }

    return (
        <div className={styles.section}>
            <Grid container spacing={3}>
                <Grid item sm={4} xs={12} >
                    <Card className={styles.confirmed}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom={false}>Số người nhiểm</Typography>
                            <Typography variant="h5">
                                <CountUp
                                    start={0}
                                    end={confirmed}
                                    duration={0.75}
                                    separator=" "
                                />
                            </Typography>
                            <Typography variant="body2">{new Date(lastUpdate).toDateString()}</Typography>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={4} xs={12} >
                    <Card className={styles.recovered}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom={false}> Số người khỏi</Typography>
                            <Typography variant="h5">
                                <CountUp
                                    start={0}
                                    end={recovered}
                                    duration={0.75}
                                    separator=" "
                                />
                            </Typography>
                            <Typography variant="body2">{new Date(lastUpdate).toDateString()}</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item sm={4} xs={12} >
                    <Card className={styles.deaths}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom={false}>Số người tử vong</Typography>
                            <Typography variant="h5">
                                <CountUp
                                    start={0}
                                    end={deaths}
                                    duration={0.75}
                                    separator=" "
                                />
                            </Typography>
                            <Typography variant="body2">{new Date(lastUpdate).toDateString()}</Typography>

                        </CardContent>
                    </Card>
                </Grid>


            </Grid>
        </div>
    );
}

export default Cards;
