import { Button, Container, makeStyles } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import React from 'react';
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
            <Formik
                initialValues={{ email: '', password: '', error: null }}
                onSubmit={(values, { setErrors }) => console.log(values)}/* .catch(error => setErrors({ error: 'Invalid email or password' }))} */
            >
                {({ handleSubmit, isSubmitting, errors, values, handleChange}) => (
                    <Form className={styles.form} onSubmit={handleSubmit} autoComplete='off' >
                        <TextInput onChange={handleChange} name='email' label='Email' />
                        <TextInput onChange={handleChange} name='password' label='Password' />
                        <Button type='submit'>
                            Submit
                        </Button>
                    </Form>
                )}


            </Formik>
 
    )
}

const useStyles = makeStyles({
    formContainer: {
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        maxWidth: '20em',
    },
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }
})

export default LoginForm