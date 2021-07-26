import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { createRouterState, useRouterStore } from 'mobx-state-router';
import { useState } from 'react';
import { useRootStore } from '../contexts';



const tasks = createRouterState('tasks');

export const CreatePage = () => {
    const [name, setName] = useState('')
    const rootStore = useRootStore();
    const routerStore = useRouterStore();
    const {tasksStore} = rootStore;

    const handleNameChange = (event: any) => {
        setName(event.target.value);
    }

    const handleClick = (name: string) => {
        tasksStore.addTask(name);
        console.log(tasksStore.tasks);
        rootStore.routerStore.goToState(tasks);
    }

    return (
        <div>
            <TextField
                value={name}
                name="name"
                label="Name"
                margin="normal"
                fullWidth
                onChange={handleNameChange}
            />
            <Button
                variant="contained"
                color="primary"
                onClick= {() => handleClick(name)}
            >
                Add
            </Button>
        </div>
    )

}