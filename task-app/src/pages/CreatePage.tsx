import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { createRouterState, useRouterStore } from 'mobx-state-router';
import { useState } from 'react';
import { useRootStore } from '../contexts';
import { makeStyles, Theme } from '@material-ui/core/styles';

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

const tasks = createRouterState('tasks');

export const CreatePage = () => {
    const [name, setName] = useState('')
    const rootStore = useRootStore();
    const routerStore = useRouterStore();
    const { tasksStore } = rootStore;
    const classes = useStyles();

    const handleNameChange = (event: any) => {
        setName(event.target.value);
    }

    const handleClick = (name: string) => {
        if (name != '') {
            tasksStore.addTask(name);
            rootStore.routerStore.goToState(tasks);
        }
    }

    return (
        <div>
            <form className={classes.form}>
                <div>
                    <TextField
                        value={name}
                        name="name"
                        label="Name"
                        margin="normal"
                        fullWidth
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    <Button
                        className={classes.buttonBar}
                        variant="contained"
                        color="primary"
                        onClick={() => handleClick(name)}
                    >
                        Add
                    </Button>
                </div>
            </form>
        </div>
    )
}