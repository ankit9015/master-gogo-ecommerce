import React, { useEffect } from "react";
import "./Toast.css";

import { useToast } from "../../context/ToastContext/ToastContext";
import { AiOutlineClose } from "../../utils/icon";

function Toast({ children, id }) {
  const { removeToast } = useToast();
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [id, removeToast]);

  return (
    <div className="toast text-md flex-row">
      {children}{" "}
      <AiOutlineClose onClick={() => removeToast(id)} fontSize="large" />
    </div>
  );
}

export default Toast;
