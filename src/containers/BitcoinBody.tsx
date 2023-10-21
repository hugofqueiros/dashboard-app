import { Container, Grid, Toolbar } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";

import { BitCoinChart, CryptoChartRealTime } from "../components";
import { Suspense } from "react";

export const BitcoinBody = () => {
    return (
        <>
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <ErrorBoundary
                            fallback={
                                <div>Error Occurred when loading Data..</div>
                            }
                        >
                            <Suspense
                                fallback={<p>Loading Bitcoint data...</p>}
                            >
                                <BitCoinChart />
                            </Suspense>
                        </ErrorBoundary>
                    </Grid>
                    <Grid item xs={12}>
                        <ErrorBoundary
                            fallback={
                                <div>Error Occurred..</div>
                            }
                        >
                            <CryptoChartRealTime />
                        </ErrorBoundary>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
