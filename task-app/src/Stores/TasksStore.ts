import { makeAutoObservable,IObservableArray, observable} from "mobx"
import { Task } from "../Models/Task";
import { RootStore } from "./RootStore";


export class TasksStore{
    rootStore: RootStore;
    tasks: IObservableArray<Task> = observable.array([]);
    
    constructor (rootStore: RootStore){
        this.rootStore = rootStore;
        makeAutoObservable(this);
    }

    addTask(task: Task){
        this.tasks.push(task);
    }

    deleteTask(id: number){
        const element = this.tasks.find(e => e.id === id);
        if(element)
        {
            this.tasks.remove(element);
        }
    }
}