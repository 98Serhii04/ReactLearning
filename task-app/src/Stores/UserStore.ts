import { makeAutoObservable, observable, action } from "mobx"
import { createRouterState, RouterState, routerStateToUrl } from 'mobx-state-router';
import { User } from "../Models/User";
import { RootStore } from "./RootStore";

const defaultState = createRouterState('tasks');
const login = createRouterState('login');

export class UserStore{
    rootStore: RootStore;
    user?: User;

    loginRedirect: RouterState = defaultState;

    constructor(rootStore: RootStore){
        this.rootStore = rootStore;
        makeAutoObservable(this);
    }

    setUser = (user:User) => {
        this.user = user;
        this.rootStore.routerStore.goToState(this.loginRedirect);
    };

    clearUser = () => {
        this.user = undefined;
    };

    setLoginRedirect = (routerState: RouterState) => {
        this.loginRedirect = routerState;

    };

    logout(){
        this.clearUser;
        this.rootStore.routerStore.goToState(login);
    }
}