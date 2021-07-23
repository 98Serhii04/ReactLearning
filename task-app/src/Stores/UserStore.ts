import { makeAutoObservable } from "mobx"
import { createRouterState, RouterState } from 'mobx-state-router';
import { User } from "../Models/UserModel";
import { RootStore } from "./RootStore";

const defaultState = createRouterState('tasks');
const login = createRouterState('login');

export class UserStore{
    rootStore: RootStore;
    user?: User;

    loginRedirect: RouterState = defaultState;

    constructor(rootStore: RootStore){
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

    setUser = (user:User) => {
        this.user = user;
        this.rootStore.routerStore.goToState(this.loginRedirect);
    };


    setLoginRedirect = (routerState: RouterState) => {
        this.loginRedirect = routerState;
    };

    logout() {
        this.user = undefined;
        this.rootStore.routerStore.goToState(login);
    }
}