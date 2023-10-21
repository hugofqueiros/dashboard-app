import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";

const SOCKETURL = "wss://ws.coincap.io/prices?assets=bitcoin";

const constantOptions = {
    title: {
        text: "REAL TIME BITCOIN PRICE (WAIT for it)"
    },
    xAxis: {
        type: "datetime",
    },
};

export const CryptoChartRealTime = () => {
    const { lastMessage } = useWebSocket(SOCKETURL);
    const [messageHistory, setMessageHistory] = useState([]);

    const [chartOptions, setChartOptions] = useState({
        ...constantOptions,
        series: [{ data: [] }],
    });

    setTimeout(
        () =>
            setChartOptions({
                ...constantOptions,
                series: [{ data: messageHistory }],
            }),
        1000
    );

    useEffect(() => {
        if (lastMessage !== null) {
            const value = parseInt(JSON.parse(lastMessage.data).bitcoin, 10);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setMessageHistory((prev) => [...prev, [Date.now(), value]])
        }
    }, [lastMessage, setMessageHistory]);

    return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};
