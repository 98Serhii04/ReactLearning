import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useRootStore } from '../contexts';

const useStyles = makeStyles((theme: Theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    buttonBar: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
    footer: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    link: {
        margin: theme.spacing(1),
    },
}));

export const LoginPage = () => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const rootStore = useRootStore();
    const { userStore } = rootStore;

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event: any) => {
        event.stopPropagation();
        event.preventDefault();

        if (email.length > 0) {
            userStore.setUser({ email });
        }
    };

    return (
    <div>
        <form onSubmit={handleSubmit} className={classes.form}>
            <TextField
                value={email}
                name="email"
                label="Email"
                margin="normal"
                fullWidth
                onChange={handleEmailChange}
            />
                    
            <div className={classes.buttonBar}>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                Sign In
                </Button>
            </div>
        </form>
    </div>
    );
};
