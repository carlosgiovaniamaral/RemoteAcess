import styled from "styled-components";

export const FormContainer = styled.div`
  margin: 40px auto;
  width: 90%; /* Usar 90% da largura disponível para telas pequenas */
  max-width: 400px; /* Garantir uma largura máxima para telas grandes */
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  box-sizing: border-box;

  @media (max-width: 600px) {
    width: 95%; /* Para telas pequenas, diminuir a largura do formulário */
    padding: 20px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  color: #333;
  font-size: 29px;
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:hover {
    color: #f44336;
  }
`;

export const FormTitle = styled.h2`
  text-align: center;
  font-family: 'Arial', sans-serif;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 20px; /* Ajustar o tamanho da fonte para telas pequenas */
  }
`;

export const FormField = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #4caf50;
  }

  @media (max-width: 600px) {
    padding: 10px; /* Reduzir o padding para telas pequenas */
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }

  @media (max-width: 600px) {
    padding: 10px; /* Ajuste o padding para telas pequenas */
  }
`;

export const SuccessMessage = styled.p`
  text-align: center;
  font-size: 18px;
  color: green;
  margin-top: 20px;

  @media (max-width: 600px) {
    font-size: 16px; /* Ajuste o tamanho da fonte para telas pequenas */
  }
`;
