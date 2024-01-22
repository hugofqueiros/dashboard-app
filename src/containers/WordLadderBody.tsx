import { Container, Grid, Toolbar } from "@mui/material";

export const WordLadderBody = () => {
    return (
        <>
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        WordLaderComponent
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
