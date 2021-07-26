import { createRouterState, RouterState, RouterStore } from 'mobx-state-router';
import { RootStore } from './RootStore';


const login = createRouterState('login');
const tasks = createRouterState('tasks');

const checkForUserSignedIn = async (
    fromState: RouterState,
    toState: RouterState,
    routerStore: RouterStore
) => {
    const { rootStore } = routerStore.options;
    const { userStore } = rootStore as RootStore;
    if (!userStore.user) {
        userStore.setLoginRedirect(toState);
        return login;
    }
};

export const routes = [
    {
        name:'login',
        pattern:'/login',
    },
    {
        name:'login',
        pattern:'/',
    },
    {
        name:'tasks',
        pattern:'/tasks',
        beforeEnter: checkForUserSignedIn
    },
    {
        name:'create',
        pattern:'/tasks/create',
        beforeEnter: checkForUserSignedIn,
    },
];