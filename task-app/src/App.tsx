import { observer } from 'mobx-react';
import { RouterContext, RouterView } from 'mobx-state-router';
import { RootStoreContext } from './contexts/RootStoreContext';
import { initApp } from './init';
import { viewMap } from './viewMap';

const rootStore = initApp();
const { routerStore } = rootStore;

export const App = observer(() => {
    return (
    <RootStoreContext.Provider value={rootStore}>
        <RouterContext.Provider value={routerStore}>
            <RouterView viewMap={viewMap} />
        </RouterContext.Provider>
    </RootStoreContext.Provider>
    );
});
