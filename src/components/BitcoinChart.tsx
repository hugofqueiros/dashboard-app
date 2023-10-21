import { SetStateAction, useCallback, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

import { useGetData, useGetBitcoin } from "../utils/useGetData";

const TITLE = "Bitcoint price";
const SUBTITLE = 'Source: <a href="api.coincap.io/v2/assets/bitcoin/history?interval=d1 target="_blank">Wikipedia.com</a>"';
const YAXISTEXT = "Price USD";

export const BitCoinChart = () => {
    // Couldn't make it work so moved into a simpler solution :D
    // const data = useGetData("http://api.coincap.io/v2/assets/bitcoin/history?interval=d1");
    const bitcoinData = useGetBitcoin();

    const chartData = bitcoinData.map((d) => [d.time, parseInt(d.priceUsd, 10)]);

    const chartOptions = {
        title: {
            text: TITLE
        },
        subtitle: {
            text: SUBTITLE
        },
        yAxis: {
            title: {
                text: YAXISTEXT
            }
        },
        xAxis: {
            type: "datetime",
        },
        plotOptions: {
            area: {

            }
        },
        series: [{
            type: 'area',
            name: 'price',
            data: chartData
        }]
    }

    return <HighchartsReact highcharts={Highcharts} options={chartOptions} />
};