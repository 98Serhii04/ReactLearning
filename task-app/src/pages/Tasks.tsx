import Button from '@material-ui/core/Button';
import { useRootStore } from '../contexts';
import { makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';


export const Tasks = () => {
    const rootStore = useRootStore();
    const [name, setName] = useState('')

    const handleNameChange = (event: any) =>{
        setName(event.target.value);
    }
    

    return (
        <div>
            <TextField
                value={name}
                name="name"
                label="Name"
                margin="normal"
                fullWidth
                onChange={handleNameChange}
            />
        </div>
        );
}
