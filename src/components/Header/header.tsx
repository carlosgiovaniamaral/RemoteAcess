
import React from 'react';
import { Button, Container, HeaderContainer, Input } from './styles';

interface HeaderProps {
  onSearch: (query: string) => void;
  onOpenModal: () => void; 
}

const Header: React.FC<HeaderProps> = ({ onSearch, onOpenModal }) => {
  return (
    <HeaderContainer>
      <h1>RemoteAcess</h1>
      <Container>
        <Input
          type="text"
          placeholder="Buscar computador..."
          onChange={(e) => onSearch(e.target.value)}
        />
        <Button onClick={onOpenModal}>Cadastrar Computador</Button>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
