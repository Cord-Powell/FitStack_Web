import { Box, makeStyles, Typography } from '@material-ui/core';
import { flexbox } from '@material-ui/system';
import React from 'react';
import { Colors } from '../../constants/Colors';
import FooterStatistic from './FooterStatistic';

interface Props {
    props?: any,
}

const HomePageFooter: React.FC<Props> = (props: Props) => {
    const styles = useStyles();
    return(
        <Box className={styles.footerContainer}>
            <FooterStatistic statContent='120' labelContent='Satisfied users' />
            <FooterStatistic statContent='1500' labelContent='Total lbs lost' />
            <FooterStatistic statContent='1234' labelContent='And Yet Another Label' />
            <FooterStatistic statContent='5678' labelContent='Uno Mas' />
        </Box>
    )
}

const useStyles = makeStyles({
    footerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: Colors.darkGreyBackground,
        height: '100%'
    },
})

export default HomePageFooter