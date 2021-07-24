import { AppBar, IconButton, Toolbar, Typography, Button, makeStyles, Box, Icon, Divider } from '@material-ui/core';
import { findByLabelText } from '@testing-library/react';
import React from 'react';
import { createUseStyles } from 'react-jss'
import { Colors } from '../../constants/Colors';
import logo from '../../images/logo.svg';
import NavButton from '../atoms/NavButton';
import NavTextButton from '../atoms/NavTextButton';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const NavBar: React.FC<Props> = (props: Props) => {
    const styles = useStyles();
    return (
        <AppBar className={styles.appBar} position="static">
            <Toolbar > 
                <Box className={styles.mainNavContainer}>
                    <Box className={styles.leftNavContainer}>
                        <Icon className={styles.logoContainer}>
                            <img src={logo} alt='logo' />
                        </Icon>
                        <Divider/>
                        <Typography className={styles.fitStack} variant='h1' >
                            FitStack
                        </Typography>
                        <NavTextButton 
                        name='About' 
                        content='About' />
                        <NavTextButton 
                        name='Test' 
                        content='Test' />
                        <NavTextButton 
                        name='Test' 
                        content='Test' />
                    </Box>
                    <Box className={styles.rightNavContainer}>
                        <NavButton 
                        name='LogOut' 
                        content='Log Out' />
                        <NavButton 
                        name='LogIn' 
                        content='Log In' />
                        <NavButton 
                        name='SignUp' 
                        content='Sign Up' />
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

const useStyles = makeStyles({
    appBar: {
        backgroundColor: Colors.darkGreyBackground,
    },
    toolBar: {
        height: '100%',
        width: '100%',
    },
    logoContainer: {
        marginRight: '1em',
        marginTop: '.2em',
        width: '2em',
    },
    fitStack: {
        fontSize: '1.4em',
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
        marginRight: '.5em'
    },
    leftNavContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    rightNavContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    mainNavContainer: { 
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});
export default NavBar;
