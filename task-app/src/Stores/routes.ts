import { createRouterState, RouterState, RouterStore } from 'mobx-state-router';
import { RootStore } from './RootStore';


const login = createRouterState('login');

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
        pattern:'/login'
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
    {
        name:'notFound',
        pattern:'/login'
    },
    {
        name: 'checkout',
        pattern: '/checkout',
        beforeEnter: checkForUserSignedIn
    }
];