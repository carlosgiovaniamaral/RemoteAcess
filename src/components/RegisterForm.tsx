import React, { useState } from 'react';
import styled from 'styled-components';


const FormContainer = styled.div`
  margin: 40px auto;
  width: 400px;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;


const FormTitle = styled.h2`
  text-align: center;
  font-family: 'Arial', sans-serif;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;


const FormField = styled.div`
  margin-bottom: 20px;
`;


const Label = styled.label`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
`;


const Input = styled.input`
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
`;


const Button = styled.button`
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
`;

const SuccessMessage = styled.p`
  text-align: center;
  font-size: 18px;
  color: green;
  margin-top: 20px;
`;


const RegisterForm: React.FC<{ onCloseModal: () => void }> = ({ onCloseModal }) => {
  const [ip, setIp] = useState('');
  const [nome, setNome] = useState('');
  const [anydeskId, setAnydeskId] = useState('');
  const [setor, setSetor] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/api/computers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ip, nome, anydeskId, setor }),
    });

    if (response.ok) {
      setIsSuccess(true);
      setTimeout(() => {
        onCloseModal(); 
      }, 2000); 
    } else {
      alert('Erro ao criar computador.');
    }
  };

  return (
    <FormContainer>
      <FormTitle>Cadastrar Novo Computador</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label>IP</Label>
          <Input
            type="text"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            placeholder="Digite o IP do computador"
          />
        </FormField>
        <FormField>
          <Label>Nome</Label>
          <Input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome do computador"
          />
        </FormField>
        <FormField>
          <Label>AnyDesk</Label>
          <Input
            type="text"
            value={anydeskId}
            onChange={(e) => setAnydeskId(e.target.value)}
            placeholder="Digite o ID do AnyDesk"
          />
        </FormField>
        <FormField>
          <Label>Setor</Label>
          <Input
            type="text"
            value={setor}
            onChange={(e) => setSetor(e.target.value)}
            placeholder="Digite o setor do computador"
          />
        </FormField>
        <Button type="submit">Cadastrar</Button>
      </form>

    
      {isSuccess && <SuccessMessage>Computador cadastrado com sucesso!</SuccessMessage>}
    </FormContainer>
  );
};

export default RegisterForm;
