import React, { useState } from "react";
import Alert from "../../components/Alert/Alert";
import Modal from "../../components/Modal/Modal";
import ModalBody from "../../components/Modal/ModalBody";
import ModalFooter from "../../components/Modal/ModalFooter";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const cancelModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  const cancelAlert = () => setShowAlert(false);
  const openAlert = () => setShowAlert(true);

  const btnConfigurations = [
    {
      type: "primary",
      label: "Continue",
      onClick: () => {
        cancelModal();
        openAlert();
      },
    },
    { type: "danger", label: "Close", onClick: () => cancelModal },
  ];

  return (
    <div className="container">
      <button className="btn btn-primary my-5" onClick={openModal}>
        Open modal
      </button>
      <Alert show={showAlert} type="success" onDismiss={cancelAlert} clickDismissable>
        You clicked Continue
      </Alert>
      <Modal title="Modal" show={showModal} onClose={cancelModal}>
        <ModalBody>This modal's content</ModalBody>
        <ModalFooter buttons={btnConfigurations} />
      </Modal>
    </div>
  );
}

export default App;