import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #4caf50;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column; /* Coluna por padrão para telas pequenas */
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row; /* Linha para telas maiores */
    justify-content: space-between;
    align-items: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column; /* Coluna por padrão */
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row; /* Linha para telas maiores */
    align-items: center;
  }
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 300px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 10px;
    width: auto; /* Redefine a largura para ser dinâmica em telas maiores */
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #ff9800;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%; /* Garante que o botão ocupe toda a largura em telas pequenas */

  &:hover {
    background-color: #e68900;
  }

  @media (min-width: 768px) {
    width: auto; /* Redefine a largura para ser automática em telas maiores */
  }
`;

