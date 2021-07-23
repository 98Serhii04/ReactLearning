import Button from '@material-ui/core/Button';
import { useRootStore } from '../contexts';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    buttonBar: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
    footer: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    link: {
        margin: theme.spacing(1),
    },
}));

export const Tasks = () => {
    const classes = useStyles();
    const rootStore = useRootStore();

    const handleSubmit = (event: any) => {
        event.stopPropagation();
        event.preventDefault();
        console.log(rootStore.userStore.user?.email);
    };


    return (
        <div>
            <form onSubmit={handleSubmit} className={classes.form}>
                <div className={classes.buttonBar}>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                    Sign In
                    </Button>
                </div>
            </form>
        </div>
        );
}
