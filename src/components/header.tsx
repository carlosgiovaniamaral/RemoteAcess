// Header.tsx
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #4caf50;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 300px;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #ff9800;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e68900;
  }
`;

interface HeaderProps {
  onSearch: (query: string) => void;
  onOpenModal: () => void; // Adicionando a prop para abrir o modal
}

const Header: React.FC<HeaderProps> = ({ onSearch, onOpenModal }) => {
  return (
    <HeaderContainer>
      <h1>Gerenciamento de Computadores</h1>
      <div>
        <Input
          type="text"
          placeholder="Buscar por nome, IP ou AnyDesk..."
          onChange={(e) => onSearch(e.target.value)}
        />
        <Button onClick={onOpenModal}>Cadastrar Computador</Button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
