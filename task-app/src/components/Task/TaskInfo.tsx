import { TaskModel } from "../../Models/TaskModel";
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { useRouterStore } from "mobx-state-router";
import { useRootStore } from "../../contexts";
import { observer } from "mobx-react-lite";

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

export interface TaskInfoProps{
    task: TaskModel;
}

export const TaskInfo = observer(({task}: TaskInfoProps) => {
    const classes = useStyles();
    const routerStore = useRouterStore();
    const rootStore = useRootStore();
    const {taskStore} = rootStore;

    useEffect(()=>{
        taskStore.setTask(task);
    })

    const handleClick = () => {
        taskStore.toggleTask();
      }

    return(
        <TableRow hover
            onClick={()=>handleClick()}
            role="checkbox"
            aria-checked={task.isDone}
            tabIndex={-1}
            key={task.id}
            selected={task.isDone}>
                <TableCell padding="checkbox">
                        <Checkbox
                          checked={task.isDone}
                        />
                </TableCell>
                <TableCell align="right">{task.isDone}</TableCell>
                <TableCell component="th" scope="row">
                {task.name}
                </TableCell>
            </TableRow>
    )
})