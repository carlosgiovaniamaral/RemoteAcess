import React, { useState } from 'react';
import styled from 'styled-components';
import RegisterForm from './components/RegisterForm';
import Header from './components/header';
import ComputerList from './components/Computerlist';

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
  max-width: 100%;
  position: relative;
`;

// Botão de Fechar Modal
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d32f2f;
  }
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
            <CloseButton onClick={handleCloseModal}>X</CloseButton>
            {/* Passando a função handleCloseModal para o RegisterForm */}
            <RegisterForm onCloseModal={handleCloseModal} />
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default App;
