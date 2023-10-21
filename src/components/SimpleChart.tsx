/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState, SetStateAction }  from 'react';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

export const SimpleChart = () => {
    const [hoverData, setHoverData] = useState(null);
    const [chartOptions, setChartOptions] = useState({
        xAxis: {
            categories: ["A", "B", "C"],
        },
        series: [{ data: [1, 2, 3] }],
        plotOptions: {
            series: {
                point: {
                    events: {
                        mouseOver(e: {
                            target: { category: SetStateAction<null> };
                        }) {
                            setHoverData(e.target.category);
                        },
                    },
                },
            },
        },
    });

    const updateSeries = (): void => {
        const random: number = Math.random() * 5;
        // @ts-ignore
        setChartOptions({
            series: [{ data: [random, 2, 1] }],
        });
    };

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
            <h3>Hovering over {hoverData}</h3>
            <button onClick={updateSeries}>Update Series</button>
        </div>
    );
}

