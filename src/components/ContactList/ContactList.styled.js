import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  width: 440px;
  max-height: 340px;
  padding: 50px;
  display: flex;
  gap: 26px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #333;
  border-radius: 10px;
  background-color: #ebebeb;
  overflow-x: hidden;
  overflow-y: scroll;
  margin-bottom: 30px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #777575;
    border-radius: 5px;
    
  }
`;