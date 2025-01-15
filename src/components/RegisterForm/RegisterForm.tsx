import React, { useState } from 'react';
import { Button, CloseButton, FormContainer, FormField, FormTitle, Input, Label, SuccessMessage }
from './styles'


const RegisterForm: React.FC<{ onCloseModal: () => void }> = ({ onCloseModal }) => {
  const [ip, setIp] = useState('');
  const [nameComputer, setNomeComputer] = useState('');
  const [nameUser, setNameUser] = useState('');
  const [anydeskId, setAnydeskId] = useState('');
  const [setor, setSetor] = useState('');
  const [ramal, setRamal] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/api/computers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ip, nameComputer, nameUser, anydeskId, setor, ramal }),
    });
  
    if (response.ok) {
      setIsSuccess(true);
      setTimeout(() => {
        onCloseModal();
        window.location.reload(); // Recarrega a página
      }, 2000);
    } else {
      alert('Erro ao criar computador.');
    }
  };
  

  return (
    <FormContainer>
      <CloseButton onClick={onCloseModal}>&times;</CloseButton>
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
          <Label>Nome do computador</Label>
          <Input
            type="text"
            value={nameComputer}
            onChange={(e) => setNomeComputer(e.target.value)}
            placeholder="Digite o nome do computador"
          />
        </FormField>
        <FormField>
          <Label>Nome do usuário</Label>
          <Input
            type="text"
            value={nameUser}
            onChange={(e) => setNameUser(e.target.value)}
            placeholder="Digite o nome do usuário"
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
        <FormField>
          <Label>Ramal</Label>
          <Input
            type="text"
            value={ramal}
            onChange={(e) => setRamal(e.target.value)}
            placeholder="Digite o ramal do setor"
          />
        </FormField>
        <Button type="submit">Cadastrar</Button>
      </form>
      {isSuccess && <SuccessMessage>Computador cadastrado com sucesso!</SuccessMessage>}
    </FormContainer>
  );
};

export default RegisterForm;
