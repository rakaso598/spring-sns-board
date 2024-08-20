import React, { useState } from 'react';
import Modal from 'react-modal';
import CurrentUser from './CurrentUser';
import PostComponent from './PostComponent';
import MemberComponent from './MemberComponent';


function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="App">
      <CurrentUser openModal={openModal} />
      <PostComponent />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Manage Members"
      >
        <button onClick={closeModal}>X</button>
        <MemberComponent />
      </Modal>
    </div>
  );
}

export default App;
