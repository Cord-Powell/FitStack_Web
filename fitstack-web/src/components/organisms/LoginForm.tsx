import { Box, Button, Container, makeStyles } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { Colors } from '../../constants/Colors';
import { useStore } from '../../stores/store';
import NavButton from '../atoms/NavButton';
import TextInput from '../atoms/TextInput';

interface Props {
    props?: any,
}


const LoginForm: React.FC<Props> = (props: Props) => {
    const { userStore } = useStore();
    const { login } = userStore;
    const styles = useStyles();
    return (
        <Box className={styles.formContainer}>
        <Formik
            initialValues={{ email: '', password: '', error: null }}
            onSubmit={(values, { setErrors }) => console.log(values)}/* .catch(error => setErrors({ error: 'Invalid email or password' }))} */
        >
            {({ handleSubmit, isSubmitting, errors, values, handleChange }) => (
                
                    <Form className={styles.form} onSubmit={handleSubmit} autoComplete='off' >
                        <TextInput onChange={handleChange} name='email' label='Email' />
                        <TextInput onChange={handleChange} name='password' label='Password' />
                        <Button className={styles.submitButton} type='submit' variant='contained' size='large'>
                            Log In
                        </Button>
                    </Form>
            )}


        </Formik>
         </Box>

    )
}

const useStyles = makeStyles({
    formContainer:{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        width: '18em',
        borderRadius: '.5em',
        height: '17em',
    },
    submitButton: {
        backgroundColor: Colors.salmonPink,
        color: '#ffffff',
        '&:hover': {
            backgroundColor: Colors.salmonPink
        }
    }
})

export default LoginForm