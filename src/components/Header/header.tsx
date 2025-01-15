import React from 'react';
import { Button, Container, HeaderContainer, Input, TitleHeader } from './styles';
import { IoMdArrowForward } from 'react-icons/io';

interface HeaderProps {
  onSearch: (query: string) => void;
  onOpenModal: () => void; 
}

const Header: React.FC<HeaderProps> = ({ onSearch, onOpenModal }) => {
  return (
    <HeaderContainer>
      <TitleHeader>
        RemoteAcess
      </TitleHeader>
      <IoMdArrowForward style={{ width: '30px', height: '25', marginLeft: '8px' }} />
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
