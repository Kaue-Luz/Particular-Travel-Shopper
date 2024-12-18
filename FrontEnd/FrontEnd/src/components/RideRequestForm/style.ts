import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: #1d1d2c;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  color: #fff;
`;

export const FormTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #9c4cff;
  text-align: center;
`;

export const InputField = styled.input`

  padding: 12px;
  margin-bottom: 1.5rem;
  background-color: #2c2c3e;
  color: #fff;
  border: 1px solid #4c4c67;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
    border-color: #9c4cff;
  }
`;

export const FormButton = styled.button`
  padding: 12px;
  margin-top: 16px;
  width: 100%;
  background-color: #3a4e87;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2d3a6f;
  }

  &:active {
    transform: scale(0.98);
  }
`;
