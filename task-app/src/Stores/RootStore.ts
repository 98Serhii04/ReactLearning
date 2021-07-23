import { createRouterState, RouterStore } from 'mobx-state-router';
import { routes } from './routes';
import { TasksStore } from './TasksStore';
import { UserStore } from './UserStore';
import { TaskStore } from './TaskStore';

const notFound = createRouterState('notFound');

export class RootStore {
    userStore = new UserStore(this);
    tasksStore = new TasksStore(this);
    taskStore = new TaskStore(this);
    // Pass rootStore as an option to RouterStore
    routerStore = new RouterStore(routes, notFound, {
        rootStore: this,
    });
}