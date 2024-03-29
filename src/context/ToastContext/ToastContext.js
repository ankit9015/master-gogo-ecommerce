import React, { createContext, useCallback, useContext, useState } from "react";
import { ToastContainer } from "../../components";

const ToastContext = createContext();
let id = 0;
function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback(
    ({ content, type }) => {
      content &&
        setToasts((toasts) => [...toasts, { id: id++, content, type }]);
    },
    [setToasts]
  );

  const removeToast = useCallback(
    (id) => {
      setToasts((toasts) => toasts.filter((t) => t.id !== id));
    },
    [setToasts]
  );
  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ToastContainer toasts={toasts} />
      {children}
    </ToastContext.Provider>
  );
}

const useToast = () => useContext(ToastContext);

export { ToastProvider, useToast };
