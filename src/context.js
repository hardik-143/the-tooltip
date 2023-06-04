import React, { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openBetterExperienceModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = (modal) => {
    modal.current.classList.add("tt-modal-closing");
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300);
  };
  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        openBetterExperienceModal,
        closeModal,
        isMobile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
