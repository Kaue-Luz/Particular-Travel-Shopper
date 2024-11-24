import styled from "styled-components";

export const OptionsContainer = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: #1d1d2c;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  color: #fff;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #9c4cff;
  text-align: center;
`;

export const OptionCard = styled.div`
  padding: 16px;
  background-color: #2c2c3e;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;

  p {
    font-size: 1rem;
    color: #bbb;
    margin: 8px 0;
  }

  p:first-child {
    font-weight: bold;
    color: #fff;
  }
`;

export const ChooseButton = styled.button`
  padding: 12px;
  margin-top: 16px;
  background-color: #3a4e87;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2d3a6f;
  }

  &:active {
    transform: scale(0.98);
  }
`;
