import React from "react";
import { createPortal } from "react-dom";
import Toast from "./Toast";
import "./Toast.css";

function ToastContainer({ toasts }) {
  const portalRoot = document.getElementById("portal-root");
  return createPortal(
    <div className="toast-container">
      {toasts.map((item) => (
        <Toast key={item.id} id={item?.id}>
          {item?.content}
        </Toast>
      ))}
    </div>,
    portalRoot
  );
}

export default ToastContainer;
