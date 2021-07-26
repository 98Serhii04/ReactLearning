import { makeAutoObservable,IObservableArray, observable} from "mobx"
import { TaskModel } from "../Models/TaskModel";
import { RootStore } from "./RootStore";
import nextId from "react-id-generator";

const ta: TaskModel = {id: 'wdw', name : 'sd', isDone: false}

export class TasksStore{
    rootStore: RootStore;
    tasks: IObservableArray<TaskModel> = observable.array([ta]);

    constructor (rootStore: RootStore){
        this.rootStore = rootStore;
        makeAutoObservable(this);
    }

    addTask(name: string)
    {
        const task: TaskModel = {
            id: nextId(),
            name: name,
            isDone: false
        }
        this.tasks.push(task);
    }

    deleteTask(id: string){
        const element = this.tasks.find(e => e.id === id);
        if(element)
        {
            this.tasks.remove(element);
        }
    }

    toggleTask(id: string){
        const element = this.tasks.find(e => e.id === id);
        if(element)
        {
            element.isDone = !element.isDone;
        }
    }
}