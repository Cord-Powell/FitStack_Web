import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import HomePageBody from '../organisms/HomePageBody';
import HomePageFooter from '../organisms/HomePageFooter';
import NavBar from '../organisms/NavBar';
import Image from '../../images/HeaderBackground.png'
import LoginForm from '../organisms/LoginForm';

interface Props {
    props?: any
}

export const HomePage: React.FC<Props> = () => {
    const styles = useStyles()
    return (
        <Box className={styles.pageContainer}>
            <NavBar />
            {/* <Box className={styles.backgroundImageContainer}>
                <LoginForm/>
            </Box> */}
            <LoginForm/>
            <Box className={styles.footerContainer} >
                <HomePageFooter />
            </Box>


        </Box>
    )
}

const useStyles = makeStyles({
    pageContainer: {
        display: 'flex',
        height: '100vh',
        width: '100%',
        flexDirection: 'column'
    },
    footerContainer: {
        position: 'fixed',
        bottom: '0em',
        width: '100%',
        marginBottom: '0px',
    },
    backgroundImageContainer: {
        backgroundImage: `url(${Image})`,
        height: '100%',
        width: '100%',
    }
})

