import { createPortal } from "react-dom";

const ModalOverlay = () => {
  const content = <div className="modal">Hallo</div>;

  return createPortal(content, document.getElementById("modal-hook"));
};

export default ModalOverlay;
