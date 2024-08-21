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
      <div className="container">
        <CurrentUser openModal={openModal} />
        <PostComponent />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Manage Members">
          <button onClick={closeModal}>닫기</button>
          <MemberComponent />
        </Modal>
      </div>
    </div>
  );
}

export default App;
