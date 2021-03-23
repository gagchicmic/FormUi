import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  return createPortal(<div>{children}</div>, modalRoot);
};

export default Modal;
