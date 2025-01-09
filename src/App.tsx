import React, { useState } from 'react';
import styled from 'styled-components';
import RegisterForm from './components/RegisterForm/RegisterForm';
import Header from './components/Header/header';
import ComputerList from './components/ComputerList/Computerlist';

// Modal Background
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// Modal Content Styling
const ModalContent = styled.div`
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 80%;
  position: relative;
`;



const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lógica de busca
  const handleSearch = (query: string) => {
    setSearchQuery(query); // Atualiza o termo de pesquisa
  };

  // Funções para abrir e fechar o modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header onSearch={handleSearch} onOpenModal={handleOpenModal} />
      <ComputerList searchQuery={searchQuery} />

      {/* Modal de Cadastro */}
      {isModalOpen && (
        <Modal>
          <ModalContent>

            {/* Passando a função handleCloseModal para o RegisterForm */}
            <RegisterForm onCloseModal={handleCloseModal} />
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default App;
