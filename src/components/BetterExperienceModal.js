import React, { useEffect, useRef } from "react";
import { GrFormClose } from "react-icons/gr";
import { useGlobalContext } from "../context";
const BetterExperienceModal = () => {
  const { closeModal, setIsModalOpen, isMobile, isModalOpen } =
    useGlobalContext();
  const modalRef = useRef(null);

  useEffect(() => {
    if (isMobile()) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
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
            Better Experience
          </h5>
          <button
            className="tt-modal-close-btn"
            onClick={() => closeModal(modalRef)}
          >
            <GrFormClose />
          </button>
        </div>
        <div className="tt-modal-body">
          <p>
            Try to use the-tooltip on your computer or laptop, you will get
            better user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BetterExperienceModal;
