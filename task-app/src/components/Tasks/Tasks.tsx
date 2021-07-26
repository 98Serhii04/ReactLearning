import { observer } from "mobx-react-lite";
import { useRouterStore } from "mobx-state-router";
import { useRootStore } from "../../contexts";
import { TasksStore } from "../../Stores/TasksStore"
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TaskInfo } from "../Task/TaskInfo";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

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
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Status</TableCell>
                            <TableCell align="right">Task name</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tasks.map((task) => {
                            return (
                                <TaskInfo task={task} />
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
})