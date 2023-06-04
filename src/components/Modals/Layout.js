import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../../context";
import { GrFormClose } from "react-icons/gr";
const Layout = ({ heading, content }) => {
  const { closeModal, setIsModalOpen, isMobile, isModalOpen } =
    useGlobalContext();
  const modalRef = useRef(null);

  useEffect(() => {
    if (isMobile()) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
    // eslint-disable-next-line
  }, []);

  if (!isMobile() && !isModalOpen) {
    return null;
  }
  return (
    <div
      className={`tt-modal ${isModalOpen ? "tt-modal-open" : ""}`}
      id="tt-modal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="tt-modal-label"
      aria-hidden="true"
      ref={modalRef}
      onClick={(e) => {
        if (e.target.classList.contains("tt-modal-open")) {
          closeModal(modalRef);
        }
      }}
    >
      <div className="tt-modal-content" role="document">
        <div className="tt-modal-header">
          <h5 className="tt-modal-title" id="tt-modal-label">
            {heading}
          </h5>
          <button
            className="tt-modal-close-btn"
            onClick={() => closeModal(modalRef)}
          >
            <GrFormClose />
          </button>
        </div>
        <div className="tt-modal-body">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
