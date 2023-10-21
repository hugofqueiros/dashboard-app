/* eslint-disable @typescript-eslint/no-explicit-any */
// code from https://deadsimplechat.com/blog/react-suspense/
// "We created a utility method called the promiseWrapper to wrap the Axios request, and then created a custom hook called as useGetData that we will use in our components to send HTTP Get requests using Axios."
// Added the delay because of cors issues requesting to the apis :D, this is just to simulate a delay on the network to see suspense working
export const promiseWrapper = (promise: any, delay = 0) => {
    let status = "pending";
    let result: any;

    const s = promise
        .then((value: unknown) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    status = "success";
                    result = value;
                    resolve(value);
                }, delay);
            });
        })
        .catch((error: any) => {
            status = "error";
            result = error;
        });

    return () => {
        switch (status) {
            case "pending":
                throw s;
            case "success":
                return result;
            case "error":
                throw result;
            default:
                throw new Error("Unknown status");
        }
    };
}