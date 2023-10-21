// copied from https://deadsimplechat.com/blog/react-suspense/
import { useEffect, useState } from "react";
import axios from "axios";
import bitcoinData from "../assets/bitcoinData.json";

import { promiseWrapper } from "./promiseWrapper";

type BitcoinData = {
    priceUsd: string;  
    time: number;
    date: string;
}

export function useGetData(url: string) {
    const [resource, setResource] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const promise = axios.get(url,
                {
                    responseType: "json"
                }).then((response) => response.data);
            setResource(promiseWrapper(promise));
        };

        getData();
    }, [url]);

    return resource;
}

export function useGetBitcoin(delay = 0): BitcoinData[] {
    const [resource, setResource] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => setResource(bitcoinData?.data), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return resource;
}

export default useGetData;