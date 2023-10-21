import { HashRouter, Route, Routes } from "react-router-dom";

import { Home, How, DefaultDashboardBody, BitcoinBody, MarketCapBody, Reducer } from "./containers";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="" element={<DefaultDashboardBody />} />
                    <Route path="test" element={<DefaultDashboardBody />} />
                    <Route path="bitcoin" element={<BitcoinBody />} />
                    <Route path="marketcap" element={<MarketCapBody />} />
                    <Route path="reducer" element={<Reducer />} />
                    <Route path="how" element={<How />} />
                    <Route
                        path="about"
                        element={
                            <h1 style={{marginTop: "100px"}}>
                                about <a href="#">go back</a>
                            </h1>
                        }
                    />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;

declare global {
    interface Window {
        electron: {
            ipcRenderer: {
                send: (channel: string, ...args: unknown[]) => void;
                on: (
                    channel: string,
                    func: (...args: unknown[]) => unknown
                ) => void;
            };
        };
    }
}
