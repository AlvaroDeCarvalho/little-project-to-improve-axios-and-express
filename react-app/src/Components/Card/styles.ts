import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 490px;
  margin: 10px;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px;
  max-width: 100%;
  max-height: 100%;
  div {
    max-width: 100%;
    max-height: 100%;
  }
  img {
    width: 100%;
    height: 240px;
    border-radius: 10px;
    object-fit: cover;
  }
`;