import styled from "styled-components";

const varBlue = "#1a78b0";

export const DivFormContainer = styled.div`
  width: 20rem;
`;

export const DivSelectImage = styled.div`
  margin-top: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FormSendPhoto = styled.form`
  background-color: #f5f5f5;
  padding: 1.7rem 1.7rem 4rem 1.7rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export const HeaderInput = styled.label`
  font-size: 1.7rem;
`;

export const InputText = styled.input`
  font-size: 1.2rem;
  padding: 0.4rem;
  border: solid 1px ${varBlue};
  border-radius: 0.2rem;
`;

export const Label = styled.input`
  background-color: #3498db;
  padding: 0.4rem;
  color: white;
  cursor: pointer;
`;

export const InputButtonSend = styled.input`
  padding: 0.4rem;
  margin-top: 1rem;
  font-size: 1.3rem;
  border-radius: 0.3rem;
  border: 1px solid ${varBlue};
  color: white;
  background: #3498db;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
export const LabelInputSelectImage = styled.label`
  background-color: #3498db;
  padding: 0.4rem;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const InputSelectImage = styled.input`
  display: none;
`;
