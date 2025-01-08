import React, { useEffect, useState } from 'react';
import { FaClipboard } from 'react-icons/fa'; // Ícone de clipboard

import {
  SuccessMessage,
  ListContainer,
  ComputerItem,
  InfoContainer,
  Info,
  Label,
  Value,
  Button,
  EditButton,
  Input,
  Modal,
  ModalContent,
  CloseButton,
  FormContainer,
  FormTitle,
  FormGroup,
  ContainerButtons,
  ButtonCancel,
} from './styles';

interface Computer {
  id: number;
  ip: string;
  nameUser: string;
  nameComputer: string;
  anydeskId: string;
  setor: string;
  ramal: string;
}

interface ComputerListProps {
  searchQuery: string;
}

const ComputerList: React.FC<ComputerListProps> = ({ searchQuery }) => {
  const [computers, setComputers] = useState<Computer[]>([]);
  const [filteredComputers, setFilteredComputers] = useState<Computer[]>([]);
  const [editingComputer, setEditingComputer] = useState<Computer | null>(null);
  const [editForm, setEditForm] = useState({
    ip: '',
    anydeskId: '',
    setor: '',
    ramal: '',
    nameUser: '',
    nameComputer: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Busca inicial dos computadores
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

  // Filtro para a pesquisa
  useEffect(() => {
    const normalizeString = (str: string | number | null) => (str ? String(str).toLowerCase() : '');
    const lowercasedQuery = normalizeString(searchQuery);

    if (!lowercasedQuery) {
      setFilteredComputers(computers);
      return;
    }

    const filtered = computers.filter((computer) => {
      return (
        normalizeString(computer.id).includes(lowercasedQuery) ||
        normalizeString(computer.nameComputer).includes(lowercasedQuery) ||
        normalizeString(computer.nameUser).includes(lowercasedQuery) ||
        normalizeString(computer.ip).includes(lowercasedQuery) ||
        normalizeString(computer.anydeskId).includes(lowercasedQuery) ||
        normalizeString(computer.setor).includes(lowercasedQuery) ||
        normalizeString(computer.ramal).includes(lowercasedQuery)
      );
    });

    setFilteredComputers(filtered);
  }, [searchQuery, computers]);

  const handleEditClick = (computer: Computer) => {
    setEditingComputer(computer);
    setEditForm({
      ip: computer.ip,
      nameComputer: computer.nameComputer,
      anydeskId: computer.anydeskId,
      setor: computer.setor,
      ramal: computer.ramal,
      nameUser: computer.nameUser,
    });
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
    setEditForm({
      ip: '',
      anydeskId: '',
      setor: '',
      ramal: '',
      nameUser: '',
      nameComputer: '',
    });
  };

  const handleCopyIp = (ip: string) => {
    navigator.clipboard
      .writeText(ip)
      .then(() => {
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 2500);
      })
      .catch((error) => {
        console.error('Erro ao copiar IP:', error);
        alert('Não foi possível copiar o IP.');
      });
  };

  const handleRemoteAccess = (anydeskId: string | null, ip: string | null) => {
    try {
      if (anydeskId) {
        // Tentar abrir o AnyDesk
        const anydeskLink = `anydesk://${anydeskId}`;
        window.location.href = anydeskLink;
      } else if (ip) {
        // Tentar abrir o UltraVNC Viewer
        const ultraVncPath = "C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\UltraVNC\\UltraVNC Viewer.exe";
        const command = `${ultraVncPath} ${ip}`;
        
        // Redirecionar para o comando do UltraVNC
        const ultraVncLink = `file:///${command}`;
        window.location.href = ultraVncLink;
      } else {
        alert("Não foi possível identificar o AnyDesk ou IP para conexão remota.");
      }
    } catch (error) {
      console.error("Erro ao tentar abrir o UltraVNC ou AnyDesk:", error);
      alert(
        "Não foi possível acessar o computador remoto. Verifique se o AnyDesk ou UltraVNC estão instalados."
      );
    }
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
                  <Value>{computer.nameComputer}</Value>
                </Info>
                <Info>
                  <Label>Nome do usuário:</Label>
                  <Value>{computer.nameUser}</Value>
                </Info>
                <Info>
                  <Label>IP:</Label>
                  <Value onClick={() => handleCopyIp(computer.ip)}>
                    {computer.ip} <FaClipboard style={{ marginLeft: '8px', cursor: 'pointer' }} />
                  </Value>
                </Info>
                <Info>
                  <Label>AnyDesk:</Label>
                  <Value>{computer.anydeskId}</Value>
                </Info>
                <Info>
                  <Label>Setor:</Label>
                  <Value>{computer.setor}</Value>
                </Info>
                <Info>
                  <Label>Ramal:</Label>
                  <Value>{computer.ramal}</Value>
                </Info>
              </InfoContainer>
              <Button onClick={() => handleRemoteAccess(computer.anydeskId, computer.ip)}>
                Acesso Remoto
              </Button>
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
                <label>IP:</label>
                <Input name="ip" value={editForm.ip} onChange={handleEditChange} />
              </FormGroup>
              <FormGroup>
                <label>Nome do computador:</label>
                <Input name="nameComputer" value={editForm.nameComputer} onChange={handleEditChange} />
              </FormGroup>
              <FormGroup>
                <label>Nome do usuário:</label>
                <Input name="nameUser" value={editForm.nameUser} onChange={handleEditChange} />
              </FormGroup>
              <FormGroup>
                <label>AnyDesk:</label>
                <Input name="anydeskId" value={editForm.anydeskId} onChange={handleEditChange} />
              </FormGroup>
              <FormGroup>
                <label>Setor:</label>
                <Input name="setor" value={editForm.setor} onChange={handleEditChange} />
              </FormGroup>
              <FormGroup>
                <label>Ramal:</label>
                <Input name="ramal" value={editForm.ramal} onChange={handleEditChange} />
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
