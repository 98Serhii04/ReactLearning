import {
    browserHistory,
    createRouterState,
    HistoryAdapter,
    RouterStore,
} from 'mobx-state-router';
import {routes} from "../routes";
const notFound = createRouterState('notFound');



export function router() {
    const routerStore = new RouterStore(routes, notFound);

    const historyAdapter = new HistoryAdapter(routerStore, browserHistory);
    historyAdapter.observeRouterStateChanges();

    return routerStore;
}