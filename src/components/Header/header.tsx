
import React from 'react';
import { Button, HeaderContainer, Input } from './styles';

interface HeaderProps {
  onSearch: (query: string) => void;
  onOpenModal: () => void; 
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
