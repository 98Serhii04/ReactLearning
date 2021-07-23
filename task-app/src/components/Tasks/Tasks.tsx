import { observer } from "mobx-react-lite";
import { useRouterStore } from "mobx-state-router";
import { useRootStore } from "../../contexts";
import { TasksStore } from "../../Stores/TasksStore"


export const Tasks = observer(() => {
    const routerStore = useRouterStore();
    const rootStore = useRootStore();
    const {tasksStore} = rootStore;
    const {tasks} = tasksStore;
    
    return(
        <div>
            <ul>
            {tasks.map((task)=>{
                
            })}
            </ul>
        </div>
    )
})