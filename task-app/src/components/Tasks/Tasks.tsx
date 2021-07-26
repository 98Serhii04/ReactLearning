import { observer } from "mobx-react-lite";
import { createStyles, lighten, makeStyles, Theme } from '@material-ui/core/styles';
import { useRouterStore } from "mobx-state-router";
import { useRootStore } from "../../contexts";
import { TasksStore } from "../../Stores/TasksStore"
import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TaskInfo } from "../Task/TaskInfo";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '80%',
            alignItems: 'center',
        },
        paper: {
            width: '80%',
            marginBottom: theme.spacing(2),
        },
        table: {
            minWidth: 750,
        },
        visuallyHidden: {
            border: 0,
            clip: 'rect(0 0 0 0)',
            height: 1,
            margin: -1,
            overflow: 'hidden',
            padding: 0,
            position: 'absolute',
            top: 20,
            width: 1,
        },
    }),
);

export const Tasks = observer(() => {
    const routerStore = useRouterStore();
    const rootStore = useRootStore();
    const { tasksStore } = rootStore;
    const { tasks } = tasksStore;
    const classes = useStyles();

    useEffect(() => {
        console.log(tasksStore.tasks);
    })

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Status</TableCell>
                                <TableCell align="center">Task name</TableCell>
                                <TableCell align="left">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tasks.map((task) => {
                                return (
                                    <TaskInfo task={task} key={task.id} />
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    )
})