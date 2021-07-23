import { makeAutoObservable,IObservableArray, observable} from "mobx"
import { TaskModel } from "../Models/TaskModel";
import { RootStore } from "./RootStore";


export class TasksStore{
    rootStore: RootStore;
    tasks: IObservableArray<TaskModel> = observable.array([]);
    
    constructor (rootStore: RootStore){
        this.rootStore = rootStore;
        makeAutoObservable(this);
    }

    addTask(task: TaskModel){
        this.tasks.push(task);
    }

    deleteTask(id: number){
        const element = this.tasks.find(e => e.id === id);
        if(element)
        {
            this.tasks.remove(element);
        }
    }

    toggleTask(id: number){
        const element = this.tasks.find(e => e.id === id);
        if(element)
        {
            element.isDone = !element.isDone;
        }
    }
}