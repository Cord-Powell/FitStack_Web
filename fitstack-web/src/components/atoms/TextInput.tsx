import { Box, makeStyles, StylesProvider, TextField } from '@material-ui/core';
import React from 'react';
import { Colors } from '../../constants/Colors';

interface Props {
    name: string,
    onChange?: any,
    label: string,
    value?: any,
}

const TextInput: React.FC<Props> = (props: Props) => {
    const styles = useStyles();
    return(
        
           <TextField 
           size='small'
           name={props.name} 
           className={styles.textField}
           onChange={props.onChange}
           label={props.label}
           value={props.value}
           variant='outlined'
           /> 
        
    )
} 

const useStyles = makeStyles({
        textField: {
        marginBottom: '1em',
        borderColor: Colors.salmonPink,
        outlineColor: Colors.salmonPink,
        color: Colors.darkGreyBackground, 
    },
    inputLabel: {
        color: Colors.darkGreyBackground,
        border: `1px solid ${Colors.salmonPink}`
    }
})

export default TextInput