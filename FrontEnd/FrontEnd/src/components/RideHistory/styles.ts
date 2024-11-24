import styled from "styled-components";

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  margin-bottom: 1.5rem;
  color: #9c4cff;
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

export const LoadButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #3a4e87;
  color: white;
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

export const HistoryList = styled.ul`
  margin-top: 24px;
  padding: 0;
  list-style: none;

  li {
    padding: 14px;
    background-color: #2c2c3e;
    margin-bottom: 12px;
    border-radius: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #383b56;
    }

    span {
      display: block;
      font-size: 0.95rem;
      color: #bbb;
      margin-top: 6px;
    }
  }
`;
