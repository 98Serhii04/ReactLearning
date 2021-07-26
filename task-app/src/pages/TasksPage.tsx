import Button from '@material-ui/core/Button';
import { useRootStore } from '../contexts';
import { makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { Tasks } from '../components/Tasks/Tasks';
import { createRouterState } from 'mobx-state-router';

const create = createRouterState('create');

export const TaskPage = () => {
    const rootStore = useRootStore();


    const handleClick = (event: any) => {
        rootStore.routerStore.goToState(create);
    }


    return (
        <div>
            <Tasks />
            <p>
                <Button onClick={handleClick} variant="contained" color="primary">Add</Button>
            </p>
        </div>
    );
}
