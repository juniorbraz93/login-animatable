import styled from "styled-components";


export const Container = styled.View`
  flex: 1;
  background-color: #1b1c29;
`;

export const ContainerImage = styled.View`
  flex: 2;
  background-color: #1b1c29;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 100%;
`;
export const ContainerForm = styled.View`
  flex:1;
  background-color: #FFF;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding-start: 5%;
  padding-end: 5%;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 28px;
  margin-bottom: 12px;
`;

export const Login = styled.Text`
  color: #A1A1A1
`;

export const Button = styled.TouchableOpacity`
  position: absolute;
  background-color: #1b1c29;
  border-radius: 50px;
  padding-vertical: 8px;
  width: 60%;
  align-self: center;
  bottom: 15%;
  justify-content: center;
  align-items: center;
`;

export const BtnText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #FFF;
`;
