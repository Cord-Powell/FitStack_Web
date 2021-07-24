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
           className={styles.textInput} 
           name={props.name} 
           onChange={props.onChange}
           label={props.label}
           value={props.value}
           /> 
        
    )
} 

const useStyles = makeStyles({
    textInput: {
        marginTop: '1em',
        marginBottom: '1em',
        borderColor: Colors.salmonPink,
        border: '1px',
        height: '2 em'
    }
})

export default TextInput