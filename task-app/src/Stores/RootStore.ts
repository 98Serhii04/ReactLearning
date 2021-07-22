import { createRouterState, RouterStore } from 'mobx-state-router';
import { routes } from './routes';
import { UserStore } from './UserStore';

const notFound = createRouterState('notFound');

export class RootStore {
    userStore = new UserStore(this);

    // Pass rootStore as an option to RouterStore
    routerStore = new RouterStore(routes, notFound, {
        rootStore: this,
    });
}