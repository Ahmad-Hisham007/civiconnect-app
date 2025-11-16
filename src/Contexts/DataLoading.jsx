import React, { createContext, useRef, useState } from 'react';
import toast from 'react-hot-toast';
// eslint-disable-next-line react-refresh/only-export-components
export const DataLoadingContext = createContext();
const DataLoading = ({ children }) => {
    const [isDataLoading, setIsDataLoading] = useState(false);
    const loadingPromise = useRef(null);
    const startLoading = (promise, loadingMessage = 'Loading...', successMessage = 'Success!', errorMessage = 'Error!') => {
        setIsDataLoading(true);
        if (loadingPromise.current) {
            toast.dismiss(loadingPromise.current);
        }
        loadingPromise.current = toast.promise(
            promise,
            {
                loading: loadingMessage,
                success: <b>{successMessage}</b>,
                error: <b>{errorMessage}</b>,
            }
        );
        promise.finally(() => {
            setIsDataLoading(false);
            loadingPromise.current = null;
        });

        return loadingPromise.current;
    };
    const dataloading = {
        isDataLoading,
        startLoading
    }
    // isDataLoading && 
    return <DataLoadingContext.Provider value={dataloading}>
        {children}
    </DataLoadingContext.Provider>
};

export default DataLoading;