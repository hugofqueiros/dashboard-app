import * as React from "react";
import {
    Button,
    Container,
    Grid,
    Paper,
    Toolbar,
    Typography,
} from "@mui/material";

const initialState = { count: 0 };

type ACTIONTYPE =
    | { type: "increment"; payload: number }
    | { type: "decrement"; payload: string };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
    switch (action.type) {
        case "increment":
            return { count: state.count + action.payload };
        case "decrement":
            return { count: state.count - Number(action.payload) };
        default:
            throw new Error();
    }
}

export const Reducer = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <>
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Paper>
                            <Typography
                                component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                sx={{ flexGrow: 1 }}
                            >
                                Count: {state.count}
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper>
                            <Button
                                fullWidth={true}
                                onClick={() =>
                                    dispatch({
                                        type: "decrement",
                                        payload: "5",
                                    })
                                }
                            >
                                -
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper>
                            <Button
                                fullWidth={true}
                                onClick={() =>
                                    dispatch({ type: "increment", payload: 5 })
                                }
                            >
                                +
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
