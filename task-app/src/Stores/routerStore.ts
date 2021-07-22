import {
    browserHistory,
    createRouterState,
    HistoryAdapter,
    RouterStore,
} from 'mobx-state-router';

const notFound = createRouterState('notFound');

const routes = [
    {
        name:'login',
        pattern:'/login'
    },
    {
        name:'tasks',
        pattern:'/tasks'
    },
    {
        name:'create',
        pattern:'/tasks/create'
    }
];

export function router() {
    const routerStore = new RouterStore(routes, notFound);

    const historyAdapter = new HistoryAdapter(routerStore, browserHistory);
    historyAdapter.observeRouterStateChanges();

    return routerStore;
}