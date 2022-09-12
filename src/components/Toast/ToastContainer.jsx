import React from "react";
import { createPortal } from "react-dom";
import Toast from "./Toast";

const style = {
  position: "fixed",
  top: "10rem",
  right: "0rem",
  zIndex: "99",
};

function ToastContainer({ toasts }) {
  const portalRoot = document.getElementById("portal-root");
  return createPortal(
    <div style={style} className="toast-container">
      {toasts.map((item) => (
        <Toast key={item.id} id={item?.id} type={item?.type}>
          {item?.content}
        </Toast>
      ))}
    </div>,
    portalRoot
  );
}

export default ToastContainer;
