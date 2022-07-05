import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

function Modal({ children }) {
  const portalRoot = document.getElementById("portal-root");

  const modalWrapper = (
    <>
      <div className="modal-backdrop"></div>
      <div
        className="modal"
        onClick={(e) => {
          e.stopPropagation;
        }}
      >
        {children}
      </div>
    </>
  );

  return createPortal(modalWrapper, portalRoot);
}

export default Modal;
