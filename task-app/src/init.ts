import { configure } from 'mobx';
import { browserHistory, HistoryAdapter } from 'mobx-state-router';
import { RootStore } from './Stores/RootStore';

function initMobX() {
    configure({ enforceActions: 'observed' });
}

function initStores() {
    const rootStore = new RootStore();
    const {routerStore } = rootStore;

    const historyAdapter = new HistoryAdapter(routerStore, browserHistory);
    historyAdapter.observeRouterStateChanges();

    return rootStore;
}

export function initApp() {
    initMobX();
    return initStores();
}