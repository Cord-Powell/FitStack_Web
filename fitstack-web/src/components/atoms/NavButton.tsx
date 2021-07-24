import { Box, Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { Colors } from '../../constants/Colors';

interface Props {
    name?: string,
    onClick?: any,
    variant?: any,
    content: string,
    type?: string,
    loading?: boolean,
}

const NavButton: React.FC<Props> =(props: Props) => {
    const styles = useStyles();
    return(
        <Box >
            <Button className={styles.navButton} name={props.name} onClick={props.onClick}>
                {props.content}
            </Button>
        </Box>
    )
}

const useStyles = makeStyles({
    navButton: {
        color: '#ffffff',
        marginLeft: '.5em',
        marginRight: '.5em',
        backgroundColor: Colors.salmonPink,
        '&:hover': {
            backgroundColor: Colors.salmonPink
        }
    }, 
});

export default NavButton