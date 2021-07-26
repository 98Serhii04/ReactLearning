import { makeAutoObservable,IObservableArray, observable} from "mobx"
import { TaskModel } from "../Models/TaskModel";
import { RootStore } from "./RootStore";


export class TaskStore{
    rootStore: RootStore;
    task?: TaskModel;
    
    constructor (rootStore: RootStore){
        this.rootStore = rootStore;
        makeAutoObservable(this);
    }

    setTask = (task:TaskModel) => {
        this.task = task;
    };

    toggleTask = () => {
        if(this.task)
        {
            this.task.isDone = !this.task.isDone;
        }
        console.log(this.task);
    };
}