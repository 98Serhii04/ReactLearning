import { TaskModel } from "../../Models/TaskModel";
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import { useRouterStore } from "mobx-state-router";
import { useRootStore } from "../../contexts";
import { observer } from "mobx-react-lite";
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export interface TaskInfoProps {
    task: TaskModel;
}

export const TaskInfo = observer(({ task }: TaskInfoProps) => {
    const classes = useStyles();
    const routerStore = useRouterStore();
    const rootStore = useRootStore();
    const { taskStore, tasksStore } = rootStore;

    const handleClick = () => {
        taskStore.setTask(task);
        taskStore.toggleTask();
    }

    const handleDelete = () => {
        tasksStore.deleteTask(task.id);
    }

    return (
            <TableRow
                hover
                onClick={() => handleClick()}
                role="checkbox"
                aria-checked={task.isDone}
                tabIndex={-1}
                
                selected={task.isDone}>
                <TableCell padding="checkbox">
                    <Checkbox
                        checked={task.isDone}
                    />
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                    {task.name}
                </TableCell>
                <TableCell align="left">
                    <Button onClick={handleDelete} variant="contained" color="primary">X</Button>
                </TableCell>
                
            </TableRow>
    )
})