import React, { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showModal, setShowModal] = useState(true);
  const cancel = () => {setShowModal(false)}
  return (
    <React.Fragment>
      <Modal title="Modal" show={showModal} onClose={cancel}></Modal>
    </React.Fragment>
  );
}

export default App;
