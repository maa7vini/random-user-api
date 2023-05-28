import styled from 'styled-components';

export const Container = styled.div`
  height: 600px;
  width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerLeft = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
`;

export const UserDiv = styled.div`
  height: 300px;
  width: 95%;
  border-radius: 10px;
  background: white;
`;

export const ContainerRight = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const UserInfo = styled.div`
  height: 300px;
  width: 100%;
  background: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserLocation = styled.div`
  height: 290px;
  width: 100%;
  background: white;
  border-radius: 10px;
  margin-top: 10px;
`;
