import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Colors } from '../../constants/Colors';

interface Props {
    statContent: string,
    labelContent: string,
}

const FooterStatistic: React.FC<Props> = (props: Props) => {
    const styles = useStyles();
    return (
        <Box className={styles.statsContainer}>
            <Typography className={styles.statsText}>
                {props.statContent}
            </Typography>
            <Typography className={styles.labelText}>
                {props.labelContent}
            </Typography>
        </Box> 
    )
}

const useStyles = makeStyles({
    statsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: Colors.darkGreyBackground,
        marginBottom: '5em',
        marginTop: '5em'
    },
    statsText: {
        alignSelf: 'center',
        color: '#ffffff',
        fontSize: '3em',
        fontWeight: 'bold',
    },
    labelText: {
        color: '#ffffff',
        fontSize: '2em',
    },
})

export default FooterStatistic