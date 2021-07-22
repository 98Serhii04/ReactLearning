import React, { useContext } from 'react';
import { RootStore } from '../Stores/RootStore';

export const RootStoreContext = React.createContext<RootStore | undefined>(
    undefined
);

export function useRootStore(): RootStore {
    const rootStore = useContext(RootStoreContext);
    if (rootStore === undefined) {
        throw new Error('useRootStore must be used within a RootStoreProvider');
    }
    return rootStore;
}
