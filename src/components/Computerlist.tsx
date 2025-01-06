import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SuccessMessage = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4caf50;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.5s, fadeOut 0.5s 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateX(-50%) translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateX(-50%) translateY(20px);
    }
  }
`;

const ListContainer = styled.div`
  margin: 20px;
`;

const ComputerItem = styled.div`
  padding: 15px;
  border: 1px solid #ccc;
  margin-bottom: 15px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
`;

const Label = styled.span`
  font-weight: bold;
  color: #333;
`;

const Value = styled.span`
  color: #555;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  gap: 5px;
  padding: 10px 5px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  width: 150px;

  &:hover {
    background-color: #45a049;
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const ButtonCancel = styled.button`
  background-color: #ffa500;
  color: white;
  border: none;
  gap: 10px;
  padding: 10px 5px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  width: 150px;

  &:hover {
    background-color: #ff8c00;
  }
`;

const EditButton = styled(Button)`
  background-color: #ffa500;
  &:hover {
    background-color: #ff8c00;
  }
`;

const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 100%;
  margin-bottom: 15px;

  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`;

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

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 50%;
  position: relative;
`;

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

const FormContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h3`
  text-align: center;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

interface Computer {
  id: number;
  ip: string;
  nome: string;
  anydeskId: string;
  setor: string;
}

interface ComputerListProps {
  searchQuery: string;
}

const ComputerList: React.FC<ComputerListProps> = ({ searchQuery }) => {
  const [computers, setComputers] = useState<Computer[]>([]);
  const [filteredComputers, setFilteredComputers] = useState<Computer[]>([]);
  const [editingComputer, setEditingComputer] = useState<Computer | null>(null);
  const [editForm, setEditForm] = useState({ ip: '', nome: '', anydeskId: '', setor: '' });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    fetch('http://localhost:4000/api/computers')
      .then((response) => response.json())
      .then((data) => {
        setComputers(data);
        setFilteredComputers(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar computadores:', error);
      });
  }, []);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredComputers(computers);
    } else {
      const lowercasedQuery = searchQuery.toLowerCase();
      const filtered = computers.filter((computer) => {
        return (
          computer.nome.toLowerCase().includes(lowercasedQuery) ||
          computer.ip.includes(lowercasedQuery) ||
          computer.anydeskId.includes(lowercasedQuery) ||
          String(computer.id).includes(lowercasedQuery)
        );
      });
      setFilteredComputers(filtered);
    }
  }, [searchQuery, computers]);

  const handleRemoteAccess = (anydeskId: string | null, ip: string | null) => {
    try {
      if (anydeskId) {
       
        const anydeskLink = `anydesk://${anydeskId}`;
        window.location.replace(anydeskLink);
      } else if (ip) {
        
        const ultraVncPath = `"C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\UltraVNC\\UltraVNC Viewer.exe"`;
        const command = `${ultraVncPath} ${ip}`;
  
        
        window.location.replace(`file://${command}`);
      } else {
        alert('Não foi possível identificar o AnyDesk ou IP para conexão remota.');
      }
    } catch (error) {
      console.error('Erro ao tentar abrir o UltraVNC ou AnyDesk:', error);
      alert('Não foi possível acessar o computador remoto. Verifique se o AnyDesk ou UltraVNC estão instalados.');
    }
  };
  

  const handleEditClick = (computer: Computer) => {
    setEditingComputer(computer);
    setEditForm({ ip: computer.ip, nome: computer.nome, anydeskId: computer.anydeskId, setor: computer.setor });
    setIsModalOpen(true);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSaveEdit = (computerId: number) => {
    fetch(`http://localhost:4000/api/computers/${computerId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editForm),
    })
      .then((response) => response.json())
      .then((data) => {
        setComputers((prevComputers) =>
          prevComputers.map((computer) => (computer.id === computerId ? data : computer))
        );
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error('Erro ao atualizar computador:', error);
        alert('Erro ao atualizar computador');
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEditingComputer(null);
    setEditForm({ ip: '', nome: '', anydeskId: '', setor: '' });
  };

  const handleCopyIp = (ip: string) => {
    navigator.clipboard.writeText(ip)
      .then(() => {
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 2500);
      })
      .catch((error) => {
        console.error('Erro ao copiar IP:', error);
        alert('Não foi possível copiar o IP.');
      });
  };

  return (
    <div>
      {showSuccessMessage && (
        <SuccessMessage>IP copiado para a área de transferência!</SuccessMessage>
      )}

      <ListContainer>
        {filteredComputers.length > 0 ? (
          filteredComputers.map((computer) => (
            <ComputerItem key={computer.id}>
              <InfoContainer>
                <Info>
                  <Label>ID:</Label>
                  <Value>{computer.id}</Value>
                </Info>
                <Info>
                  <Label>Nome do computador:</Label>
                  <Value>{computer.nome}</Value>
                </Info>
                <Info>
                  <Label>IP:</Label>
                  <Value onClick={() => handleCopyIp(computer.ip)}>{computer.ip}</Value>
                </Info>
                <Info>
                  <Label>AnyDesk:</Label>
                  <Value>{computer.anydeskId}</Value>
                </Info>
                <Info>
                  <Label>Setor:</Label>
                  <Value>{computer.setor}</Value>
                </Info>
              </InfoContainer>
              <Button onClick={() => handleRemoteAccess(computer.anydeskId, computer.ip)}>Acesso Remoto</Button>
              <EditButton onClick={() => handleEditClick(computer)}>Editar</EditButton>
            </ComputerItem>
          ))
        ) : (
          <p>Não há computadores correspondentes à pesquisa.</p>
        )}
      </ListContainer>

    
      {isModalOpen && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={handleCancel}>X</CloseButton>
            <FormContainer>
              <FormTitle>Editar Computador</FormTitle>
              <FormGroup>
                <label>Nome:</label>
                <Input
                  name="nome"
                  value={editForm.nome}
                  onChange={handleEditChange}
                />
              </FormGroup>
              <FormGroup>
                <label>IP:</label>
                <Input
                  name="ip"
                  value={editForm.ip}
                  onChange={handleEditChange}
                />
              </FormGroup>
              <FormGroup>
                <label>AnyDesk:</label>
                <Input
                  name="anydeskId"
                  value={editForm.anydeskId}
                  onChange={handleEditChange}
                />
              </FormGroup>
              <FormGroup>
                <label>Setor:</label>
                <Input
                  name="setor"
                  value={editForm.setor}
                  onChange={handleEditChange}
                />
              </FormGroup>
              <ContainerButtons>
                <Button onClick={() => handleSaveEdit(editingComputer!.id)}>Salvar</Button>
                <ButtonCancel onClick={handleCancel}>Cancelar</ButtonCancel>
              </ContainerButtons>
            </FormContainer>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default ComputerList;
