import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import ModalBody from "../../components/Modal/ModalBody";
import ModalFooter from "../../components/Modal/ModalFooter";

function App() {
  const [showModal, setShowModal] = useState(false);
  const cancelModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  const btnConfigurations = [
    {
      type: "primary",
      label: "Continue",
      onClick: () => alert("Hello, world!"),
    },
    { type: "danger", label: "Close", onClick: cancelModal },
  ];

  return (
    <React.Fragment>
      <button className="btn btn-primary" onClick={openModal}>
        Open modal
      </button>
      <Modal title="Modal" show={showModal} onClose={cancelModal}>
        <ModalBody>This modal's content</ModalBody>
        <ModalFooter buttons={btnConfigurations} />
      </Modal>
    </React.Fragment>
  );
}

export default App;