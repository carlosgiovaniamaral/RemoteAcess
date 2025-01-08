import styled from 'styled-components';

export const SuccessMessage = styled.div`
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

export const ListContainer = styled.div`
  margin: 20px;
`;

export const ComputerItem = styled.div`
  padding: 15px;
  border: 1px solid #ccc;
  margin-bottom: 15px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
`;

export const Label = styled.span`
  font-weight: bold;
  color: #333;
`;

export const Value = styled.span`
  color: #555;
  font-size: 16px;
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  gap: 5px;
  padding: 10px 5px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  width: 130px;

  &:hover {
    background-color: #45a049;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const ButtonCancel = styled.button`
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

export const EditButton = styled(Button)`
  background-color: #ffa500;
  &:hover {
    background-color: #ff8c00;
  }
`;

export const Input = styled.input`
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

export const Modal = styled.div`
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

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 40px;
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

export const FormContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h3`
  text-align: center;
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;
