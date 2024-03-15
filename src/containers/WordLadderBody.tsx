import { Container, Grid, Toolbar } from "@mui/material";

import { WordLadder } from "../components/WordLadder/WordLadder";

export const WordLadderBody = () => {
    return (
        <>
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <WordLadder/>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
