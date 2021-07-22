import React, { Suspense } from 'react';
import { observer } from 'mobx-react';
import { RouterContext, RouterView } from 'mobx-state-router';
import { RootStoreContext } from './contexts/RootStoreContext';
import { initApp } from './init';
import { viewMap } from './viewMap';

// Initialize the app
const rootStore = initApp();
const { routerStore } = rootStore;

// App must be an observer to react to theme changes
export const App = observer(() => {
    return (
    <RootStoreContext.Provider value={rootStore}>
        <RouterContext.Provider value={routerStore}>
            <RouterView viewMap={viewMap} />
        </RouterContext.Provider>
    </RootStoreContext.Provider>
    );
});
