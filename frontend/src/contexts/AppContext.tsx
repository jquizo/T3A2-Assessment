import React, { useContext, useState } from "react";


type ToastMessage = {
    message: string;
    type: "SUCCESS" | "ERROR";
  };

type AppContext = {
    showToast: (toastMessage: ToastMessage) => void;

};

const AppContext = React.createContext<AppContext | undefined>(undefined);


export const AppContextProvider = ({
    children,
}: { children: React.ReactNode;
}) => {
    return (
        <AppContextProvider>
            {children}
        </AppContextProvider>
    )
};