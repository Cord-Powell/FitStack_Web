import { Box, Button, Icon, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Colors } from '../../constants/Colors';
import Image from '../../images/HeaderBackground.png';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

interface Props {
    props?: any,
}

const HomePageBody: React.FC<Props> = (props: Props) => {
    const styles = useStyles();
    return(
        <Box className={styles.backgroundBox}>
            <Typography className={styles.fitStackLabel}>
                FitStack
            </Typography>
            <Box >
                <Button className={styles.button} >
                    Start Your Fitness Journey
                    <ArrowForwardIcon/>
                </Button>
            </Box>
        </Box>
    )
}

const useStyles = makeStyles({
    backgroundBox: {
        backgroundImage: `url(${Image})`,
        height: '600px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    fitStackLabel: {
        color: '#ffffff',
        fontSize: '4em',
        fontWeight: 'bold', 
    },
    button: {
        color: '#ffffff',
        backgroundColor: Colors.salmonPink,
        fontSize: '1.2em',
        marginTop: '.75em',
        fontStyle: 'Chrome',
        fontWeight: 'lighter',
        height: '3em',
        '&:hover': {
            backgroundColor: Colors.salmonPink
        }
    },
})

export default HomePageBody