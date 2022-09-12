import React, { useEffect } from "react";
import "./Toast.css";

import { useToast } from "../../context/ToastContext/ToastContext";
import { AiOutlineClose } from "../../utils/icon";

const TOAST_TYPE = {
  SUCCESS: { backgroundColor: "#c8e6c9", color: "#1b5e20" },
  ERROR: { backgroundColor: "#ffcdd2", color: "#b71c1c" },
  INFO: { backgroundColor: "#c1def6", color: "#2962ff" },
};

function Toast({ children, id, type }) {
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
    <div
      className="toast text-md flex-row"
      style={TOAST_TYPE[type.toUpperCase()]}
    >
      {children}{" "}
      <AiOutlineClose onClick={() => removeToast(id)} fontSize="large" />
    </div>
  );
}

export default Toast;
