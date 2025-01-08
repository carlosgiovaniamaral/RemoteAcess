import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #4caf50;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 300px;
  margin-right: 10px;
`;

export const Button = styled.button`
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
